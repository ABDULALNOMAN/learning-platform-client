import React, { useContext } from 'react';
import { Navigate,  useLocation } from 'react-router-dom';
import { callContext } from '../../Contexting/Contexting';

const Privetroute = ({ children }) => {
    const location = useLocation()
    const { user } = useContext(callContext)
    if (user && user.uid) {
        return children
    }
    return <Navigate to={'/login'} state={{from:location}}></Navigate>
};
export default Privetroute;