import React, { useState, useEffect } from 'react';
import Img1 from "../Images/logo.png";
import Img2 from "../Images/arunachalam.png";
import { Button } from 'react-bootstrap';
import Login from "../Pages/Login";
import Img3 from "../Images/mapgym.PNG";

const Accommodation= () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    // Set showTypewriter to true after a delay
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    height: '55px',
    backgroundColor: darkMode ? '#333' : 'rgba(255, 255, 255, 0.8)',
    color: darkMode ? '#fff' : '#000',
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
    height: '100vh',
    position: 'relative',
  };

  const clearanceSectionStyle = {
    color: darkMode ? '#fff' : '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  const noticeBoardStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '20px 0',
  };

  const cardStyle = {
    width: '300px',
    height: '200px',
    backgroundColor: darkMode ? '#333' : 'rgba(255, 255, 255, 0.8)',
    color: darkMode ? '#fff' : '#000',
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  

  return (
    <div style={backgroundImageStyle}>
      <nav style={navBarStyle}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={Img1}
            alt="Logo"
            style={{ width: '60px', height: '60px', marginRight: '10px' }}
          />
          <span style={{ fontSize: '24px', fontFamily: 'times new roman', color: darkMode ? '#fff' : "#B40505" }}>
          Accommodation Center
          </span>
        </div>
        <div>
          <input type="text"style={searchBarStyle} />
          <Button variant="" style={{ fontFamily: "times new roman", color: darkMode ? '#fff' : "#B40505", textAlign: "center" }}>
              Search
            </Button>
          <button
            onClick={toggleDarkMode}
            style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: darkMode ? '#fff' : "#B40505" }}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>

      <div >
        <div style={clearanceSectionStyle}>
          {showTypewriter && (
            <h2 style={{ overflow: 'hidden', whiteSpace: 'nowrap', margin: '0 auto', display: 'inline-block', animation: 'typing 3s steps(30, end), moveDown 2s linear infinite' }}>
             
            </h2>
          )}
        </div>

        <div style={noticeBoardStyle}>
          {/* Add three notice boards */}
          <div style={cardStyle}><h5><center>Downloard Clearance<br/> Report </center></h5><br/>
          <div style={{ fontFamily: "times new roman", color: "#FFC53A", textAlign: "center" }}> 
            <Login/>
          </div></div>
          <div style={cardStyle}><h3><center>Notice</center> </h3> <br/> <h5><center>2024 General convercation will held on 2024 May 08 </center></h5></div>
          <div style={cardStyle}><h3><center>Notice</center></h3><br/><h5><center>Settel the Clearance before the 2024 Aprial 10</center></h5></div>
        </div>

        <div style={noticeBoardStyle}>
        
          <div style={cardStyle}><h3><center>Event</center></h3><br/><h6><center>Arunachalam hostel is repairing now </center></h6></div>
          <div style={{width: '300px',   height: '200px', backgroundColor: darkMode ? '#333' : '#E0CCBE', color: darkMode ? '#fff' : '#000',   margin: '10px',    borderRadius: '10px',     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',}}>
            <img src={Img3} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}/></div>
          <div style={cardStyle}><h3><center>Accommodation  </center></h3><h6><center>The Accommodation Division at the University of Peradeniya administers 19 hostels, offering efficient and supportive accommodation services to enhance the student experience.</center></h6></div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
