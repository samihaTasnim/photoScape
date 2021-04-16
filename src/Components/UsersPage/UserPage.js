import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from './Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App.js';


const UserPage = () => {

  const [service, setService] = useState([])
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  console.log(loggedInUser);

  const { id } = useParams()
  useEffect(() => {
    fetch(`http://localhost:5000/book/${id}`)
      .then(res => res.json())
      .then(data => setService(data[0]))
  }, [id])

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const {name, price} = service
    const orderData = {name: name, price: price}
    orderData.date = new Date()
    orderData.user = loggedInUser.displayName;
    orderData.card = 'visa'
    console.log(orderData);
    fetch('http://localhost:5000/placeorder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    })
      .then(res => console.log(res))
  }

  const stripePromise = loadStripe('pk_test_51IeHBfLDFriQTKTtn3KSu1rqdIkhTkqhBXBYG9zyHjyILJhme6TOPkCS8pOEWS2CUKe6DoXhg1RoFkYN4vOslj0z00Jz6tBdGo');

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-7">
          <div className="p-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label"> Package Name</label>
                <input type="text" className="form-control" {...register("service")} id="exampleFormControlInput1" value={service.name} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Total cost</label>
                <input type="number" className="form-control" {...register("price")} id="exampleFormControlInput1" value={service.price} />
              </div>
              <div className="mb-3">
              <Elements stripe={stripePromise}>
                <span>Card info</span>
                <CardElement
                className="form-control"
                  options={{
                    style: {
                      base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                          color: '#aab7c4',
                        },
                      },
                      invalid: {
                        color: '#9e2146',
                      },
                    },
                  }}
                />
              </Elements>
              </div>
               <input type="submit" value="Book now"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;