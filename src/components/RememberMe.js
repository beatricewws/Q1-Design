import React, { useState } from 'react';

function RememberMeCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Remember me
      </label>
    </div>
  );
}

export default RememberMeCheckbox;
