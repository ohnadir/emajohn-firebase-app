import React from 'react';

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = tax + shipping + total;
    return (
        <div className='p-4 pt-14 sticky top-0'>
            <h1 className='text-center mb-4 text-xl font-bold'>Selected Products</h1>
            <p>Selected item:- {quantity}</p>
            <p>Total:- $ {total}</p>
            <p>Tax:- ${tax}</p>
            <p>Shipping:- ${shipping}</p>
            <p className='mt-2 text-xl font-bold'>Grand Total ${grandTotal}</p>
            <button className='bg-[#F55353] rounded w-full text-white mt-4 py-2'>
                Checkout Review 
            </button>
        </div>
    );
};

export default Cart;