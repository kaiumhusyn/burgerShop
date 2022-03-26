import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    
    let productName = [];
    for(const product of cart){
        productName = productName + product.name;
    }

    return (
        <div className='cart'>
           <h4>Selected Burgers</h4>
            <p>Item Selected: {cart.length}</p> 
            <p>Selected Items: {productName}</p>
            

           <div>
           <button className='cart-btn' >
                <p>Most tastier one</p>
            </button>
            <br />
            <button className='cart-btn'>
                <p>Choose Again</p>
            </button>
           </div>

        </div>
        
    );
};

export default Cart;