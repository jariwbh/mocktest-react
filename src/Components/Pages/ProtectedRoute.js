import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../../Core/Auth'

function ProtectedRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest} render={props => {
            console.log('ProtectedRoute',isAuthenticated());
            if (!isAuthenticated()) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/Signin', state: { from: props.location } }} />
            }

            // authorized so return component
            return <Component {...props} />
        }} />
    );
}

export { ProtectedRoute };