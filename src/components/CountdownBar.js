import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const CountdownBar = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const today = new Date();
    const targetDate = new Date('May 31, 2023');
    const timeDiff = targetDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    setDaysLeft(daysDiff);
  }, []);
  
  return (
    <div>
      <p>{daysLeft} days left until May 31, 2023</p>
      <ProgressBar now={100 - ((daysLeft / 100) * 100)} />
    </div>
  );
};

export default CountdownBar;
