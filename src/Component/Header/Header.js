import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import CustomLink from '../Customlink/CustomLink';
import { useAuthState} from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='bg-slate-600 '>
            <div className='flex md:justify-between justify-center mx-10 p-4'>
                <div className='hidden md:block'>
                    <h2 className='text-white'>Ema-John</h2>
                </div>
                <nav className='flex justify-center items-center gap-4'>
                    <CustomLink to='/'>Home</CustomLink>
                    <CustomLink to='/shop'>Shop</CustomLink>
                    <CustomLink to='/review'>Review</CustomLink>
                    {user ?
                        <button className='text-white' onClick={handleSignOut}>Sign Out</button>
                        :
                        <CustomLink to='/login'>Login</CustomLink>
                    }
                </nav>
            </div>
        </div>
    );
};

export default Header;