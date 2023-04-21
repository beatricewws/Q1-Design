import React from 'react';
import MyTableCar from './MyTableCar';

function MyCar() {
  const data = [
    { photo: 'Ram.png', once: 0, vip: 0, total: 0 },
  ];

  return (
    <div>
      <h1>MY CURRENT DRAWS</h1>
      <MyTableCar title="VIP Only:	Ram 2500 Power Wagon" content="Draw date: 28 April 2023" data={data} />
    </div>
  );
}

export default MyCar;
