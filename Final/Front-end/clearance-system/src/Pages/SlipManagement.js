import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Col,
  Row,
  Modal,
  Alert,
  CardText,
} from 'react-bootstrap';
import { TextField } from 'react-bootstrap-input/dist/SimpleInput/partials';
import Img1 from "../Images/logo.png";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowConfirmation(true); // Open confirmation modal
  };

  const handleConfirm = () => {
    // Submit slip information (replace with your actual submission logic)
    console.log('Slip information submitted:');
    console.log(bankName, idNumber, slipId, amount, slipFile);
    setShowConfirmation(false);
    setShowAlert(true); // Display success alert
  };

  const handleReset = () => {
    setStudentId('');
    setBankName('');
    setSlipId('');
    setAmount('');
    setSlipFile(null);
    setShowAlert(false);
  };

  return (
    <div>
      <Button onClick={() => setShowAlert(true)}>Open Slip Management</Button>

      <Modal
        show={showAlert}
        onHide={() => setShowAlert(false)}
        backdrop="static" // Prevent closing on click outside
      >
        <Modal.Header >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          
          <img  src={Img1} alt="LOgo" 
          style={{ width: '60px', height: '60px' }}
       />
          <h2 style={{ fontSize: '24px', color: '#333', margin: '0 100px', fontFamily:"times new roman" }}>Slip Management</h2>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="success" show={showAlert} onClose={() => setShowAlert(false)}>
            <p>Bank Name: {bankName}</p>
            <p>ID Number: {idNumber}</p>
            <p>Slip ID: {slipId}</p>
            <p>Amount: {amount}</p>
          </Alert>

          <Form onSubmit={handleSubmit}>
  <FormGroup as={Row}>
    <Col sm={10} offset={2}> {/* Add offset for right alignment */}
      <TextField
        type="text"
        id="bankName"
        value={bankName}
        onChange={handleBankChange}
        required
      />
      {/* ... other form fields ... */}
    </Col>
  </FormGroup>
  <FormGroup as={Row}> {/* Add a separate row for buttons */}
    <Col sm={{ span: 10, offset: 8 }}> {/* Align buttons to the right */}
      <Button type="submit"className="mr-2">Submit</Button >
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
