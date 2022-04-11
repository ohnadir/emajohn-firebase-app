import React, { useState } from 'react';
import { addToDb } from '../../FakeDataBase/FakeDataBase';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import Product from '../Product/Product';

const Shop = () => {
    const [products] = useProducts([]);
    const [cart, setCart] = useCart(products);
    console.log(cart);


    const handleAddToCart = (selectedItem) => {
        let newCart = [];
        const exists = cart.find(item => item.id === selectedItem.id);
        if (!exists) {
            selectedItem.quantity = 1;
            newCart = [...cart, selectedItem];
        } else {
            const rest = cart.filter(item => item.id !== selectedItem.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedItem.id);
    }
    return (
        <div>
            <div className='flex flex-col-reverse md:flex-row mx-auto max-w-5xl'>
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-16'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart bg-[#FFBC97] sticky top-0  md:w-[250px] ">
                    <Cart
                        cart={cart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;