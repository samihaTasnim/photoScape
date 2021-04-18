import React from 'react';
import './banner.css'

const Banner = () => {
  return (
    <div className="container banner">
      <div className="centered d-flex justify-content-center align-items-center">
        <div>
          <h2 className="text-center header text-white">Fancy a tour?</h2>
          <p className="text-white">We've got you covered. No need to stress over the bookings and tickets.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;