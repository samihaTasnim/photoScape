import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {

  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('https://floating-reaches-34185.herokuapp.com/services')
    .then(res => res.json())
    .then(data => setServices(data))
  })
  return (
    <div className="container">
      <h4 style={{color: '#e89623'}} className="my-5 text-center">Services we provide</h4>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {
            services.map( service => (
              <div className="col">
              <div className="card" key={service._id}>
                <img src={service.imgage} className="card-img-top image-spot" alt="..." />
                <div className="card-body">
                  <p className="text-secondary">{service.name}</p>
                  <p>Cost: ${service.price}</p>
                  <button className="btn btn-secondary" style={{backgroundColor: '#e89623'}}>
                    <Link to={`/book/${service._id}`} style={{textDecoration: 'none', color: 'white'}}>BOOK NOW</Link>
                  </button>
                </div>
              </div>
            </div>
            ))
          }
        </div>
    </div>
  );
};

export default Services;