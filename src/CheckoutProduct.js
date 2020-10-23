import React from 'react'
import './CheckoutProduct.css'
import { Button } from 'react-bootstrap';

function CheckoutProduct({id, image, title, price, rating}) {
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image}/>
        
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) =>(
                        <p>⭐</p>
                    ))}
                </div>
                <Button variant="dark" size="sm">Remove Item</Button>
            </div>
        </div>
    )
}

export default CheckoutProduct
