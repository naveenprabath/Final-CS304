import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Img1 from "../Images/logo.png";
import axios from "axios";
import BASE_URL from "../config/apiConfig";

function AddClearance() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [email, setEmail] = useState("");
  const [combination, setCombination] = useState("");
  const [clearenceDescription, setClearenceDescription] = useState("");
  const [status, setStatus] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  const handleSubmit = () => {
    const axiosConfig = {
      method: "POST",
      url: `${BASE_URL}clearenceReport/ADDClearance`,
      data: {
        studentName,
        studentId,
        email,
        combination,
        clearenceDescription,
        status,
        totalAmount,
      },
    };
    axios(axiosConfig)
      .then((response) => {
        console.log(response);
        response = "Successfully added clearence Details";
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
      <Button variant="" onClick={handleShow} type="button" style={{ fontFamily: "times new roman",  color: "#B40505",     textAlign: "center"}}>
       <b> ADD </b>
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header >
          <div style={{ display: 'flex', justifyContent: 'center' }}>

          <img  src={Img1} alt="LOgo" 
             style={{ width: '60px', height: '60px' }}
          />

          <Modal.Title style={{ fontSize: '24px', color: '#333', margin: '0 80px', fontFamily:"times new roman" }}> Add Clearnce Details</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="studentName">
                <Form.Label>Student Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Student Name" value={studentName}      onChange={(e) => setStudentName(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="studentID">
                <Form.Label>Student ID</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={studentId}  onChange={(e) => setStudentId(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="combination">
                <Form.Label>Combination</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter items"
                  value={combination}
                  onChange={(e) => setCombination(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="clearenceDescription">
                <Form.Label>Clearance Description</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value = {clearenceDescription}
                  onChange={(e) => setClearenceDescription(e.target.value)}
                >
                  <option>Select Clearance Type</option>
                  <option value="1">Department Clearance</option>
                  <option value="2">Library Clearance
                  </option>
                  <option value="3">Hostal Clearance   
                  </option>
                  <option value="4">Sports Clearance
                  </option>
                  <option value="5">
                    financial Aid Clearance
                  </option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value = {status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>Select paid or not</option>
                  <option value="1">Paid</option>
                  <option value="2">Pending
                  </option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="totalAmount">
                <Form.Label> Clearance Amount </Form.Label>
                 <Form.Control
                      type="text"
                      placeholder="Enter Total"
                      value={totalAmount !== '' && !isNaN(totalAmount) ? `Rs ${parseFloat(totalAmount).toFixed(2)}` : ''} // Format the value as currency only if it's a valid number
                      onChange={(e) => {
                      // Remove non-numeric characters and set the totalAmount state
                      const input = e.target.value.replace(/[^\d.]/g, '');
                      setTotalAmount(input);
                      }}
                      />
                  </Form.Group>


              

              
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
        <Button
            variant="primary"
            type="submit"
            onClick={handleSubmit}
            style={{
              color: "#333",
              margin: "0 190px",
              fontFamily: "times new roman",
            }}
          >
            <b>ADD</b>
        </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );

}
export default AddClearance;