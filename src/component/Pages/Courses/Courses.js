import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const datas = useLoaderData()
    console.log(datas)
    return (
        <div>
            <div className='flex justify-between h-screen container mx-auto'>
                <div className='border w-1/4'>
                    {
                        datas.map(data=><li className='text-decoration-none'><Link>{data.title}</Link></li>)
                    }
                </div>
                <div className='border w-3/4'>world</div>
            </div>
        </div>
    );
};

export default Courses;