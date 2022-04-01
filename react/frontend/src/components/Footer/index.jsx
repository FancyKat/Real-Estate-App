import React from 'react';
import './Footer.css'


function Footer() {
  return (
    <>
        <div className="Footer-container">
            <div className="Footer-info">
          <h1>Paulo</h1>
          <p>Based in Fresno California</p>
        </div>
        <div className="Footer-contact">
                    <h3>Contact me : ###-###-### </h3>
          <p>And let's get down to work</p>
        </div>
        <div className="Footer-sns">
                    <div className="design-by">Design By Paulo</div>
          <div className="sns-links">
            <a href="https://www.linkedin.com/in/paulo-martin90/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin linkedin"></i>
            </a>
            <a href="https://twitter.com/jeanhoudret" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter twitter"></i>
            </a>
            <a href="https://twitter.com/FancyKat__" target="_blank" rel="noreferrer">
              <i className="fab fa-github github"></i>
            </a>
          </div>
        </div>
      </div>

    </>
  );
};

export default Footer;
