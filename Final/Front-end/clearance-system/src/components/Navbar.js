import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';





function Bar() {
  return (
    <Navbar bg="" expand="lg" className="p-2 " style={{ backgroundColor: "#B40505" }}> 
      <div className="container">
        <Navbar.Brand href="/Home" style={{ fontFamily: "times new roman", color: "#FFC53A", textAlign: "center" }}>
          University of Peradeniya
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto"> 
            <Nav.Link href="/Dashboard" className="nav-link" style={{ fontFamily: "times new roman", color: "#FFC53A", textAlign: "center" }}>
              Dashboard
            </Nav.Link>
            <Nav.Link href="/ContactUs" className="nav-link" style={{ fontFamily: "times new roman", color: "#FFC53A", textAlign: "center" }}>
              ContactUs
            </Nav.Link>
            <Nav.Link href="/" className="nav-link" style={{ fontFamily: "times new roman", color: "#FFC53A", textAlign: "center" }}>
              AboutUs
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="text" placeholder="Search" className="mr-2" />
            <div className="mx-1"></div>
            <Button variant="primary" style={{ color: "black" }}>
              Search
            </Button>
          </Form>
          <Button variant="" size="sm" className="mx-1" style={{ color: "black", backgroundColor: "#B40505" }}>
            Login
          </Button>
          <Button variant="" size="sm" className="mx-1" style={{ color: "blue", backgroundColor: "#B40505" }}>
          <Nav.Link href="/Signup" className="nav-link" style={{ fontFamily: "times new roman", color: "#FFC53A", textAlign: "center" }}>
           Signup
          </Nav.Link>
          </Button>
          <Form.Check type="switch" id="flexSwitchCheckDefault" label="DarkMode" style={{}} />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Bar;
