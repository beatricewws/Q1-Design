import React, { useState } from 'react';
import buttonImage1 from '../images/button1.png';
import buttonImage2 from '../images/button2.png';

const Header = () => {
    const [showList, setShowList] = useState(false);
  
    const handleClick1 = () => {
      setShowList(!showList);
    };
  
    const [buttonImage, setButtonImage] = useState(buttonImage1);
  
    const handleClick2 = () => {
      if (buttonImage === buttonImage1) {
        setButtonImage(buttonImage2);
      } else {
        setButtonImage(buttonImage1);
      }
    };
  
    const handleButtonClick = () => {
      handleClick1();
      handleClick2();
    };
  
    return (
      <div className="header">
        <img src="./logo.png" alt="MCA logo" />
        <div className="header1">
          <img src="./shopping.png" alt="cart" />
          <button style={{ outline: "none" }} onClick={handleButtonClick}>
            <img src={buttonImage} alt="Button" />
          </button>
          {showList && (
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          )}
        </div>
      </div>
    );
  };

  export default Header;
