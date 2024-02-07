// PasswordChangeModal.js

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Img1 from "../Images/logo.png";

const PasswordChangeModal = ({ showModal, handleClose }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handlePasswordChange = () => {
    // Add logic to handle password change (e.g., send request to Node server)
    // This is a placeholder function, replace it with your actual implementation
    console.log('Password changed successfully!');
    handleClose(); // Close the modal after password change
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
      <img
              src={Img1}
              alt="LOgo"
              style={{ width: "60px", height: "60px" }}
            />
        <Modal.Title style={{
                fontSize: "24px",
                color: "#333",
                margin: "0 100px",
                fontFamily: "Lora",
              }}>Password Change</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your new password"
              value={confirmPassword}
              onChange = {(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handlePasswordChange}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PasswordChangeModal;
