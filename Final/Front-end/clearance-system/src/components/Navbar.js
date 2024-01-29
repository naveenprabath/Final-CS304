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
      
        <Navbar.Brand href="/Home" style={{ fontFamily: "times new roman", color: "#B40505", textAlign: "center", fontWeight: 'bold' }}>
          University of Peradeniya
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto"> 
            <Nav.Link href="/Dashboard" className="nav-link" style={{ fontFamily: "times new roman", color: "#B40505", textAlign: "center", fontWeight: 'bold' }}>
              Dashboard
            </Nav.Link>
            <Nav.Link href="/ContactUs" className="nav-link" style={{ fontFamily: "times new roman", color: "#B40505", textAlign: "center", fontWeight: 'bold'}}>
              ContactUs
            </Nav.Link>
            <Nav.Link href="/" className="nav-link" style={{ fontFamily: "times new roman", color: "#B40505", textAlign: "center" , fontWeight: 'bold' }}>
              AboutUs
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="text" placeholder="Search"  style={{ marginRight: '5px',   className: "d-flex",   borderRadius: '15px',}}/>
            <div className="mx-1"></div>
            <Button variant="" style={{ fontFamily: "times new roman", color: "#B40505", textAlign: "center",fontWeight: 'bold'}}>
              Search
            </Button>
          </Form>
          <Button variant="" style={{ fontFamily: "times new roman", color: "#FFC53A", textAlign: "center" }} >
          <div style={{ fontFamily: "times new roman", color: "#FFC53A", textAlign: "center" }}> 
            <Login/>
          </div>
          </Button>
          <Button variant="" style={{ fontFamily: "times new roman", color: "#FFC53A", textAlign: "center" }} >
          <div  style={{fontFamily: "times new roman", color: "#FFC53A", textAlign: "center"}}>
            <Signup/>
          </div>
          </Button>
          <Form.Check type="switch"  id="flexSwitchCheckDefault" label="DarkMode" style={{ fontFamily: "times new roman", color: "#B40505", textAlign: "center",fontWeight: 'bold'}} />
        </Navbar.Collapse>
     
    </Navbar>
  );
}

export default Bar;
