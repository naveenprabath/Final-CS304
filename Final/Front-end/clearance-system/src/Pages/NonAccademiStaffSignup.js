import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img1 from "../Images/logo.png";
import Nav from 'react-bootstrap/Nav';



function Signup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header >
        <div style={{ display: 'flex', justifyContent: 'center' }}>

            <img  src={Img1} alt="LOgo"  style={{ width: '60px', height: '60px' }} />
          <Modal.Title style={{ fontSize: '24px', color: '#333', margin: '0 80px', fontFamily:"times new roman"}}>Signup Page</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Contact Number" />
              </Form.Group>

              <Form.Label>Select Your Department</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select your Department</option>
                <option value="1">Computer Science & Statistics Department</option>
                <option value="2">Mathematics Department</option>
                <option value="3">Biology Department</option>
                <option value="4">Physics Department</option>
                <option value="5">Chemistry Department</option>
                <option value="6">Geology Department</option>
              </Form.Select>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="This is correct details" />
              </Form.Group>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
          <Nav.Link href="/StaffDashBoard" className="nav-link" style={{ fontFamily: "times new roman", color: "#FFC53A", textAlign: "center" }}>
           Signup
          </Nav.Link>
         
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Signup;
