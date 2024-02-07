import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "../Pages/Login";
import Signup from '../Pages/Signup';
import Img1 from "../Images/logo.png";
import ScienceLibrary from "../Pages/ScienceLibrary";
import Accommodation from "../Pages/Accommodation";
import Gym from "../Pages/Gym";






function Bar() {
  return (
    <Navbar bg="" expand="lg" className="p-1" style={{backgroundColor:  'rgba(255, 255, 255, 0.8)', padding: '10px',
    height: '55px'}} > 
    <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={Img1}
            alt="Logo"
            style={{ width: '60px', height: '60px', marginRight: '10px' }}
          />

          
      </div>
      
        <Navbar.Brand href="/Home" style={{ fontFamily: "Lora", color: "#B40505", textAlign: "center", fontWeight: 'bold' }}>
          University of Peradeniya
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto"> 
            <Nav.Link href="/Dashboard" className="nav-link" style={{ fontFamily: "Lora", color: "#B40505", textAlign: "center", fontWeight: 'bold' }}>
              Dashboard
            </Nav.Link>
            <Nav.Link href="/ScienceLibrary" className="nav-link" style={{ fontFamily: "Lora", color: "#B40505", textAlign: "center", fontWeight: 'bold'}}>
              Library
            </Nav.Link>
            <Nav.Link href="/Accommodation" className="nav-link" style={{ fontFamily: "Lora", color: "#B40505", textAlign: "center" , fontWeight: 'bold' }}>
              Accommodation
            </Nav.Link>
            <Nav.Link href="/Gym" className="nav-link" style={{ fontFamily: "Lora", color: "#B40505", textAlign: "center" , fontWeight: 'bold' }}>
              Gymnasium
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="text" placeholder="Search"  style={{ marginRight: '5px',   className: "d-flex",   borderRadius: '15px', fontFamily: "Lora"}}/>
            <div className="mx-1"></div>
            <Button variant="" style={{ fontFamily: "Lora", color: "#B40505", textAlign: "center", fontWeight: 'bold'}}>
             <b> Search</b>
            </Button>
          </Form>
          <Button variant="" style={{ fontFamily: "Lora", color: "#FFC53A", textAlign: "center" }} >
          <div style={{ fontFamily: "Lora", color: "#FFC53A", textAlign: "center" }}> 
            <Login/>
          </div>
          </Button>
          <Button variant="" style={{ fontFamily: "times new roman", color: "#FFC53A", textAlign: "center" }} >
          <div  style={{fontFamily: "times new roman", color: "#FFC53A", textAlign: "center"}}>
            <Signup/>
          </div>
          </Button>
          <Form.Check type="switch"  id="flexSwitchCheckDefault" label="DarkMode" style={{ fontFamily: "Lora", color: "#B40505", textAlign: "center",fontWeight: 'bold'}} />
        </Navbar.Collapse>
     
    </Navbar>
  );
}

export default Bar;
