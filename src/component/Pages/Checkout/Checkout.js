import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const data = useLoaderData()
    const {title}=data
    return (
        <div data-theme="dark" className='h-screen text-center translate-y-10'>
            <h1 className='text-white text-6xl'>{title}</h1>
        </div>
    );
};

export default Checkout;