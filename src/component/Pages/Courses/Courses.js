import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Coursesdata from './Coursesdata/Coursesdata';

const Courses = () => {
    const datas = useLoaderData()
    return (
        <div data-theme='dark' className='container mx-auto'>
            <div className='flex md:flex-row flex-col justify-between'>
                <div className=' md:w-1/4 p-4 bg-cyan-700 text-white capitalize'>
                    <h1 className='text-xl font-bold mb-3 md:text-left text-center '>chose your language</h1>
                    <div className='md:block grid grid-cols-3 md:text-left text-center'>
                        {
                            datas.map(data=><li key={data.index} className='list-none mb-4 md:hover:underline hover:no-underline md:border-none border md:mx-0 mx-2 md:p-0 p-2 md:rounded-none rounded-md md:bg-transparent bg-sky-800 '><Link className='md:text-lg' to={`/coursesdetails/${data._id}`}>{data.title}</Link></li>)
                        }
                    </div>
                </div>
                <div className=' md:w-3/4 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 p-3 container mx-auto'>
                    {
                        datas.map(data=><Coursesdata key={data.index} data={data}></Coursesdata>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;