import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import BASE_URL from "../config/apiConfig";
import Img1 from "../Images/logo.png";
import { Button } from 'react-bootstrap';

function PaymentHistory() {
  const [slipManagement, setSlipManagement] = useState([]);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const response = await axios.get(`${BASE_URL}slipManagement`);
      setSlipManagement(response.data);
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
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
            Student Payment
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
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Bank Name</th>
            <th>ID Number</th>
            <th>Slip ID</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {slipManagement.map((slipManagement, index) => (
            <tr key={index}>
              <td>{slipManagement.bankName}</td>
              <td>{slipManagement.idNumber}</td>
              <td>{slipManagement.slipId}</td>
              <td>{slipManagement.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default PaymentHistory;
