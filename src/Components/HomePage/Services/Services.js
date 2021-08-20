import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimationWrapper } from 'react-hover-animation'

const Services = () => {

  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('https://floating-reaches-34185.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  console.log(services);

  return (
    <div className="container">
      <h4 style={{ color: '#e89623' }} className="my-5 text-center">Services we provide</h4>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          services.map(service => (
            <AnimationWrapper key={service._id}>
              <div className="col">
                <div className="card">
                  <img src={service.image} className="card-img-top image-spot" alt="..." style={{ height: '43vh'}}/>
                  <div className="card-body">
                    <p className="text-secondary">{service.name}</p>
                    <p>Cost: ${service.price}</p>
                    <div className="row">
                      <div className="col-md-6">
                        <button className="btn" style={{ backgroundColor: '#e89623' }}>
                          <Link to={`/book/${service._id}`} style={{ textDecoration: 'none', color: 'white' }}>Book now</Link>
                        </button>
                      </div>
                      <div className="col-md-6">
                      <button className="btn" style={{ backgroundColor: '#e89623' }}>
                      <Link to={`/service/${service._id}`} style={{ textDecoration: 'none', color: 'white' }}>View details</Link>
                    </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          ))
        }
      </div>
    </div>
  );
};

export default Services;