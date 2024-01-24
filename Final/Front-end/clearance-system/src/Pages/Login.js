import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Img1 from "../Images/logo.png";
import Cookies from "universal-cookie";
import axios from "axios";

function LoginAlert() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
    setLoginError("");
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleLogin = async () => {
    // e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/student/login", {
        email: email,
        password: password,
      });

      const data = await response.json();

      if (response.ok) {
        // Successful login
        // TODO: save jwt token to a cookie names 'authToken' use Cookie-js library

        if (response.data.token) {
          Cookies.set("autoCreditCookie", response.data.token, {
            path: "/",
            maxAge: 60 * 60 * 24,
          });

          // window.location.href ="/";
        }
        setLoginError("");
        handleClose();
      } else {
        // Invalid credentials
        setLoginError(
          data.error || "Invalid Email or password. Please try again."
        );
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
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
        LogIn
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={Img1}
              alt="LOgo"
              style={{ width: "60px", height: "60px" }}
            />
            <h2
              style={{
                fontSize: "24px",
                color: "#333",
                margin: "0 130px",
                fontFamily: "times new roman",
              }}
            >
              LOGIN
            </h2>
          </div>
        </Modal.Header>
        <Form onSubmit={handleLogin()}>
          <Modal.Body>
            {loginError && <p className="text-danger">{loginError}</p>}
            <Form.Group controlId="username">
              <Form.Label> GSUTEMail</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Enter your GSUTEMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <a href="./ClearanceReport">
              <Button
                variant="primary"
                style={{
                  color: "#333",
                  margin: "0 200px",
                  fontFamily: "times new roman",
                }}
              >
                LOGIN
              </Button>
            </a>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default LoginAlert;
