import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Courses;