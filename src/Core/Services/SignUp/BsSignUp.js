import React, { Component, useState } from 'react';
import axios from '../../../axiosInst'

class SignUpService {

    static signUp(data) {
        const body = data
      
        console.log('sign serv',body);

        axios.post('/members', body)
        .then(response => {
            console.log(response);
        });
    }

}
export default SignUpService;