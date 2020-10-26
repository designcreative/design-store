import React, { Fragment } from 'react'
import CartItem from '../CartItem/CartItem'
import './Cart.css'

export default function Cart({ itemsInCart, totalCost }) {
    return (
        <div className="Cart">
            <h2 className="Cart-title">Your shopping cart</h2>
            {itemsInCart.length > 0 ? (
                <Fragment>
                    {itemsInCart.map(item => (
                        <CartItem 
                            key={item.id}
                            title={item.title}
                            cost={item.price * item.quantity}
                            quantity={item.quantity} 
                        />
                    ))}
                    <div className="Cart-total-cost">
                        Total cost: ${totalCost.toFixed(2)}
                    </div>
                </Fragment>
            ) : (
                <div>Your cart is empty</div>
            )}
        </div>
    )
}