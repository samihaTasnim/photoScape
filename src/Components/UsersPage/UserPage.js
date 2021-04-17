import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from './Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useContext } from 'react';
import { UserContext } from '../../App.js';
import CardForm from './CardForm/CardForm';


const UserPage = () => {

  const [service, setService] = useState([])
  const [paymentId, setPaymentId] = useState(null)
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  console.log(loggedInUser);

  const { id } = useParams()
  useEffect(() => {
    fetch(`https://floating-reaches-34185.herokuapp.com/book/${id}`)
      .then(res => res.json())
      .then(data => setService(data[0]))
  }, [id])

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    if(paymentId === null) {
      alert("please put your card information first")
      return;
    }
    const {name, price} = service
    const orderData = {name: name, price: price, date: new Date(), email: loggedInUser.email, card: 'visa', status: 'pending', paymentId: paymentId }
    console.log(orderData);
    fetch('https://floating-reaches-34185.herokuapp.com/placeorder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    })
      .then(res => console.log(res))
  }

  const stripePromise = loadStripe('pk_test_51IeHBfLDFriQTKTtn3KSu1rqdIkhTkqhBXBYG9zyHjyILJhme6TOPkCS8pOEWS2CUKe6DoXhg1RoFkYN4vOslj0z00Jz6tBdGo')

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-7">
          <div className="p-5">
            <div>
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
                  <CardForm setPaymentId={setPaymentId}></CardForm>
                </Elements>
              </div>
               <input type="button" value="Book now" onClick={handleSubmit(onSubmit)}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;