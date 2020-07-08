import React from 'react';
import { Redirect } from 'react-router-dom';
import { destroySession } from '../../Core/Auth'

const Logout = () => {
    destroySession()
    return <Redirect to="/SignIn" />
}

export default Logout;