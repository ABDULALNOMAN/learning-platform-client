import React from 'react';
import { useNavigate } from 'react-router-dom';

const Coursesdata = ({data}) => {
    const { title, picture, _id } = data
    const navigate = useNavigate()
    const handleButtonCLick = () => {
        navigate(`/coursesdetails/${_id}`)
    } 
    return (
        <div className=''>
            <div className="card card-compact shadow-xl h-full bg-cyan-900 capitalize text-white">
                <figure><img className='h-48 w-full' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{ title}</h2>
                </div>
                <div className="">
                    <button onClick={handleButtonCLick} className="btn btn-info rounded-t-none w-full hover: bg-cyan-500">click</button>
                </div>
            </div>
        </div>
    );
};

export default Coursesdata;