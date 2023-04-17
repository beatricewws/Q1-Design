import React from 'react';
import { Login, Register } from '../components/Login';
import TextBox from '../components/Textbox.js';
import styled from 'styled-components';

const Container = styled.div`
  margin-left: 200px; /* replace with width of sidebar */
`;

const MainContent = () => {
    return (
      <Container>
      <div className="Text"><TextBox />
        <div className="content">
          <div className="left"><Login /></div>
          <div className="right"><Register /></div>
        </div>
      </div>
      </Container>
    );
  };

  export default MainContent;


