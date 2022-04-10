import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(data);
            });
    }, []);
    return (
        <div>
            <div className='flex flex-col-reverse md:flex-row mx-auto max-w-5xl'>
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-16'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}

                        ></Product>)
                    }
                </div>
                <div className="cart bg-[#FFBC97] sticky top-0  md:w-[250px] ">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;