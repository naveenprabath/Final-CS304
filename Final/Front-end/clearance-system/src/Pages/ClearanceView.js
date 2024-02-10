import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Img1 from "../Images/logo.png";
import { Button } from 'react-bootstrap';

function ClearanceReportView() {
  const [clearanceReports, setClearanceReports] = useState([]);

  useEffect(() => {
    fetchClearanceReports();
  }, []);

  const fetchClearanceReports = async () => {
    try {
      const response = await axios.get('http://localhost:5000/clearenceReport');
      setClearanceReports(response.data);
    } catch (error) {
      console.error('Error fetching clearance reports:', error);
    }
  };

  const removeClearanceReport = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/clearenceReport/${id}`);
      setClearanceReports(clearanceReports.filter(report => report._id !== id));
      console.log('Clearance report deleted successfully');
    } catch (error) {
      console.error('Error deleting clearance report:', error);
    }
  };

  const toggleBackground = (index) => {
    const updatedReports = [...clearanceReports];
    updatedReports[index].backgroundColor = updatedReports[index].backgroundColor === 'gray' ? 'white' : 'gray';
    setClearanceReports(updatedReports);
  };

  const navBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    height: '55px',
    backgroundColor: '#333',
    color: '#fff',
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
          <span style={{ fontSize: '24px', fontFamily: 'times new roman', color: '#fff' }}>
            Student Clearance Report
          </span>
        </div>
        <div>
          <input type="text" style={searchBarStyle} />
          <Button variant="" style={{ fontFamily: "times new roman", color: '#fff', textAlign: "center" }}>
            Search
          </Button>
        </div>
      </nav>
      <br />

      <div>
        <ul>
          {clearanceReports.map((report, index) => (
            <div key={index} style={{ backgroundColor: report.backgroundColor || 'white' }}>
              <li>
                <p>Student Name: {report.studentName}</p>
                <p>Student ID: {report.studentId}</p>
                <p>email:{report.email}</p>
                <p>Status: {report.status === '1' ? 'Paid' : 'Pending'}</p>
                
                <p>Description: {report.clearenceDescription}</p>
                <p>Total Amount:{report.totalAmount}</p>
                
                <Button variant="danger" onClick={() => {
                  if (window.confirm('Are you sure you want to remove this clearance report?')) {
                    removeClearanceReport(report._id);
                  }
                }}>Remove</Button>
                <Button variant="success" onClick={() => toggleBackground(index)}>viewed</Button>
              </li>
              {index !== clearanceReports.length - 1 && <hr />} {/* Add a line break if not the last report */}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ClearanceReportView;
