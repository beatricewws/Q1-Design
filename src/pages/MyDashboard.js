import React from 'react';
import TextBox from '../components/Textbox.js';
import MyCar from '../components/MyCar.js';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
  margin-left: 200px; /* replace with width of sidebar */
`;

const MyDashboard = () => {
  return (
    <Container>
    <div className="Text"><TextBox />
      <div className="container">
        <h1>My dashboard</h1>
        <MyCar />
      </div>
    </div>
    </Container>
  );
};

export default MyDashboard;