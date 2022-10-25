import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Coursesdata from './Coursesdata/Coursesdata';

const Courses = () => {
    const datas = useLoaderData()
    console.log(datas)
    return (
        <div>
            <div className='flex justify-between container mx-auto'>
                <div className='border w-1/4 p-4'>
                    {
                        datas.map(data=><li key={data.index} className='list-none mb-4'><Link>{data.title}</Link></li>)
                    }
                </div>
                <div className='border w-3/4 grid grid-cols-3 gap-3'>
                    {
                        datas.map(data=><Coursesdata key={data.index} data={data}></Coursesdata>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;