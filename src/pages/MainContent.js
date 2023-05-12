import React, { useState, useEffect } from 'react';
import { Login, Register } from '../components/Login';
import TextBox from '../components/Textbox.js';
import styled from 'styled-components';

const Container = styled.div`
  margin-left: 200px; /* replace with width of sidebar */
  
  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Columns = styled.div`
  display: flex;
  flex-direction: column;
}
`;

const MainContent = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 500;
  
    if (isMobile) {

    return (
      <Container>
      <div className="Text"><TextBox />
        <div className="content">
          <Columns>
          <div className="left"><Login /></div>
          <div className="right"><Register /></div>
          </Columns>
        </div>
      </div>
      </Container>
    );
    } else {
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
  };

  export default MainContent;


