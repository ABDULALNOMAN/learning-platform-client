import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const data = useLoaderData()
    const { title,picture, details, } = data
    return (
        <div className='w-full h-full mb-10'>
            <div className='container mx-auto w-3/4 p-4 translate-y-7 border-r-8 text-white capitalize bg-sky-800'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-4xl font-semibold mb-4'>{title}</h2>
                </div>
                <img className='col-span-1 md:w-80 w-full h-60' src={picture} alt="" />
                <p className='col-span-2 ml-3 mt-4'>{details}</p>
            </div>
        </div>
    );
};

export default Checkout;