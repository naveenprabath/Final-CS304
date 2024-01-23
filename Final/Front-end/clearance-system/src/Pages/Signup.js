import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Img1 from "../Images/logo.png";

import axios from "axios";

import BASE_URL from "../config/apiConfig";

function Signup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fullName, setFullName] = useState("");
  const [studentId, seStudentId] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [combination, setCombination] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   // Get form data
  //   //const { fullName, studentId, email, contactNumber, combination, password } = event.target.elements;
  //   const fullName = event.target.elements.fullName.value;
  //   const studentId = event.target.elements.studentId.value;
  //   const email = event.target.elements.email.value;
  //   const contactNumber = event.target.elements.contactNumber.value;
  //   const combination = event.target.elements.combination.value;
  //   const password = event.target.elements.password.value;

  //   try {
  //     // Send a POST request to the backend using fetch
  //     const response = await axios.post('http://localhost:5000/student/Signup', {
  //         fullName,
  //         studentId,
  //         email,
  //         contactNumber,
  //         combination,
  //         password,

  //     });

  //     console.log('User added successfully:', response.insertedId);

  //     // Clear form fields or display a success message
  //   } catch (error) {
  //     console.error('Error adding user:', error);
  //     // Handle error, e.g., display an error message
  //     console.log("ERROR ADDING THE USER")
  //    }// finally {
  //   //   client.close();
  //   // }
  // };

  const handleSubmit = () => {
    const axiosConfig = {
      method: "POST",
      url: `${BASE_URL}student/Signup`,
      data: {
        fullName,
        studentId,
        email,
        contactNumber,
        combination,
        password,
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
      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          fontFamily: "times new roman",
          color: "black",
          textAlign: "center",
        }}
      >
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={Img1}
              alt="LOgo"
              style={{ width: "60px", height: "60px" }}
            />

            <Modal.Title
              style={{
                fontSize: "24px",
                color: "#333",
                margin: "0 80px",
                fontFamily: "times new roman",
              }}
            >
              {" "}
              STUDENT SIGNUP
            </Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="studentId">
                <Form.Label>Student ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter SID"
                  value={studentId}
                  onChange={(e) => seStudentId(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactNumber">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Contact Number"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="combination">
                <Form.Label>Select Your Combination</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setCombination(e.target.value)}
                >
                  <option>Select your Combination</option>
                  <option value="1">Bachelor of Science Study Programme</option>
                  <option value="2">
                    Bachelor of Science Honours Study Programme
                  </option>
                  <option value="3">
                    Bachelor of Science Honours in Statistics and Operations
                    Research (SOR) Study Programme
                  </option>
                  <option value="4">
                    Bachelor of Science Honours in Computation and Management
                    (CM) Study Programme
                  </option>
                </Form.Select>
              </Form.Group>
              <br />
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="This is correct details" />
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
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Signup;
