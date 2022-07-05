import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/pages/calculator/Calculator';
import Home from './components/pages/home/Home';
import Quote from './components/pages/quote/Quote';

function App() {
  return (
    <div className="main-container">
      <h1>Welcome to React Router!</h1>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="quote" element={<Quote />} />
          <Route path="Calculator" element={<Calculator />} />
        </Routes>
        <nav>
          <Link to="/">Home</Link>
          <Link to="quote">Quote</Link>
          <Link to="calculator">Calculator</Link>
        </nav>
      </React.StrictMode>
    </div>
  );
}

export default App;
