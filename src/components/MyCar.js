import React from 'react';
import MyTableCar from './MyTableCar';

function MyCar() {
  const data = [
    { name: 'John Smith', age: 35, occupation: 'Software Developer' },
    { name: 'Jane Doe', age: 28, occupation: 'Designer' },
    { name: 'Bob Johnson', age: 42, occupation: 'Manager' },
  ];

  return (
    <div>
      <h1>My Table</h1>
      <MyTableCar data={data} />
    </div>
  );
}

export default MyCar;