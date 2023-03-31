import React from 'react';
import { Login, Register } from '../components/Login';

const MainContent = () => {
    return (
        <div className="content">
          <div className="left"><Login /></div>
          <div className="right"><Register /></div>
        </div>
    );
  };

  export default MainContent;
