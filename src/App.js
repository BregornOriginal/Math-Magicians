import React from 'react';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/pages/calculator/Calculator';
import Home from './components/pages/home/Home';
import Quote from './components/pages/quote/Quote';
import Header from './components/header/Header';

function App() {
  return (
    <div className="main-container">
      <React.StrictMode>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="quote" element={<Quote />} />
          <Route path="Calculator" element={<Calculator />} />
        </Routes>
      </React.StrictMode>
    </div>
  );
}

export default App;
