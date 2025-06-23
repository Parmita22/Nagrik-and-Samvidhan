import React, { useState, useEffect } from 'react';
import './TestimonialSlider.css';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5); 
    }, 3300);

    const slides = document.querySelectorAll('.slider__contents');
    setTotalSlides(slides.length);

    return () => clearInterval(intervalId);
  }, []);

  const handleNavClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className='testimonial'>
      <h2 className='heading-with-line1'>Testimonials</h2>

      <div className='testimonials-section'>
        <div className='slider__inner' style={{ transform: `translateX(-${currentIndex * (100 / totalSlides)}%)` }}>
          <div className="slider__contents">
            <quote>&rdquo;</quote>
            <p className="slider__txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quam sapiente sequi distinctio, aperiam ex! Cumque, odit? Quisquam quos amet explicabo facere nisi?.</p>
            <h3 className="slider__caption">Rhonda | NylonCraft</h3>
          </div>
          <div className="slider__contents">
            <quote>&rdquo;</quote>
            <p className="slider__txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis doloremque aut facilis, adipisci culpa ullam delectus neque illum repudiandae quia porro dignissimos sed?.</p>
            <h3 className="slider__caption">Jared | Rexam</h3>
          </div>
          <div className="slider__contents">
            <quote>&rdquo;</quote>
            <p className="slider__txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ab id commodi dolorum tempore officia omnis maxime aliquid mollitia illo voluptas, deserunt corrupti perferendis expedita enim, obcaecati minima beatae consequatur amet voluptatem sed. Officiis!.</p>
            <h3 className="slider__caption">Chris | C&M Fine Pack</h3>
          </div>
          <div className="slider__contents">
            <quote>&rdquo;</quote>
            <p className="slider__txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id amet maiores animi velit minus ad, aspernatur, quo dolorum commodi mollitia totam exercitationem quas libero obcaecati. Dolorem earum, pariatur et ratione eos maxime molestias amet!</p>
            <h3 className="slider__caption">Rex | LNP Engineering Plastics</h3>
          </div>
          <div className="slider__contents">
            <quote>&rdquo;</quote>
            <p className="slider__txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab quidem quaerat maiores praesentium officia iusto cupiditate magni nulla! Possimus nobis saepe quod cupiditate, ratione at impedit illum libero eius illo quas minima, facilis qui. Id sint quaerat quidem impedit voluptas explicabo saepe soluta necessitatibus facere?.</p>
            <h3 className="slider__caption">Darlene | Russel Stover</h3>
          </div>
        </div>
      </div>

      <div className='slider__dots'>
        {[...Array(5)].map((_, index) => (
          <input
            key={index}
            type='radio'
            name='slider'
            title={`slide${index + 1}`}
            className='slider__nav'
            checked={index === currentIndex}
            onChange={() => handleNavClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlider;
