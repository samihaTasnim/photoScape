import React from 'react';
import './touristspot.css'

const TouristSpots = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <h3 className="text-center" style={{ color: '#e89623' }}>Tourist spots</h3>
        <p className="text-center">Whether you want to see mountain or vallye, we've got every option!</p>
        <div className="row my-3">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <img src="https://i.ibb.co/gSg2w9s/spot-2.jpg" class="card-img-top image-spot" alt="..." />
                <div class="card-body">
                  <p class="text-secondary">Nusa Dua Beach, Denpasar, Bali</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="https://i.ibb.co/YPzJjXp/spot-3.jpg" class="card-img-top image-spot" alt="..." />
                <div class="card-body">
                  <p class="text-secondary">Shundarban, Bangladesh</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="https://i.ibb.co/Gp0pQtb/spot-1.jpg" class="card-img-top image-spot" alt="..." />
                <div class="card-body">
                  <p class="text-secondary">Phu chi fa, Thailand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristSpots;