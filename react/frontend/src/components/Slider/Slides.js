import React from "react";
import './Slider.css';
import movie1 from '../../media/movie1.jpg';
import movie2 from '../../media/movie1.jpg';
import movie3 from '../../media/movie1.jpg';

const slidesInfo = [
    {
        src: movie1,
        alt: "Project 1",
        desc: "Movies",
    },
    {
        src: movie2,
        alt: "Project 2",
        desc: "Cliker",
    },
    {
        src: movie3,
        alt: "Project 3",
        desc: "C.V.",
    },
    

]

const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
));

export default slides;