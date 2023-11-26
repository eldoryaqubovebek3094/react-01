import React, { useState } from 'react';
import axios from 'axios';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CARD_STYLE = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#fff',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      '::placeholder': { color: '#87bbfd' },
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee',
    },
  },
};

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const submitPurchase = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post('http://localhost:4000/payment', {
          amount: 18000,
          id,
        });

        if (response.data.success) {
          console.log('Successful payment');
          setSuccess(true);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      {!success ? (
        <form onSubmit={submitPurchase}>
          <div className='form-group'>
            <div className='form-row'>
              <CardElement options={CARD_STYLE} />
            </div>
          </div>
          <button className='payButton'>Pay 💰</button>
        </form>
      ) : (
        <h2 className='success'>👏🏻Congratulation!!! 👏🏻</h2>
      )}
    </>
  );
}