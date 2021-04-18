import React from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from 'react';

const CardForm = ({setPaymentId, onSubmit, service}) => {

  const stripe = useStripe();
  const elements = useElements();
  console.log(onSubmit);

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
        setPaymentSuccess(paymentMethod.id);
        setPaymentError(null);
        setPaymentId(paymentMethod.id)
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe} style={{backgroundColor: '#e89623'}} className="btn"> Pay </button>
        </form>
        {
            paymentError && <p style={{color: 'red'}}>{paymentError}</p>
        }
        { 
            paymentSuccess && <p style={{color: 'green'}}>Your payment was successful.</p>
        }
    </div>
  );
};

export default CardForm;