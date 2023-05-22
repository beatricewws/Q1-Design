import React, { useState, useEffect }from 'react';
import MyCar from '../components/MyCar.js';
import TextBox from '../components/Textbox.js';
import CountdownBar from '../components/CountdownBar.js';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`

  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px; /* Add padding */
    }
`;

const RoundRectangle = styled.div`
  width: 300px;
  height: 70px;
  border-radius: 10px;
  background-color: ${props => props.color};
  padding: 20px;
  display: inline-block;
  margin: 10px 0;
  margin-right: 10px;
  text-align: center;
  color: #fff;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const RoundRectangleComponent = ({ children, color, text, onClick }) => (
  <RoundRectangle color={color} onClick={onClick}>
    <div>{text}</div>
    {children}
  </RoundRectangle>
);

const RoundRectangle2 = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  background-color: ${props => props.color};
  padding: 20px;
  display: inline-block;
  margin: 10px 0;
  margin-right: 10px;
  text-align: center;
  color: #fff;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const RoundRectangle2Component = ({ children, color, text, onClick }) => (
  <RoundRectangle2 color={color} onClick={onClick}>
    <div>{text}</div>
    {children}
  </RoundRectangle2>
);


const MyDashboard = () => {
  const [showRectangle, setShowRectangle] = useState(false);

  const handleCardClick = () => {
    setShowRectangle(show => !show);
  };

  return (
      <div className="container">
        
        <div className="text"><TextBox />
        <h1>My dashboard</h1>
        <h1>WELCOME BACK, .</h1>
          <div>
            <RoundRectangleComponent color="darkgrey" text="" style={{marginTop: "-50px"}} >
              <p>MINI VIP</p>
            </RoundRectangleComponent><br/>
            <RoundRectangleComponent color="#E9C656" text="" display="inline-block" onClick={handleCardClick}>
              <p>MY CARD</p>
            </RoundRectangleComponent>
            <RoundRectangleComponent color="grey" text="" display="inline-block">
              <p>REWARD POINTS: 250</p>
            </RoundRectangleComponent><br/>
            {showRectangle && (
              <RoundRectangle2Component
                color="black"
                style={{ marginTop: "10px" }}
              >
                <img src="logo.png" alt="Logo" />
                <h2>MCA 235250</h2>
                <p>EXPIRY DATE On-going</p>
                <p>MEMBER SINCE 01/01/1970</p>
              </RoundRectangle2Component>
            )}
            <h1>Countdown to a new Entry</h1>
            <CountdownBar  />
          </div>
        <MyCar /><br/>
        </div>
           
    </div>
  );
};

export default MyDashboard;
