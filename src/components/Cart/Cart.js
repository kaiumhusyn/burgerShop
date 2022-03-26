import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart, cleaner} = props;
    
    let productName = [];
    let [mostTestierOne, setMostTestierOne] = useState();
    for(const product of cart){
        productName = productName + product.name;
    }
    function selectMostTestier(){
        const cartLength = cart.length;
        const temp = Math.ceil(Math.random() * cartLength+1)
        // mostTestierOne = cart[temp];
        setMostTestierOne(cart[temp]);
    }


    return (
        <div className='cart'>
           <h4>Selected Burgers</h4>
            <p>Item Selected: {cart.length}</p> 
            {cart.map((product)=>(
                <p key={product.id}>{product.name}</p>
            ))}
            

           <div>
                <button onClick={selectMostTestier} className='cart-btn' >
                    <p>Most tastier one</p>
                </button>
                {mostTestierOne ? (
                    <>
                        <br />
                        <p>{mostTestierOne.name}</p>
                    </>
                ): ('')}
                <br />
                <button onClick={cleaner} className='cart-btn'>
                    <p>Choose Again</p>
                </button>
           </div>

        </div>
        
    );
};

export default Cart