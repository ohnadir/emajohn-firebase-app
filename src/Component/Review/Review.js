import React from 'react';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import ReviewProducts from '../ReviewProducts/ReviewProducts';

const Review = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemoveItem = (selectedItem)=> {
        setCart(cart.filter(item => item.id !== selectedItem.id));
    }
    console.log(cart);
    return (
        <div>
            <div>
                <div className='flex mx-auto max-w-5xl'>
                    <div className="review-items mx-auto">
                        <div className='mt-16'>
                            {
                                cart.map(product => <ReviewProducts
                                    product={product}
                                    key={product.id}
                                    handleRemoveItem={handleRemoveItem}
                                ></ReviewProducts>)
                            }
                        </div>
                    </div>
                    <div className="cart bg-[#FFBC97] sticky top-0  md:w-[250px] mx-auto h-full">
                        <Cart
                            cart={cart}
                        ></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;