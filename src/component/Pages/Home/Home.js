import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/4911001_2555355-removebg-preview-removebg-preview.png'


const Home = () => {
    return (
        <div className='bg-sky-600'>
            <div className='flex flex-col md:flex-row justify-between items-center h-full text-white w-full container mx-auto'>
                <div className='md:ml-10 w-full md:text-left text-center md:mt-0 mt-4'> 
                    <h1 className='md:text-6xl sm:text-5xl text-4xl capitalize font-bold'>learn a <span className=' font-bold italic text-amber-500 md:text-6xl sm:text-5xl text-4xl'>language</span> of technology</h1>
                    <button><Link className='btn btn-primary w-36 mt-4 rounded-full ' to={'/courses'}>courses</Link></button>
                </div>
                <div className='text-white w-full'>
                    <img className='w-full mx-auto' src={img} alt="" /> 
                </div>
            </div>
        </div>
    );
};

export default Home;