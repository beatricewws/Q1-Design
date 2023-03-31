import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './pages/MainContent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Sidebar />
        <div className="login">
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default App;
