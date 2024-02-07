

import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img2 from "../Images/Library.png";
import Img1 from "../Images/logo.png";
import PasswordChange from './PasswordChange';
import Signup from '../Pages/Signup';
import IssueForm from './IssueForm';

const AccountRenew = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const navBarStyle = {
    backgroundColor: darkMode ? '#333' : 'rgba(255, 255, 255, 0.8)',
    color: darkMode ? '#fff' : '#000',
    height: "5",
  };

  const cardStyle = {
    backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
    color: darkMode ? '#fff' : '#000',
    border: 'none',
    width:'300px',
    padding: '10px',
    margin: "10px",
    fontFamily:"Lora",
    textAlign: 'center',
   
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
            <Card.Title ><b>Password Change </b></Card.Title>
            <Card.Text>
            <div>
          <br/>
     

      <Button variant="" onClick={handleShow} style={{color: "#B40505"}}>
        <b>Change Password</b>
      </Button>

      
      <PasswordChange showModal={showModal} handleClose={handleClose} />
    </div>
            
              
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ ...cardStyle, width: '18rem', margin: '0 10px' }}>
          <Card.Body>
            <Card.Title ><b>New Account Request</b></Card.Title>
            <br/>
            <Card.Text>
            <div  style={{fontFamily: "times new roman", color: "#FFC53A", textAlign: "center"}}>
            <Signup/>
          </div>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ ...cardStyle, width: '18rem', margin: '0 10px' }}>
          <Card.Body>
            <Card.Title><b>Report any Issue</b></Card.Title>
            <br/>
            <Card.Text>
            <div>
    
      <Button variant="" onClick={handleShowForm} style={{color: "#B40505"}}>
       <b> Report an Issue</b>
      </Button>

     
      <IssueForm show={showForm} handleClose={handleCloseForm} />
    </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AccountRenew;
