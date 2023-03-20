import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './pages/MainContent';

function NavBar() {
  return (
    <div className="container">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default NavBar;

