import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BASE_URL from "../config/apiConfig";

import Img1 from "../Images/logo.png";
import { Button } from 'react-bootstrap';


const ComplainView = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}complain`)
      .then(response => {
        setComplaints(response.data);
      })
      .catch(error => {
        console.error('Error fetching complaints:', error);
      });
  }, []);

  const removeComplaint = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/complain/${id}`);
      setComplaints(complaints.filter(report => report._id !== id));
      console.log('Complain deleted successfully');
    } catch (error) {
      console.error('Error deleting Complain:', error);
    }
  };

  const toggleBackground = (index) => {
    const updatedComplaint = [...complaints];
    updatedComplaint[index].backgroundColor = updatedComplaint[index].backgroundColor === 'gray' ? 'white' : 'gray';
    setComplaints(updatedComplaint);
  };

  const navBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    height: '55px',
    backgroundColor:  '#333' ,
    color: '#fff' ,
    borderRadius: '2px',
  };

  const searchBarStyle = {
    marginRight: '5px',
  className: "d-flex",
  borderRadius: '15px',
  };

  return (
    <div>
       <nav style={navBarStyle}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={Img1}
            alt="Logo"
            style={{ width: '60px', height: '60px', marginRight: '10px' }}
          />
          <span style={{ fontSize: '24px', fontFamily: 'times new roman', color: '#fff'  }}>
          Student Complain
          </span>
        </div>
        <div>
          <input type="text"style={searchBarStyle} />
          <Button variant="" style={{ fontFamily: "times new roman", color:  '#fff' , textAlign: "center" }}>
              Search
            </Button>
            </div>
      </nav>
      <br/>
      
      <ul>
      {complaints.map((complaint, index) => (
        <div key={index} style={{ marginBottom: '20px',  backgroundColor: complaint.backgroundColor || 'white' }}>
          <li>
          <p>Student Name:{complaint.fullName}</p><p> Student ID{complaint.studentId}</p>
          <p> Student Complain{complaint.description}</p>
          <Button variant="danger" onClick={() => {
               if (window.confirm('Are you sure you want to remove this complain?')) {
                    removeComplaint(complaint._id);
                  }
                }}>Remove</Button>
            <Button variant="success" onClick={() => toggleBackground(index)}>viewed</Button>
          </li>
          <hr />
        </div>
      ))}
      </ul>
    </div>
  );
};

export default ComplainView;
