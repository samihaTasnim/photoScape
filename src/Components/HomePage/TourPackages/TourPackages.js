import React from 'react';

const TourPackages = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <h3 className="text-center" style={{ color: '#e89623' }}>Our speciality</h3>
        <p className="text-center">We offer varity of packages so that you can choose what's best for you</p>
        <div className="row mt-5">
          <div className="col-md-3 offset-md-3">
            <img src="https://i.ibb.co/x8LPH2c/cabin-hkfr-1.png" alt=".." style={{ height: '30vh' }} className="text-center" />
          </div>
          <div className="col-md-6 d-flex justify-items-center align-items-center"><p>Find the best hotels for your comfortable vacation.</p></div>
        </div>
        <div className="row mb-5">
          <div className="col-md-3 offset-md-3 d-flex justify-items-center align-items-center">
            <p>Choose from a variety of transportation to get the most from your journey.</p>
          </div>
          <div className="col-md-6">
            <img src="https://i.ibb.co/WBkW01S/aircraft-fbvl-1.png" alt=".." style={{ height: '30vh' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPackages;