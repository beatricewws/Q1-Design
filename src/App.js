import React from 'react';
import './App.css';

const Header = () => {
  return <div className="header">Header</div>;
};

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </div>
  );
};

const Content = () => {
  return (
    <div className="content">
      <div className="left">Left Content</div>
      <div className="right">Right Content</div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Navigation />
        <Content />
      </div>
    </div>
  );
};

export default App;

