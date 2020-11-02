import React, {useState, useEffect} from 'react'
import './Payment.css'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom"
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { Button } from 'react-bootstrap';
import axios from './axios';
import {db} from "./firebase"


function Payment() {
    const [{ basket, user}, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError]= useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() =>{
        //allows us to charge customer
        const getClientSecret = async () => {
            const response =await axios({
                method:'post',
                url: `/payments/create?total=${getBasketTotal(basket)*100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])


    const handleSubmit = async (event)=> {
        event.preventDefault();
        setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: elements.getElement(CardElement)
        }
    }).then(({ paymentIntent }) => {
 
        console.log("payment", basket)

        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created
        })

        //PaymentConfirmation
        setSucceeded(true);
        setError(null)
        setProcessing(false)

        dispatch({
            type: 'EMPTY_BASKET'
        })

        history.replace('/orders')
    })

    }

const handleChange = event => {
    //listen for changes inside Cardelement
    //diaplay any errors as customer types card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
}

const productsPage =() => {
    //delite items from the basket
    dispatch({
        type: 'EMPTY_BASKET'
    })  
    history.push('/orders') 
 }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h3>
                    Checkout (<Link to="checkout">
                        {basket?.length} items
                        </Link>)
                </h3>

                {/* Delivery address */}
                    <div className='payment__section '>
                        <div className='payment__title '>
                            <h6>Delivery Address</h6>
                        </div>
                            <div className='payment__address'>
                                <p>{user?.email}</p>
                                <p>123 React Lane</p>
                                <p>Los Angeles, CA</p>
                            </div>
                        
                    </div>
                {/* Payment Review */}
                    <div className='payment__section'>
                        <div className='payment__title'>
                            <h6>Review Items and Delivery</h6>
                            </div>
                            <div className='payment__items'>
                                {/* Products in the basket */}
                                {basket.map(item =>(
                                    <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                    />
                                ))}
                            </div>
                    </div>
                {/* Payment method */}
                    <div className='payment__section'>
                        <div className='payment__title'>
                            <h6>Payment Method</h6>    
                        </div>
                        <div className="payment__details">
                            {/* Stripe */}

                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} />
                                    <div className="payment__priceContainer">
                                        <CurrencyFormat
                                            renderText={(value) =>(
                                                <h6>Order Total: {value}</h6>
                                            )}
                                            decimalScale={2}
                                            value={getBasketTotal(basket)}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"$"}
                                        />
                                        <button 
                                        disabled={processing || disabled || succeeded} 
                                        variant='dark' size="sm">
                                            <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                        </button>
                                        {/* <Button className="ml-3" onClick={productsPage} variant='dark' size="sm"> Checkout </Button> */}
                                    </div>

                                    {/* Errors */}
                                    {error && <div>{error}</div>}
                            </form>

                        </div>
                    </div>

            </div>
        </div>
    )
}

export default Payment


