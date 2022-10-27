import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='w-full h-screen'>
            <div className=' text-center translate-y-48'>
                <h1 className='text-9xl font-bold'>404</h1>
                <p className='text-3xl'>not found <Link className='text-blue-500 hover:underline' to={'/'}>click me </Link>go to home</p>
            </div>
        </div>
    );
};

export default Notfound;