import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hook/useAuth';
import { useHistory, useLocation } from 'react-router';

const PrivetRoute = ({ children, ...rest }) =>  {
    
    const location = useLocation();
    const history = useHistory();
    const { user, isLoading } = useAuth();
 
  if(isLoading){
    if (!user.email) {
        console.log(location.pathname);
        return <CircularProgress /> }
   
  }
   
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivetRoute;