import React from 'react';
import Tshirt from '../Tshirt/Tshirt';
import './Cart.css';
const Cart = ({ cart, handleRemoveCart }) => {
    let message;
    if (cart.length < 1) {
        message = 'Please add some T-shirt';
    } else {
        message = 'Thank you for add product'
    }
    return (
        <div>
            <h2 className={cart.length < 2 ? 'red' : 'green'} >Order Summery {cart.length} </h2>
            <p>{message}</p>
            {
                cart.map(tshirt =>
                    <p key={tshirt._id}>{tshirt.name} <button onClick={() => handleRemoveCart(tshirt._id)}>X</button></p>
                )
            }
        </div>
    );
};

export default Cart;