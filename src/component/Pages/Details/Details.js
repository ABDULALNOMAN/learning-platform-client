import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';
import ReactToPrint from 'react-to-print';

const Details = ({item}) => {
    const { title, picture, details, index } = item
    const navigate = useNavigate()
    const accessToClick = () => {
        navigate(`/courses/coursesdetails/checkout/${index}`)
    }
    const callRef = useRef()
    return (
        <div ref={callRef} className='w-full h-full mb-10'>
            <div className='container mx-auto w-3/4 p-4 translate-y-7 border-r-8 text-white capitalize bg-sky-800'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-4xl font-semibold'>{title}</h2>
                    <ReactToPrint trigger={()=>
                    <BsFillFileEarmarkPdfFill className='text-3xl'></BsFillFileEarmarkPdfFill>
                    } content={()=>callRef.current}></ReactToPrint>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 mt-5'>
                    <img className='col-span-1 w-full h-60' src={picture} alt="" />
                    <p className='col-span-2 ml-3'>{details}</p>
                </div>
                <button onClick={accessToClick} className=' text-center btn btn-info mt-3  hover:btn-success'>get premium access</button>
            </div>
        </div>
    );
};

export default Details;