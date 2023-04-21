import React, { useState }from 'react';
import MyCar from '../components/MyCar.js';
import TextBox from '../components/Textbox.js';
import CountdownBar from '../components/CountdownBar.js';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
  margin-left: 200px; /* replace with width of sidebar */
`;

const RoundRectangle = ({ children, color, text, onClick }) => (
  <div
    style={{
      width: "300px",
      height: "70px",
      borderRadius: "10px",
      backgroundColor: color,
      padding: "20px",
      display: "inline-block",
      margin: "10px 0",
      marginRight: "10px",
      textAlign: "center",
      color: "#fff",
      fontWeight: "bold"
    }}
    onClick={onClick}
  >
    <div>{text}</div>
    {children}
  </div>
);

const RoundRectangle2 = ({ children, color, text, onClick }) => (
  <div
    style={{
      width: "300px",
      height: "200px",
      borderRadius: "10px",
      backgroundColor: color,
      padding: "20px",
      display: "inline-block",
      margin: "10px 0",
      marginRight: "10px",
      textAlign: "center",
      color: "#fff",
      fontWeight: "bold"
    }}
    onClick={onClick}
  >
    <div>{text}</div>
    {children}
  </div>
);

const MyDashboard = () => {
  const [showRectangle, setShowRectangle] = useState(false);

  const handleCardClick = () => {
    setShowRectangle(show => !show);
  };

  return (
      <div className="container">
        <Container>
        <div className="text"><TextBox />
        <h1>My dashboard</h1>
        <h1>WELCOME BACK, .</h1>
          <div>
            <RoundRectangle color="darkgrey" text="" style={{marginTop: "-50px"}} >
              <p>MINI VIP</p>
            </RoundRectangle><br/>
            <RoundRectangle color="#E9C656" text="" display="inline-block" onClick={handleCardClick}>
              <p>MY CARD</p>
            </RoundRectangle>
            <RoundRectangle color="grey" text="" display="inline-block">
              <p>REWARD POINTS: 250</p>
            </RoundRectangle><br/>
            {showRectangle && (
              <RoundRectangle2
                color="black"
                style={{ marginTop: "10px" }}
              >
                <img src="logo.png" alt="Logo" />
                <h2>MCA 235250</h2>
                <p>EXPIRY DATE On-going</p>
                <p>MEMBER SINCE 01/01/1970</p>
              </RoundRectangle2>
            )}
            <h1>Countdown to a new Entry</h1>
            <CountdownBar  />
          </div>
        <MyCar /><br/>
        </div>
        </Container>      
    </div>
  );
};

export default MyDashboard;
