import React from 'react';
import './ImgGallery.css';

const ImgGallery = () => {
  return (
    <div className="row m-3 mb-5 d-flex justify-content-center align-items-center g-0">
      <div className="col-md-3 d-flex justify-content-center">
        <img src="https://i.ibb.co/Y0zkyMc/1-2x-2.png" alt="Couple shoots" className="w-75 img-fluid" />
      </div>
      <div className="col-md-6">
        <div className="row mb-5">
          <div className="col-md-9">
            <img src="https://i.ibb.co/zZhGs9r/1-2x.png" alt="" className="w-100 img-fluid" />
          </div>
          <div className="col-md-3 d-flex align-items-end">
            <img src="https://i.ibb.co/pzjMB7R/1-2x-1.png" alt="" className="h-50 w-auto img-fluid" />
          </div>
        </div>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://i.ibb.co/vxRLWBY/2-2x.png" alt="" className="w-75 img-fluid" />
          </div>
          <div className="col-md-8">
            <img src="https://i.ibb.co/wzGmtfY/2-2x-1-1.png" alt="" className="w-auto img-fluid" />
          </div>
        </div>
      </div>
      <div className="col-md-3 d-flex justify-content-center">
        <img src="https://i.ibb.co/CM1bqTT/1-2x-3.png" alt="Wedding shoot" className="w-75" />
      </div>
    </div>
  );
};

export default ImgGallery;