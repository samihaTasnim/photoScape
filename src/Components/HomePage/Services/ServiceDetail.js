import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {

  const [service, setService] = useState([])
  console.log(service);

  const { id } = useParams()

  useEffect(() => {
    fetch(`https://floating-reaches-34185.herokuapp.com/service/${id}`)
      .then(res => res.json())
      .then(data => setService(data[0]))
  }, [id])

  return (
    <div className="container">
      <br />
      <br />
      <Link to="/"><button className="btn btn-primary">Go Back</button></Link>
      <div className="row mt-3">
        <div className="col-md-6">
          <img src={service.image} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2 className="text-primary">{service.name}</h2>
          <br />
          <p className="text-muted ">Details: {service.details}</p>
          <p className="text-muted ">Cost: $ {service.price}</p>
          <Link to={`/book/${service._id}`} ><button className="btn btn-primary">Book now</button></Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail;