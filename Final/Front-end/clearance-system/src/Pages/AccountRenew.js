

import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img2 from "../Images/Library.png";
import Img1 from "../Images/logo.png";

const AccountRenew = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navBarStyle = {
    backgroundColor: darkMode ? '#333' : 'rgba(255, 255, 255, 0.8)',
    color: darkMode ? '#fff' : '#000',
    height: "6",
  };

  const cardStyle = {
    backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
    color: darkMode ? '#fff' : '#000',
    border: 'none',
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${Img2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    position: 'relative',
  };

  return (
    <div style={backgroundImageStyle}>
      <Navbar bg="" expand="lg" style={navBarStyle}>
      <img
            src={Img1}
            alt="Logo"
            style={{ width: '60px', height: '60px', marginRight: '10px' }}
          />
        <Navbar.Brand href="/Home" style={{ fontFamily: 'times new roman', fontWeight: 'bold', color: "#B40505"}}>
        Faculty of Science Clearance
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
           
          </Nav>
          <Button variant="transparent" onClick={toggleDarkMode} style={{color: "#B40505", fontWeight: 'bold'}}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </Navbar.Collapse>
      </Navbar>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
       
        <Card style={{ ...cardStyle, width: '18rem', margin: '0 10px' }}>
          <Card.Body>
            <Card.Title>Password Change </Card.Title>
            <Card.Text>
            
              
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ ...cardStyle, width: '18rem', margin: '0 10px' }}>
          <Card.Body>
            <Card.Title>New Account Request</Card.Title>
            <Card.Text>
              {/* Add content for new account request */}
              Add your content here...
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ ...cardStyle, width: '18rem', margin: '0 10px' }}>
          <Card.Body>
            <Card.Title>Report any Issue</Card.Title>
            <Card.Text>
              {/* Add content for reporting issues */}
              Add your content here...
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AccountRenew;
