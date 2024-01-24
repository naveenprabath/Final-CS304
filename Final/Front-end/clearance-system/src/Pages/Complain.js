import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Img1 from "../Images/logo.png";
import BASE_URL from "../config/apiConfig";

function Complain() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [studentId, setStudentId] = useState("");
  const [fullName, setFullName] = useState("");
  const [combination, setCombination] = useState("");
  const [complain, setComplain] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const axiosConfig = {
      method: "POST",
      url: `${BASE_URL}complain/Complain`,
      data: {
        studentId,
        fullName,
        combination,
        complain,
      },
    };

    axios(axiosConfig)
      .then((response) => {
        console.log(response);
        setSubmitSuccess(true);
        setSubmitError(null);
      })
      .catch((err) => {
        console.log(err);
        setSubmitSuccess(false);
        setSubmitError('An error occurred. Please try again.');
      })
      .finally(() => {
        // Reset form values and close modal if needed
        setStudentId("");
        setFullName("");
        setCombination("");
        setComplain("");
        setShow(false);
      });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>Submit Complaint</Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={Img1} alt="LOgo" style={{ width: '60px', height: '60px' }} />
            <Modal.Title style={{ fontSize: '24px', color: '#333', margin: '0 100px', fontFamily: "times new roman" }}>Submit Complaint</Modal.Title>
          </div>
        </Modal.Header>

        <Modal.Body>
          {submitSuccess && <div className="alert alert-success">Complaint submitted successfully!</div>}
          {submitError && <div className="alert alert-danger">{submitError}</div>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="studentId">
              <Form.Label>Student ID</Form.Label>
              <Form.Control
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="combination">
              <Form.Label>Combination</Form.Label>
              <Form.Control
                type="text"
                value={combination}
                onChange={(e) => setCombination(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="complain">
              <Form.Label>Complain</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={complain}
                onChange={(e) => setComplain(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" style={{ fontSize: '20px', color: '#333', margin: '0 140px', fontFamily: "times new roman" }}>
              Submit Complaint
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Complain;
