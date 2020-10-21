import React from 'react'
import './Checkout.css';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://image.freepik.com/free-vector/abstract-pink-polygon-banner-background_1035-19018.jpg"/>
                <div>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>
                {/* BasketItems */}
                
             </div>
            </div>

            <div className="checkout__right">
                <h2>Subtotal</h2>
            </div>
        </div>
    )
}

export default Checkout
