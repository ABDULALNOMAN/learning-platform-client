import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Coursesdetails = () => {
    const item = useLoaderData()
    const { title, picture, details } = item
    console.log(item)
    return (
        <div className='container mx-auto grid grid-cols-3 translate-y-16 text-white capitalize'>
            <img className='col-span-1' src={picture} alt="" />
            <div className='col-span-2 ml-3'>
                <div>
                    <h2 className='text-4xl font-semibold'>{title}</h2>
                </div>
                <p className='mt-3'>{details}</p>
            </div>
        </div>
    );
};

export default Coursesdetails;