import React from 'react';
import { Navigate } from 'react-router-dom';

const SecureRoute = ({Children}) => {
            const isLoggedin=false;
            if(!(isLoggedin)){
                return <Navigate to="/" />
            }
            else{
                return Children;
            }
          
};

export default SecureRoute;