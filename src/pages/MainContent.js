import React from 'react';
import { Login, Register } from '../components/Login';
import TextBox from '../components/Textbox.js';

const MainContent = () => {
    return (
      <div className="Text"><TextBox />
        <div className="content">
          <div className="left"><Login /></div>
          <div className="right"><Register /></div>
        </div>
      </div>
    );
  };

  export default MainContent;

