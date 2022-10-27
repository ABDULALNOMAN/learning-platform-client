import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../Details/Details';

const Coursesdetails = () => {
    const items = useLoaderData()
    return (
        <div>
            {
                items.map(item => <Details key={item.index} item={item}></Details>)
            }
        </div>
    );
};

export default Coursesdetails;