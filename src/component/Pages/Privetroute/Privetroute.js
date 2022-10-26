import React, { useContext } from 'react';
import { Navigate,  useLocation } from 'react-router-dom';
import { callContext } from '../../Contexting/Contexting';

const Privetroute = ({ children }) => {
    const location = useLocation()
    const { user, loder } = useContext(callContext)
    if (loder) {
        return <div className='w-screen text-center translate-y-1/4 h-screen'>
            <button className="btn btn-square loading"></button>
        </div>
    }
    if (user && user.uid) {
        return children
    }
    return <Navigate to={'/login'} state={{from:location}}></Navigate>
};
export default Privetroute;