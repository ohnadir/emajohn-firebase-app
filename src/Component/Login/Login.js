import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div  className=' flex justify-center items-center mx-auto h-[93vh] '>
            <div className=' w-[450px] h-[470px] shadow-xl p-8'>
                <form >
                <h1 className='text-cyan-600 text-center'>Log In</h1>
                    <div className='mb-8'>
                        <label className='text-cyan-600' htmlFor="Email">Email</label>
                        <input  required className='w-full bg-gray-100 border border-cyan-600 rounded p-1' type="email" name="email" id="" />
                    </div>
                    <div className='mb-8'>
                        <label className='text-cyan-600' htmlFor="password">Password</label>
                        <input required className='w-full bg-gray-100 border border-cyan-600 rounded p-1' type="password" name="password" id="" />
                       
                    </div>
                    <button className='bg-cyan-600 text-white w-full rounded py-2'>Sing Up</button>
                    <p className='text-sm text-right mb-8 mt-1'>Create an Account? <span className='text-cyan-600'><Link to='/signup'>Sign up</Link></span></p>
                    <div className='my-8 flex justify-center items-center'>
                        <span className='w-[150px]'><hr /></span>
                        <span className='mx-5'>or</span>
                        <span className='w-[150px]'><hr /></span>
                    </div>
                    <button className=' border border-cyan-600 text-cyan-600 w-full rounded py-2 flex items-center justify-around'>
                    <span className='text-3xl'></span>
                        Continue with Google
                        
                    </button>
                </form>
            </div>
        </div>
    ); 
};

export default Login;