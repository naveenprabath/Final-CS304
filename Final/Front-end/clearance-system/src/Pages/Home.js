import React from "react";
import Navbar from "../components/Navbar";
import Image from "../components/Image";
import Aboutus from "../components/Aboutus"
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Login from "./Login";
import Img2 from "../Images/Uop.png";
import Img3 from "../Images/mapgym.PNG";

function Home(){
    
     

      const cardStyle = {
        width: '300px',
        height: '200px',
        backgroundColor:  'rgba(255, 255, 255, 0.8)',
        padding: '20px',
        margin: '10px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)',
        fontFamily: "Lora"
       
      };

      const backgroundImageStyle = {
        backgroundImage: `url(${Img2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '143vh',
        position: 'relative',
      };

      const transparentCardStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.5)', 
        minHeight: '50vh',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      };
      

      
      
return(
    <div style={backgroundImageStyle}>
        <header>
          <Navbar/>
        </header>

        
        
        <div >
        <Container>
          <br />
          <Row>
            <Col>
              <Card style={cardStyle}>
                
                <Card.Body>
                  <Card.Title><center>Notice Board</center></Card.Title>
                  <Card.Text><br/><center>2023/2024 General convercation settle your Clearnce before 20/04/2024</center></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col> </Col>

            <Col>
              <Card style={cardStyle}>
              
                <Card.Body>
                  <Card.Title><center>Login & Downloard<br/>Clearance Report</center></Card.Title>
                  <Card.Text>
                <center>
                <div className="p-2 ms-auto">
            <     Login/>
                </div>
                </center>
                </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col> </Col>

            <Col>
              <Card style={cardStyle}>
                
                <Card.Body>
                  <Card.Title><center>Clearance Notice</center></Card.Title>
                  <Card.Text><br/><center>If you have any problem you can complain or email us</center></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          
        </Container>

        <Container>
          <br />
          <Row>
            <Col>
              <Card style={cardStyle}>
                
                <Card.Body>
                  <Card.Title><center>Notice </center></Card.Title>
                  <Card.Text><center>Verification of students’ Names and Contact Details - Batch 18 - 300 Level - Academic Year 2021-2022</center></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col> </Col>

            <Col>
  <Card style={{width: '300px',   height: '200px',  margin: '10px',    borderRadius: '10px',     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
    
      <img src={Img3} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}/>
    
  </Card>
</Col>

            <Col> </Col>

            <Col>
              <Card style={cardStyle}>
                
                <Card.Body>
                  <Card.Title><center>Faculty of Science</center></Card.Title>
                  <Card.Text>"To be a globally acclaimed faculty, excelling in education and research, fostering scientific literacy with ethical principles."</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Container>
            <br/>
          <Row >
        
      
        
        

        

       
      </Row>
      </Container>

          
        </Container>
      </div>
      
  

      <footer style={{  padding: "10px" }}>
  
         <Row>
            <Col md={6}>
                <p style={{ ontFamily: "times new roman",  color:  "#B40505" , fontWeight: 'bold'}}>&copy; {new Date().getFullYear()} Faculty Clearnce System</p>
            </Col>
            <Col md={6} className="text-right">
                <p style={{ ontFamily: "times new roman",  color: "#B40505", fontWeight: 'bold'}}>Contact: contact@example.com</p>
            </Col>
         </Row>
          
        </footer>

    </div>

);
}
export default Home;