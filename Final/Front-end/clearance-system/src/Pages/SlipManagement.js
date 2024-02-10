import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Col,
  Row,
  Modal,
  Alert,
} from 'react-bootstrap';
import Img1 from "../Images/logo.png";
import axios from "axios";
import BASE_URL from "../config/apiConfig";

function SlipManagement() {
  const [showAlert, setShowAlert] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bankName, setBankName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [slipId, setSlipId] = useState('');
  const [amount, setAmount] = useState('');
  const [slipFile, setSlipFile] = useState(null);

  const handleBankChange = (event) => {
    setBankName(event.target.value);
  };

  const handleIdNumberChange = (event) => {
    setIdNumber(event.target.value);
  };

  const handleSlipIdChange = (event) => {
    setSlipId(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };


  const handleConfirm = () => {
    // Submit slip information (replace with your actual submission logic)
    console.log('Slip information submitted:');
    console.log(bankName, idNumber, slipId, amount, slipFile);
    setShowConfirmation(false);
    setShowAlert(true); // Display success alert
  };

  const handleReset = () => {
    setBankName('');
    setIdNumber('');
    setSlipId('');
    setAmount('');
    setSlipFile(null);
    setShowAlert(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowConfirmation(true);

    const axiosConfig = {
      method: "POST",
      url: `${BASE_URL}slipManagement/SlipManagement`,
      data: {
        bankName,
        idNumber,
        slipId,
        amount,
        slipFile,
        
      },
    };
    axios(axiosConfig)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // setLoading(false);
      });
  };



  return (
    <div>
      <Button variant="" onClick={() => setShowAlert(true)}
      style={{
          fontFamily: "Lora",
          color: "#B40505",
          textAlign: "center",
          fontWeight: 'bold',
        }}>Payment</Button>

      <Modal
        show={showAlert}
        onHide={() => setShowAlert(false)}
        backdrop="static" // Prevent closing on click outside
      >
        <Modal.Header >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img  src={Img1} alt="Logo" style={{ width: '60px', height: '60px' }} />
            <h2 style={{ fontSize: '24px', color: '#333', margin: '0 100px', fontFamily:"times new roman" }}>Slip Management</h2>
          </div>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <FormGroup as={Row}>
              <Col sm={16} offset={2}>
          <Alert variant="success" show={showAlert} onClose={() => setShowAlert(false)}>
            <p>Bank Name: {bankName}<Form.Control
                  type="text"
                  placeholder="Bank Name"
                  value={bankName}
                  onChange={handleBankChange}
                  required
                /></p>
            <p>ID Number: {idNumber} <Form.Control
                  type="text"
                  placeholder="ID Number"
                  value={idNumber}
                  onChange={handleIdNumberChange}
                  required
                /></p>
            <p>Slip ID: {slipId} <Form.Control
                  type="text"
                  placeholder="Slip ID"
                  value={slipId}
                  onChange={handleSlipIdChange}
                  required
                /></p>
            <p>Amount: {amount} <Form.Control
                  type="text"
                  placeholder="Amount"
                  value={amount}
                  onChange={handleAmountChange}
                  required
                /></p>
            <p>Add Slip:</p>
            <input type="file" onChange={(e) => setSlipFile(e.target.files[0])} accept="image/*" required />
          </Alert>

          
                
                
               
              </Col>
            </FormGroup>
            <FormGroup as={Row}>
              <Col sm={{ span: 10, offset: 8 }}>
                <Button type="submit" className="mr-2">Submit</Button>
                <Button variant="secondary" onClick={handleReset} className="ml-4">
                  Reset
                </Button>
              </Col>
            </FormGroup>
          </Form>

        </Modal.Body>
      </Modal>

      <Modal
        show={showConfirmation}
        onHide={() => setShowConfirmation(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Submission</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to submit this slip information?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmation(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SlipManagement;
