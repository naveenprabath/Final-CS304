import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import saveAs from 'file-saver';
import Img1 from "../Images/logo.png";
import Complain from "../Pages/Complain";

const ClearanceReport = () => {
  const [showReportModal, setShowReportModal] = useState(true);

  useEffect(() => {
    // Generate the report when the component is mounted
    const reportData = {
      id: 'S18904',
      name: 'Naveen Prabath',
      email: 's18904@sci.pdn.ac.lk',
      combination: '04',
      DepartmentClearence:false,
      libraryClearance: true,
      hostelClearance: false,
      sportsClearance: true,
      financialAidClearance: true,
      total :'Rs.530.00'
    };

    const reportElement = document.getElementById('clearanceReport');
    const reportHTML = `
      <div class="clearance-report">
        <h2>University Clearance Report</h2>
        <h3>Student Information</h3>
        <p><strong>Student ID:</strong> ${reportData.id}</p>
        <p><strong>Name:</strong> ${reportData.name}</p>
        <p><strong>Email:</strong> ${reportData.email}</p>
        <p><strong>Combination:</strong> ${reportData.combination}</p>
        <h3>Clearance Status</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Department</td>
              <td>${reportData.DepartmentClearence ? 'Cleared' : 'Pending'}</td>
            </tr>
            <tr>
              <td>Library</td>
              <td>${reportData.libraryClearance ? 'Cleared' : 'Pending'}</td>
            </tr>
            <tr>
              <td>Hostel</td>
              <td>${reportData.hostelClearance ? 'Cleared' : 'Pending'}</td>
            </tr>
            <tr>
              <td>Sports</td>
              <td>${reportData.sportsClearance ? 'Cleared' : 'Pending'}</td>
            </tr>
            <tr>
              <td>Financial Aid</td>
              <td>${reportData.financialAidClearance ? 'Cleared' : 'Pending'}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>${reportData.total}</td>
            </tr>
          </tbody>
        </Table>
      </div>`;

    reportElement.innerHTML = reportHTML;
  }, []);

  const handleCloseReportModal = () => {
    setShowReportModal(false);
  };

  const downloadReport = () => {
    const reportElement = document.getElementById('clearanceReport');
    const reportHTML = reportElement.innerHTML;
    const reportData = new Blob(['\ufeff', reportHTML], { type: 'text/html;charset=utf-8' });
    const filename = `clearance_report_${Date.now()}.html`;
    saveAs(reportData, filename);
  };

  return (
    <Modal show={showReportModal} onHide={handleCloseReportModal} centered>
      <Modal.Header >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
          
          <img  src={Img1} alt="LOgo" 
          style={{ width: '60px', height: '60px' }}
       />
        <h2 style={{ fontSize: '34px', color: '#333', margin: '0 70px', fontFamily:'times new roman' }}>Clearance Report</h2>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div id="clearanceReport"></div>
      </Modal.Body>
      <Modal.Footer>
       
        <Button variant="primary" onClick={downloadReport}>
          Download Report
        </Button>
       <Button variant="danger"style={{ color: 'black',  fontFamily:"times new roman" }}>Payment</Button>
        <Button variant="" style={{ color: 'black',  fontFamily:"times new roman" }}><div style={{ fontFamily: "times new roman", color: "#FFC53A", textAlign: "center" }}> 
            <Complain/>
          </div></Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ClearanceReport;
