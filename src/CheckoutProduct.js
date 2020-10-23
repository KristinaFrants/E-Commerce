import React from 'react'
import './CheckoutProduct.css'
import { Button } from 'react-bootstrap';
import { useStateValue } from "./StateProvider"

function CheckoutProduct({id, image, title, price, rating}) {
    const [{ basket }, dispath] = useStateValue();

    const removeFromBasket =() => {
        //delite items from the basket
        dispath({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })   
     }
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
                <Button onClick={removeFromBasket} variant="dark" size="sm">Remove Item</Button>
            </div>
        </div>
    )
}

export default CheckoutProduct
