import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Img1 from "../Images/logo.png";

function LoginAlert() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClose = () => {
    setShow(false);
    setUsername('');
    setPassword('');
    setLoginError('');
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    
    if (username === 'user' && password === 'password') {
      // Successful login
      setIsLoggedIn(true);
      setLoginError('');
      // Close the modal
      handleClose();
    } else {
      // Invalid credentials
      setIsLoggedIn(false);
      setLoginError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow} style={{ fontFamily: "times new roman",  color: "black",     textAlign: "center"}}>
        LogIn
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          
             <img  src={Img1} alt="LOgo" 
             style={{ width: '60px', height: '60px' }}
          />
          <h2 style={{ fontSize: '24px', color: '#333', margin: '0 130px', fontFamily:"times new roman" }}>LOGIN</h2>
          </div>
        </Modal.Header>
        <Form onSubmit={handleLogin}>
          <Modal.Body>
            {loginError && <p className="text-danger">{loginError}</p>}
            <Form.Group controlId="username">
              <Form.Label>Username or GSUTEMail</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
          
          <a href="./ClearanceReport"><Button  variant="primary" style={{ color: '#333', margin: '0 200px', fontFamily:"times new roman" }}>
             LOGIN
            </Button></a>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default LoginAlert;
