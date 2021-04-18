import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const SimpleCardForm = ({handlePayment}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] =  useState(null);
  const [paymentSuccess, setPaymentSuccess] =  useState(null);
  console.log(paymentError, paymentSuccess)

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message)
      setPaymentSuccess(null)
      console.log('[error]', error);
    } else {
      setPaymentSuccess(paymentMethod.id)
      setPaymentError(null);
      handlePayment(paymentMethod.id)
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {
        paymentError && <p style={{color: 'red'}}>{paymentError}</p>
      }
      {
        paymentSuccess && <p style={{color: 'green'}}>Payment Sucessfully Completed</p>
      }
    </div>
  );
};

export default SimpleCardForm;