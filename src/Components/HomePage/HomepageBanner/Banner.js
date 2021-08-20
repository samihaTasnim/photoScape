import React from 'react';
import './banner.css'

const Banner = () => {
  return (
    <div className="container banner">
      <div className="centered d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1 className="text-primary">Make Everything Memorable</h1>
          <h5 className="text-white">Book a professional photographer for any moment, anywhere in the world. Starting from $700.000 per session.</h5>
        </div>
      </div>
    </div>
  );
};

export default Banner;