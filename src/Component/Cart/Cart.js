import React from 'react';

const Cart = () => {
    return (
        <div className='p-4 pt-14 sticky top-0'>
            <h1 className='text-center mb-4 text-xl font-bold'>Selected Products</h1>
            <p>Selected item:-</p>
            <p>Total:- $</p>
            <p>Tax:- $</p>
            <p>Shipping:- $</p>
            <p>Grand Total</p>

            <button className='bg-cyan-600 rounded w-full text-white'>
                Checkout Review 
            </button>
        </div>
    );
};

export default Cart;