import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './pages/MainContent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div className="header">
      <img src="./logo.png" alt="MCA logo" />
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
