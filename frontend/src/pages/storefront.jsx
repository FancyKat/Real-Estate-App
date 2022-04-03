import React from 'react';
import '../media/styles/home.css';
import Slider from '../components/Slider';
import Hero from '../components/Hero';
import Card from '../components/Card';


const Home = () => {
  return (
    <>
      <Hero />

      <Card />

      {/* Slider Section */}
      <Slider />

      {/* Info Section */}
      <div className="info-container">
        <div className="info">
          <h1>Let's work together and create something unique</h1>
        </div>
      </div>

      
    </>
  );
};

export default Home;
