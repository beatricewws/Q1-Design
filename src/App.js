import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './pages/MainContent';
import './App.css';

function NavBar() {
  return (
    <div className="container">
      <div class="box">
        <Sidebar />
      </div>
      <div class="box">
        <MainContent />
      </div>
    </div>
  );
}

export default NavBar;

