import React from 'react';
import hero from '../../media/hero.png';


function Hero() {
  return (
    <>
      <div className="cover-container">
        <img className="video" src={hero} alt="" />
        <h1>Paulo Martin</h1>
        <p>Developer | Designer | 3D Creator</p>
      </div>
    </>
  );
}

export default Hero;
