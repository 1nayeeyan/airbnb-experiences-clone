/* eslint-disable arrow-body-style */
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

function App() {
  const cards = data.map((card) => {
    return (
      <Card
        key={card.id}
        item={card}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <div className="container">
        <Hero />
        <div className="cards-list">
          {cards}
        </div>
      </div>
    </div>
  );
}

export default App;
