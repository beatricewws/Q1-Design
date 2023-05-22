import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Header from './components/Header';
import MainContent from './pages/MainContent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyDashboard from './pages/MyDashboard';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 16px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    max-width: 1200px;
  }
`;

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 500;
  
    if (isMobile) {

    return (
      <div className="container">
    <Header />
    <Router>
        <MobileNav />
        <Routes>
            <Route path='/' element={<MainContent />} />
            <Route path='/MyDashboard' element={<MyDashboard/>} />
        </Routes>  
    </Router>
      {isMobile ? (
        null 
      ) : (
      <Container>
        <MainContent />
      </Container>
      )}
  </div>
    );
    } else {
      return (
        <div className="container">
      <Header />
      {isMobile ? (
        <MainContent />
      ) : (
      <Container>
        <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<MainContent />} />
            <Route path='/MyDashboard' element={<MyDashboard/>} />
        </Routes>  
        </Router>
      </Container>
      )}
    </div>
      );
    };
};

export default App;
