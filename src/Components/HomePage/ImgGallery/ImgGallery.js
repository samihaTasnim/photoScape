import React from 'react';
import './ImgGallery.css';

const ImgGallery = () => {
  return (
    <div className="row m-3 mb-5 d-flex justify-content-center align-items-center g-0">
      <div className="col-lg-3 d-flex justify-content-center col-sm-12 mb-5 col-12">
        <img src="https://i.ibb.co/Y0zkyMc/1-2x-2.png" alt="Couple shoots" className="w-75 img-fluid" />
      </div>
      <div className="col-lg-6 col-12">
        <div className="row mb-5">
          <div className="col-md-9 col-sm-12 col-12">
            <img src="https://i.ibb.co/zZhGs9r/1-2x.png" alt="" className="w-100 img-fluid" />
          </div>
          <div className="col-md-3 d-flex align-items-lg-end justify-content-center col-sm-12 mt-5">
            <img src="https://i.ibb.co/pzjMB7R/1-2x-1.png" alt="" className="h-lg-50 h-sm-100 w-lg-auto img-fluid h-md-75" />
          </div>
        </div>
        <div className="row g-0">
          <div className="col-md-4 col-sm-12 col-12 d-flex justify-content-center mb-5">
            <img src="https://i.ibb.co/vxRLWBY/2-2x.png" alt="" className="w-75 img-fluid h-50 responsive-height" />
          </div>
          <div className="col-md-8 col-sm-12 mb-5">
            <img src="https://i.ibb.co/wzGmtfY/2-2x-1-1.png" alt="" className="w-auto img-fluid" />
          </div>
        </div>
      </div>
      <div className="col-lg-3 d-flex justify-content-center col-sm-12">
        <img src="https://i.ibb.co/CM1bqTT/1-2x-3.png" alt="Wedding shoot" className="w-75" />
      </div>
    </div>
  );
};

export default ImgGallery;