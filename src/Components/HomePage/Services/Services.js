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
  }, [])


  return (
    <div className="container my-3">
      <br />
      <br />
      <h2 className="my-5 text-center text-primary">Book a Photographer for Every Moment</h2>
      <div className="container text-center">
        <button type="button" class="btn btn-outline-dark mx-3">Holiday</button>
        <button type="button" class="btn btn-outline-dark mx-3">Family</button>
        <button type="button" class="btn btn-outline-dark mx-3">Birthday</button>
        <button type="button" class="btn btn-outline-dark mx-3">Wedding </button>
        <button type="button" class="btn btn-outline-dark mx-3">Warning</button>
        <button type="button" class="btn btn-outline-dark mx-3">Graduation</button>
        <button type="button" class="btn btn-outline-dark mx-3">Other</button>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
        {
          services.map(service => (
              <Link to={`/service/${service._id}`} style={{ textDecoration: 'none', color: 'white' }} key={service._id}>
              <div className="col">
                <div className="card" style={{cursor: 'pointer'}}>
                  <img src={service.image} className="card-img-top image-spot" alt="..." style={{ height: '43vh' }} />
                  <div className="card-body">
                    <p className="text-secondary">{service.name}</p>
                    <p>Cost: ${service.price}</p>
                    <div className="row">
                      <div className="col-md-6">
                        <button className="btn btn-primary">
                          <Link to={`/book/${service._id}`} style={{ textDecoration: 'none', color: 'white' }}>Book now</Link>
                        </button>
                      </div>
                      <div className="col-md-6">
                        <button className="btn btn-primary">
                          <Link to={`/service/${service._id}`} style={{ textDecoration: 'none', color: 'white' }}>View details</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Services;