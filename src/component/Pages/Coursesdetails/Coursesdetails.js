import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';

const Coursesdetails = () => {
    const item = useLoaderData()
    const { title, picture, details } = item
    console.log(item)
    return (
        <div className='container mx-auto w-3/4 p-4 translate-y-7 border-r-8 text-white capitalize bg-sky-800'>
            <div className='flex justify-between items-center'>
                <h2 className='text-4xl font-semibold'>{title}</h2>
                <Link><BsFillFileEarmarkPdfFill className='text-3xl'></BsFillFileEarmarkPdfFill></Link>
            </div>
            <div className='grid grid-cols-3 mt-5'>
                <img className='col-span-1 h-full' src={picture} alt="" />
                <p className='col-span-2 ml-3'>{details}</p>
            </div>
        </div>
    );
};

export default Coursesdetails;