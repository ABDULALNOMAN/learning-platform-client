import React from 'react';
import { useNavigate } from 'react-router-dom';

const Coursesdata = ({data}) => {
    const { title, picture, _id } = data
    const navigate = useNavigate()
    const handleButtonCLick = () => {
        navigate(`/coursesdetails/${_id}`)
    } 
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl h-full">
                <figure><img className='h-48 w-full' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{ title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button onClick={handleButtonCLick} className="btn btn-primary">click</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coursesdata;