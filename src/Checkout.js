import React from 'react'
import './Checkout.css';
import Subtotal from "./Subtotal";
import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from "./StateProvider";

function Checkout() {
    const [{ basket, user }, dispath] = useStateValue();

    return (
        <div className="row checkout">
            <div className="checkout__left col-sm-8">
                <img className="checkout__ad" src="https://image.freepik.com/free-vector/abstract-pink-polygon-banner-background_1035-19018.jpg"/>
                <div>
                <h6 className="ml-3"> Hello, {user?.email}</h6>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>
                
                {/* BasketItems */}
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

            <div className="checkout__right col-sm-4">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
