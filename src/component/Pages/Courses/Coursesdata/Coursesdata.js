import React from 'react';

const Coursesdata = ({data}) => {
    const {title, picture} = data
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl h-full">
                <figure><img className='h-48 w-full' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{ title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coursesdata;