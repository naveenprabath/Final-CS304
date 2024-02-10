import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Login from "./Login";
import FormControl from 'react-bootstrap/FormControl';
import ADDClearance from "./ADDClearance";
import AccademiStaffSignup from "./AccademiStaffSignup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserPlus, faSignInAlt, faCalendarAlt, faCreditCard, faHeadset } from '@fortawesome/free-solid-svg-icons';
import Img1 from "../Images/logo.png";
import Img2 from "../Images/StaffDashboard.png";


function StaffDashBoard(){
    const containerStyle = {
            backgroundColor: 'white',
            minHeight: '10vh'
            
             
      };

      

      const pageStyles = {
        backgroundColor: 'white',
        minHeight: '100vh'
      };

      const navStyle = {
        backgroundColor: '#B40505'
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
      const navBarStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        height: '55px',
        backgroundColor:  'rgba(255, 255, 255, 0.8)',
        color: '#000',
        borderRadius: '2px',
      };
    
      const searchBarStyle = {
        marginRight: '5px',
      className: "d-flex",
      borderRadius: '15px',
      };

      const backgroundImageStyle = {
        backgroundImage: `url(${Img2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '110vh',
        position: 'relative',
      };
      
    return(
        
        <div style={backgroundImageStyle}>
   <nav style={navBarStyle}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={Img1}
            alt="Logo"
            style={{ width: '60px', height: '60px', marginRight: '10px' }}
          />
          <span style={{ fontSize: '24px', fontFamily: 'times new roman', color: "#B40505" }}>
          Faculty of Science Staff StaffDashBoard
          </span>
        </div>
        <div>
          <input type="text"style={searchBarStyle} />
          <Button variant="" style={{ fontFamily: "times new roman", color:  "#B40505", textAlign: "center",marginRight:"5" }}>
              Search
            </Button>
          
          
        </div>
        <div><Form.Check type="switch" id="flexSwitchCheckDefault" label="DarkMode" style={{color:"#B40505", 
            }}  /></div>
      </nav>
             
            <br/>
            <br/>
               <Container >
                <Row md={6} className="className=d-flex align-items-center justify-content-center p-1">
                  <Col md={4} className="className=d-flex align-items-center justify-content-center p-1">
                    <Card style={cardStyle}>
                      <Card.Body className="text-center">
                        <Card.Title>ADD Clearnce</Card.Title>
                        
                        <Card.Text>
                          <FontAwesomeIcon icon={faHome} style={{ fontSize: 50 }} />
                        </Card.Text>
                        <div className="p-2 ms-auto">
                        <ADDClearance />
                      </div>
                      </Card.Body>
                    </Card>
                  </Col>
                <Col md={4} className="className=d-flex align-items-center justify-content-center p-1">
                  <Card style={cardStyle}>
                    <Card.Body className="text-center">
                      <Card.Title>View Report</Card.Title>
                     
                      <Card.Text>
                        <FontAwesomeIcon icon={faUserPlus} style={{ fontSize: 50 }} />
                        
                        
                        
                        
                      </Card.Text>
                      <a href="ClearanceView">
                      <Button variant="" style={{color:"#B40505", fontWeight: 'bold'}}>View</Button>
                      </a>
                      
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className="className=d-flex align-items-center justify-content-center p-1">
                  <Card style={cardStyle}>
                    <Card.Body className="text-center">
                      <Card.Title>Student Complain</Card.Title>
                     
                      <Card.Text>
                        <FontAwesomeIcon icon={faSignInAlt} style={{ fontSize: 50 }} />
                       
                      </Card.Text>
                      <a href="ComplainView">
                      <Button variant="" style={{color:"#B40505", fontWeight: 'bold'}}>Complain</Button>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <br />
              <Row md={6} className="className=d-flex align-items-center justify-content-center p-1">
                <Col md={4} className="className=d-flex align-items-center justify-content-center p-1">
                  <Card style={cardStyle}>
                    <Card.Body className="text-center">
                      <Card.Title>Account Renew</Card.Title>
                      
                      <Card.Text>
                        <FontAwesomeIcon icon={faCalendarAlt} style={{ fontSize: 50 }} />

                      </Card.Text>
                     
                    </Card.Body>
                    <center>
                    <a href="/AccountRenew">
                    <Button variant="" style={{color:"#B40505", fontWeight: 'bold'}}>Renew</Button>
                    </a>
                    </center>
                  </Card>
                </Col>
                <Col md={4} className="className=d-flex align-items-center justify-content-center p-1">
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
                <Col md={4} className="className=d-flex align-items-center justify-content-center p-1">
                  <Card style={cardStyle}>
                    <Card.Body className="text-center">
                      <Card.Title>Student Payment</Card.Title>
                      
                      <Card.Text>
                        <FontAwesomeIcon icon={faHeadset} style={{ fontSize: 50 }} />
                      </Card.Text>
                      <a href="PaymentView">
                      <Button variant="" style={{color:"#B40505"}}><b>View</b></Button></a>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
            <br/>

            
    
        <footer style={{  padding: '10px' }}>
                    <Container>
                    <Row>
                        <Col md={6}>
                        <p style={{color:"#B40505"}}>&copy; {new Date().getFullYear()} <b>Your Company Name</b></p>
                        </Col>
                        <Col md={6} className="text-right">
                        <p  style={{color:"#B40505"}}><b>Contact: contact@example.com</b></p>
                        </Col>
                    </Row>
                    </Container>
                </footer>
              
            </div>

    );
}

export default StaffDashBoard;