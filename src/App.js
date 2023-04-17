import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Header from './components/Header';
import MainContent from './pages/MainContent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyDashboard from './pages/MyDashboard';


const App = () => {
  const [hideDiv, setHideDiv] = useState(false);

  const handleRouteChange = () => {
    setHideDiv(true);
  };

  return (
    <div className="container">
      <Header />
      <div className="main">
        <Router>
        <Navbar handleRouteChange={handleRouteChange} />
        <Routes>
            <Route path='/MyDashboard' element={<MyDashboard/>} />
        </Routes>  
        </Router>
        <div className='login'  style={{ display: hideDiv ? 'none' : 'block' }}>
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default App;