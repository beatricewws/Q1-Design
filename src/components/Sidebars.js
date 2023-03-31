import React from 'react';

const Sidebar = () => {
    return (
      <div className="navigation">
        <ul style={{ listStyleType: 'none' }}>
          <li><a href="#">My Dashboard</a></li>
          <li><a href="#">Member offers</a></li>
          <li><a href="#">Order history</a></li>
          <li><a href="#">Account details</a></li>
          <li><a href="#">Address book</a></li>
          <li><a href="#">Subscriptions</a></li>
          <li><a href="#">Memberships history</a></li>
          <li><a href="#">Verify Entry Numbers</a></li>
        </ul>
      </div>
    );
  };

  export default Sidebar;
