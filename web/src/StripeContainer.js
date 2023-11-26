import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from './PaymentForm';

const PUB_KEY = "pk_test_51OGXX3CatlryZd5s2IKLSUKMhNLvz2MlFXj2pOrHFY5vc8kLyW0wiAhW0n07CxlnQfnLzBGbKxvtwBvo7KFAJ50R00PAJlKuA3"

const stripeTestPromise = loadStripe(PUB_KEY);

export default function StripeContainer() {
    return(
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}