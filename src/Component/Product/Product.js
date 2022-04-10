import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Product = ({ product, handleAddToCart }) => {
    const { img, name, price, rating, seller, stock } = product;
    let newName;
    if (name.length > 26) {
        newName = name.slice(0, 20) + "...";
    }
    else {
        return newName;
    }
    return (
        <div>
            <div className='w-[230px] shadow-xl '>
                <img className='w-[260px] p-2' src={img} alt="" />
                <div className='p-2'>
                    <p className='font-bold'>{newName}</p>
                    <p>Price:- ${price}</p>
                    <p>Manufacturer:- {seller}</p>
                    <p>Stock:- {stock}</p>
                    <p className=''>
                        <span>Ratings</span>
                        <span className='text-sm mx-2'>
                            <Rating
                                initialRating={rating}
                                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                                readonly
                            ></Rating>
                        </span>
                    </p>
                </div>
                <button onClick={()=> handleAddToCart(product)} className='bg-[#F55353] text-white w-full flex justify-center items-center p-1'>
                    <span className='mr-2'>Add to Cart</span> <AiOutlineShoppingCart></AiOutlineShoppingCart>
                </button>
            </div>
        </div>
    );
};

export default Product;