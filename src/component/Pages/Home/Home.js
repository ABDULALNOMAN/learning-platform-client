import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/4911001_2555355-removebg-preview-removebg-preview.png'


const Home = () => {
    return (
        <div className='bg-sky-500'>
            <div className='flex justify-between items-center h-screen text-white w-full'>
                <div className='ml-10 w-1/2'> 
                    <h1 className='text-6xl capitalize font-semibold'>Gain <span className=' font-bold italic text-amber-500 text-6xl'>knowledge</span> about information technology</h1>
                    <button><Link className='btn btn-primary w-36 mt-3' to={'/courses'}>courses</Link></button>
                </div>
                <div className='text-white w-1/2'>
                    <img className='w-full mx-auto' src={img} alt="" /> 
                </div>
            </div>
        </div>
    );
};

export default Home;