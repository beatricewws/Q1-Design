import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './pages/MainContent';
import './App.css';

const Header = () => {
  return <div className="header">Header</div>;
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
