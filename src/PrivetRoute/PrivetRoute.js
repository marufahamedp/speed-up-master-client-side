import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hook/useAuth';


const PrivetRoute = ({ children, ...rest }) =>  {
    const { user, isLoading } = useAuth();
    let isUnmount = false;
  if(!isUnmount){
    if (isLoading) { return <CircularProgress /> }
    isUnmount = true;
  }
    console.log(isLoading);
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