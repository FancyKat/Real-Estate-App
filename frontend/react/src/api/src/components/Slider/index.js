import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from './Slides.js';
import './Slider.css';

const Slider = () => {
    return (
        <div className="caroussel-container">
            <div className="caroussel-title">
                <h2>My Projects</h2>
            </div>
            <Carousel
                arrows
                slidesPerPage={5}
                slidesPerScroll={2}
                animationSpeed={1500}
                autoPlay={3000}
                stopAutoPlayOnHover
                offset={50}
                itemWidth={350}
                clickToChange
                centered
                slides={Slides}
                breakpoints={{
                    960: { 
                        slidesPerPage: 1,
                        arrows: false,
                        itemWidth:250,
                    }
                }}
            />            
        </div>
    )
}

export default Slider;
