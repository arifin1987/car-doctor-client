import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const{user,loading}= useContext(AuthContext);
    
    if(loading){
        return <progress className="progress progress-accent w-56" value="70" max="100"></progress>
    }
    
    if(user?.email){
        return children;

    }
    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;