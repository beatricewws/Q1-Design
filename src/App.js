import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import MainContent from './pages/MainContent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyDashboard from './pages/MyDashboard';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const App = () => {


  return (
    <div className="container">
      <Header />
      <Container>
        <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<MainContent />} />
            <Route path='/MyDashboard' element={<MyDashboard/>} />
        </Routes>  
        </Router>
      </Container>
    </div>
  );
};

export default App;
