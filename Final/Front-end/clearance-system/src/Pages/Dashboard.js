import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserPlus, faSignInAlt, faCalendarAlt, faCreditCard, faHeadset } from '@fortawesome/free-solid-svg-icons';
import Login from "./Login";
import Signup from "./Signup";
import Img2 from "../Images/Dashboard2.png";
import Img1 from "../Images/logo.png";
import AccountRenew from "./AccountRenew";

function Dashboard(){
    

     

      
     

      const backgroundImageStyle = {
        backgroundImage: `url(${Img2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative',
      };

      const cardStyle = {
        width: '300px',
        height: '200px',
        backgroundColor:  'rgba(255, 255, 255, 0.8)',
        padding: '20px',
        margin: '10px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: "Lora"
       
      };
      
    return(
        
    <div style={backgroundImageStyle}>
    <Navbar bg="" expand="lg" className="p-1" style={{backgroundColor:'rgba(255, 255, 255, 0.8)', padding: '10px',
    height: '55px'}} >
      <img
            src={Img1}
            alt="Logo"
            style={{ width: '60px', height: '60px', marginRight: '10px' }}
          />
      
        <Navbar.Brand href="/Home" style={{ fontFamily: "times new roman", color:"#B40505", textAlign: "center",}}><b>University of Peradeniya Clearnce</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            
          </Nav>
          <Form className="d-flex">
            <FormControl type="text" placeholder="Search" className="mr-2" style={{ marginRight: '5px',   className: "d-flex",   borderRadius: '15px',}} />
            <div className="mx-1"></div>
            <Button variant="" size="sm" style={{color:"#B40505",}}><b><h6>Search</h6></b></Button>
          </Form>
          <Button variant=""  className="mx-1" size="sm" style={{color:"black" }}>  <div className="p-2 ms-auto">
                        <Login />
                      </div>    </Button>
          <Button variant="" className="mx-1" size="sm" style={{color:"black"}}> <div className="p-2 ms-auto">
                        <Signup />
                      </div>    </Button>
          <Form.Check type="switch" id="flexSwitchCheckDefault" label="DarkMode" style={{color:"#B40505", 
            }}  />
        </Navbar.Collapse> 
          
            </Navbar>
             
            <br/>
            <br/>
            <Container>
               
                <Row >
                  <Col >
                    <Card style={cardStyle}>
                      <Card.Body className="text-center">
                        <Card.Title>Home page</Card.Title>
                        
                        <Card.Text>
                          <FontAwesomeIcon icon={faHome} style={{ fontSize: 60 }} />
                        </Card.Text>
                        <a href="/Home">
                          <Button variant="" style={{color:"#B40505", fontWeight: 'bold'}}>Click Me</Button>
                        </a>
                      </Card.Body>
                    </Card>
                  </Col>
                <Col >
                  <Card style={cardStyle}>
                    <Card.Body className="text-center">
                      <Card.Title>Request Account</Card.Title>
                    
                      <Card.Text>
                        <FontAwesomeIcon icon={faUserPlus} style={{ fontSize: 60 }} />
                      </Card.Text>
                      <a href="/RequestAccount">
                        <Button variant="" style={{color:"#B40505", fontWeight: 'bold'}}>Click Me</Button>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={cardStyle}>
                    <Card.Body className="text-center">
                      <Card.Title>Login Interface</Card.Title>
                    
                      <Card.Text>
                        <FontAwesomeIcon icon={faSignInAlt} style={{ fontSize: 60}} />
                      </Card.Text>
                      <div className="p-2 ms-auto">
                        <Login />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <br />
              <Row >
                <Col >
                  <Card style={cardStyle}>
                    <Card.Body className="text-center">
                      <Card.Title>Account Renew</Card.Title>
                     
                      <Card.Text>
                        <FontAwesomeIcon icon={faCalendarAlt} style={{ fontSize: 60 }} />
                      </Card.Text>
                      <a href="/AccountRenew">
                      <Button variant="" style={{color:"#B40505", fontWeight: 'bold'}}>Click Me</Button>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
                <Col >
                  <Card style={cardStyle}>
                    <Card.Body className="text-center">
                      <Card.Title>Payment Gate</Card.Title>
                    
                      <Card.Text>
                        <FontAwesomeIcon icon={faCreditCard} style={{ fontSize: 60 }} />
                      </Card.Text>
                      <a href="#">
                      <Button variant="" style={{color:"#B40505", fontWeight: 'bold'}} > Click Me</Button>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
                <Col >
                  <Card style={cardStyle}>
                    <Card.Body className="text-center">
                      <Card.Title>Admin Support</Card.Title>
                      
                      <Card.Text>
                        <FontAwesomeIcon icon={faHeadset} style={{ fontSize: 60 }} />
                      </Card.Text>
                      <Button variant="" style={{color:"#B40505", fontWeight: 'bold'}}>Click Me</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              
            </Container>
            


            
    
        <footer >
                   
                    <Row>
                        <Col md={6}>
                        <p style={{color:"#B40505"}}>&copy; {new Date().getFullYear()} Your Company Name</p>
                        </Col>
                        <Col md={6} className="text-right">
                        <p  style={{color: "#B40505"}}>Contact: contact@example.com</p>
                        </Col>
                    </Row>
                    
                </footer>
              
            </div>

    );
}

export default Dashboard;