import React from 'react';
import { useState } from 'react';

const Portfolio = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const nextSlide = () => {
    setActiveSlide((prevSlide) => {
      if (prevSlide < 4) {
        return prevSlide + 1;
      } else {
        return 1; // Kembali ke slide pertama setelah slide terakhir
      }
     });
    };

  const prevSlide = () => {
    setActiveSlide((prevSlide) => {
      if (prevSlide > 1) {
        return prevSlide - 1;
      } else {
        return 4; // Pindah ke slide terakhir dari slide pertama
      }
    });
  };

  return (
    <>
    <style>{`
    .carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    }

    .carousel-item {
    position: absolute;
    width: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    }

    .carousel-item.active {
    position: relative;
    opacity: 1;
    }

    .btn-circle {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 50%;
    padding: 0.5em 1em;
    text-decoration: none;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    }

    .left-btn {
    left: 1rem; /* Jarak dari kiri */
    }

    .right-btn {
    right: 1rem; /* Jarak dari kanan */
    }

    .btn-circle:hover {
    background: rgba(0, 0, 0, 0.8);
    }

    .container {
    max-width: 800px;
    margin: 0 auto;
    }

`}
    </style>
    <div className="container mx-auto py-8">
      <div className="carousel relative w-full">
        <div id="slide1" className={`carousel-item ${activeSlide === 1 ? 'active' : ''}`}>
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
            alt="Slide 1"
          />
        </div>
        <div id="slide2" className={`carousel-item ${activeSlide === 2 ? 'active' : ''}`}>
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
            alt="Slide 2"
          />
        </div>
        <div id="slide3" className={`carousel-item ${activeSlide === 3 ? 'active' : ''}`}>
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
            alt="Slide 3"
          />
        </div>
        <div id="slide4" className={`carousel-item ${activeSlide === 4 ? 'active' : ''}`}>
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
            alt="Slide 4"
          />
        </div>
        <button className="btn btn-circle left-btn" onClick={prevSlide}>❮</button>
        <button className="btn btn-circle right-btn" onClick={nextSlide}>❯</button>
      </div>
    </div>
    </>
  );
};

export default Portfolio;
