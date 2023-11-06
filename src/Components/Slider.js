import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import child4 from "../assets/images/children4.jpg";
import child3 from "../assets/images/children3.jpg";
import child2 from "../assets/images/children2.jpg";

const Slider = () => {
    const slides = [
      {
        image: child4,
        text: 'Text Overlay 1',
      },
      {
        image: child3,
        text: 'Text Overlay 2',
      },
      {
        image: child2,
        text: 'Text Overlay 2',
      },
    ];
  
    return (
      <Carousel showArrows={true} infiniteLoop={true} showThumbs={false}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img src={slide.image} alt={`Slide ${index}`} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h2 className="text-4xl font-bold">{slide.text}</h2>

            </div>
          </div>
        ))}
      </Carousel>
    );
}

export default Slider