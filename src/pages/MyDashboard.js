import React from 'react';
import MyCar from '../components/MyCar.js';
import TextBox from '../components/Textbox.js';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
  margin-left: 200px; /* replace with width of sidebar */
`;

const RoundRectangle = ({ children, color, text }) => (
  <div
    style={{
      width: "100%",
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
  >
    <div>{text}</div>
    {children}
  </div>
);

const MyDashboard = () => {
  return (
      <div className="container">
        <Container>
        <div className="text"><TextBox />
        <h1>My dashboard</h1>
        <h1>WELCOME BACK, .</h1>
          <div>
            <RoundRectangle color="orange" text="Span Rectangle" style={{marginTop: "-50px"}}>
              <p>This is some text inside the span rectangle.</p>
            </RoundRectangle><br/>
            <RoundRectangle color="lightblue" text="">
              <p>MY CARD</p>
            </RoundRectangle>
            <RoundRectangle color="lightgreen" text="">
              <p>REWARD POINTS: 250</p>
            </RoundRectangle>
          </div>
        <MyCar />
        </div>
        </Container>      
    </div>
  );
};

export default MyDashboard;
