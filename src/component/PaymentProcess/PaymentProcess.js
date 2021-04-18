import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';
import SplitForm from './SplitForm';
import './stripe.css';
const stripePromise = loadStripe('pk_test_51Ie9VqKA9RGUKPzpRVUr3EBr9AjVwrTUnJ23FXdzTUEAQ3Hz96sf5aQJICuFTgluBvc76FAftBtEQ06nW7BUbSCC00D9J8tnWt');


const PaymentProcess = ({handlePayment}) => {

    return (
        <div className="stripe-form">
            <Elements stripe={stripePromise}>
                {/* <SplitForm></SplitForm> */}
                <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
                
            </Elements>
        </div>
    );
};

export default PaymentProcess;