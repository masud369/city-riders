import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const ProtectedRout = ({}) => {
    const [login,setLogin] = useContext(UserContext)
    console.log(login.email,login.photoURL)
    const location = useLocation();
    return login.email? <Outlet />: <Navigate to="/signup" replace state={{from: location}} />;
};

export default ProtectedRout;