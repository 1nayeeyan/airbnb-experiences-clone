import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Hero />
      </div>
    </div>
  );
}

export default App;
