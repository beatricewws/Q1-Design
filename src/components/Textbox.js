import React, { useState } from 'react';

function TextBox() {
  const [showTextBox, setShowTextBox] = useState(true);

  function closeTextBox() {
    setShowTextBox(false);
  }

  return (
    showTextBox &&
    <div className="textbox">
      <p>Entry Numbers Please note that entry numbers can take up to 12 hours to be generated. Please check back in a few hours. Thank you for your patience!</p>
      <button className="close-button" onClick={closeTextBox}>X</button>
    </div>
  );
}

export default TextBox;
