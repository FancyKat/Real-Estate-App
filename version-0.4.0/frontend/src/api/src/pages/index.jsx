import React from 'react';
import '../media/styles/home.css';
import Slider from '../components/Slider';
import Hero from '../components/Hero';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <>
      <Hero />

      {/* About Section */}
      <div className="about-container">
        <div className="about-desc">
          <h3>Let me tell you something about me</h3>
          <p>
            {' '}
            With a vested passion for various fields such as programming and 3D, I'm currently following a bootcamp at
            BeCode.org. This allows me to polish my skills in JS, PHP, CSS, Saas in addition to frameworks like
            React.js, Vue.js and React-Native. Which makes me think I'd like to get started with other frameworks and
            3D-oriented tools, of which Three.js, 3Dmax and zbrush.
          </p>
        </div>
        <div className="about-img"></div>
      </div>

      {/* Slider Section */}
      <Slider />

      {/* Info Section */}
      <div className="info-container">
        <div className="info">
          <h1>Let's work together and create something unique</h1>
        </div>
      </div>

      <Footer />
      
    </>
  );
};

export default Home;
