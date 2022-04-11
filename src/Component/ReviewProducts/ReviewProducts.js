import React from 'react';
import { BsTrashFill } from 'react-icons/bs';

const ReviewProducts = ({ product, handleRemoveItem }) => {
    console.log(product);
    const {name, img, price, shipping} = product;
    return (
        <div className='flex gap-8 items-center border p-2'>
            <div className='flex gap-4 items-center'>
                <img className='w-[100px]' src={img} alt="" />
                <div>
                    <p>{name}</p>
                    <p>Price: <span className='text-[#F55353]'>${price}</span></p>
                    <p>Shipping Charge <span className='text-[#F55353]'>${shipping}</span></p>
                </div>
            </div>
            <button onClick={()=>handleRemoveItem(product)} className='bg-[#F55353] text-white w-[30px] h-[30px] rounded-full flex justify-center items-center text-xl'><BsTrashFill></BsTrashFill></button>
        </div>
    );
};

export default ReviewProducts;