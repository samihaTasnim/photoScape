import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Testimonial = () => {

  const [testimonial, setTestimonial] = useState([])
  useEffect(() => {
    fetch('https://floating-reaches-34185.herokuapp.com/testimonials')
      .then(res => res.json())
      .then(data => setTestimonial(data))
  }, [])

  return (
    <div className="container">
      <div className="row my-5">
        <h4 style={{ color: '#e89623' }} className="mt-5 text-center">Testimonials</h4>
        <p className="mb-5 text-center">What our customers say about us</p>
        <div className="accordion" id="accordionExample">
          {
            testimonial.map(x => (
              <div className="accordion-item" key={x._id}>
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {x.name}
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>{x.description}</p>
                    <small>Email: {x.email}</small>
                </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Testimonial;