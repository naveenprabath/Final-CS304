import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserPlus, faSignInAlt, faCalendarAlt, faCreditCard, faHeadset } from '@fortawesome/free-solid-svg-icons';
import Login from "./Login";
import Signup from "./Signup";
import AccademiStaffSignup from "./AccademiStaffSignup";
import AccademicStaffLogin from "./AccademicStaffLogin";
import Img2 from "../Images/RequestAccount.png";
import Img1 from "../Images/logo.png";

function RequestAccount() {
    const containerStyle = {
      backgroundColor: "#F9C449",
  
      minHeight: "10vh",
    };
  
    const pageStyles = {
      
      minHeight: "80vh",
    };
  
   
  
    const textStyle = {
      fontFamily: "Arial, sans-serif",
      fontSize: "20px",
      lineHeight: "1.5",
      textAlign: "center",
      marginTop: "20px",
    };
    const rowStyle = {
      padding: "10px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    };
  
    const cardStyle = {
      width: '300px',
      height: '200px',
      backgroundColor:  'rgba(255, 255, 255, 0.8)',
      padding: '20px',
      margin: '10px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
     
    };

    const backgroundImageStyle = {
      backgroundImage: `url(${Img2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '110vh',
      position: 'relative',
    };
    return (
      <div style={backgroundImageStyle } >
      <header>
      <Navbar bg="blue" expand="lg" className="p-2" style={{backgroundColor:'rgba(255, 255, 255, 0.8)', padding: '10px',
    height: '55px'}} >
      <img
            src={Img1}
            alt="Logo"
            style={{ width: '60px', height: '60px', marginRight: '10px' }}
          />
       
          <Navbar.Brand href="/Home" style={{ fontFamily: "times new roman", color:"#B40505", textAlign: "center",}}>University of Peradeniya </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="me-auto">
              
            </Nav>
            <Form className="d-flex">
              <FormControl type="text"  className="mr-2"  style={{ marginRight: '5px',   className: "d-flex",   borderRadius: '15px',}} />
              <div className="mx-2"></div>
              <Button variant="" size="sm" style={{color:"#B40505",}}>
               <b>Search</b>
              </Button>
            </Form>
            <div className="mx-2"></div>
            <Form.Check type="switch" id="flexSwitchCheckDefault" label="DarkMode" style={{color:"#B40505", 
            }}   />
          </Navbar.Collapse>
       
      </Navbar>
      </header>
  
        <br />
  
        <Container style={{backgroundColor:'rgba(255, 255, 255, 0.8)'}}>
          <Row>
            <Col style={{color:"#B40505"}}>
              {" "}
              <p style={textStyle}>
                Note : This is a Request Account Dashboard and if will not Signup
                plese Signup First.If you Sign Up go to University GSuite email
                Click to...
                
                <div className="p-2 ms-auto">
                <Login />
              </div>
                
              </p>
            </Col>
          </Row>
        </Container>
  
        <br />
  
        <Container>
          <Row style={rowStyle}>
            
          </Row>
        </Container>
  
          <Row
            md={6}
            className="className=d-flex align-items-center justify-content-center p-1"
          >
            
            <Col md={3}
           
              className="className=d-flex align-items-center justify-content-center p-1"
            >
              <Card
                style={cardStyle}
              >
                <Card.Body className="text-center">
                  <Card.Title>STAFF SIGNUP </Card.Title>
                  
                  <Card.Text>
                          <FontAwesomeIcon icon={faUserPlus} style={{ fontSize: 60 }} />
                        </Card.Text>
                        <div className="p-2 ms-auto">
                <AccademiStaffSignup />
              </div>
                  
  
                  
                </Card.Body>
              </Card>
            </Col>
  
            <Col md={3}
           
              className="className=d-flex align-items-center justify-content-center p-1"
            >
              <Card
                style={cardStyle}
              >
                <Card.Body className="text-center">
                  <Card.Title> STAFF LOGIN</Card.Title>
                  
                  <Card.Text>
                          <FontAwesomeIcon icon={faUserPlus} style={{ fontSize: 60 }} />
                        </Card.Text>
                        <div className="p-2 ms-auto">
                <AccademicStaffLogin/>
              </div>
                  
                </Card.Body>
              </Card>
            </Col>
  
            <Col md={3}
              
              className="className=d-flex align-items-center justify-content-center p-1"
            >
              <Card
                style={cardStyle}
              >
                <Card.Body className="text-center">
                  <Card.Title>STUDENT SIGNUP</Card.Title> 
                  
                  <Card.Text>
                          <FontAwesomeIcon icon={faUserPlus} style={{ fontSize: 60 }} />
                        </Card.Text>
                        <div className="p-2 ms-auto">
                <Signup />
              </div>
                </Card.Body>
              </Card>
            </Col>
            
          </Row>
        
  
        <div>
          <br />
          <br />
          <br />
          <br />
  
          <footer style={{  padding: "10px" }}>
            <Container>
              <Row>
                <Col md={6}>
                  <p style={{color: "#FFC53A"}}>&copy; {new Date().getFullYear()} Your Company Name</p>
                </Col>
                <Col md={6} className="text-right">
                  <p style={{color: "#FFC53A"}}>Contact: contact@example.com</p>
                </Col>
              </Row>
            </Container>
          </footer>
        </div>
      </div>
    );
  }
  
  export default RequestAccount;