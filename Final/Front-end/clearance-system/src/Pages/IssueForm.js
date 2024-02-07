// IssueForm.js
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Img1 from "../Images/logo.png";

const IssueForm = ({ show, handleClose }) => {
  const handleSubmit = () => {
    // add logic here to handle the form submission
    //  let's redirect to a Google Form URL
    window.location.href = 'YOUR_GOOGLE_FORM_URL';
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
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
              }}><center>Report an Issue</center></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="formIssueDescription">
            <Form.Label>Issue Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Describe the issue" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default IssueForm;
