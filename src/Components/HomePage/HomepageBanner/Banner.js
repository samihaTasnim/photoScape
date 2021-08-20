import React from 'react';
import './banner.css'

const Banner = () => {
  return (
    <div className="banner">
      <div className="centered d-flex justify-content-center align-items-center">
        <div className="text-center mx-5">
          <h1 className="text-primary header">Make Everything Memorable</h1>
          <p className="fs-5 mt-3 mb-0">Book a professional photographer for any moment, anywhere in the world.</p>
          <span className=" fs-5">Starting from $700.00 per session. </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;