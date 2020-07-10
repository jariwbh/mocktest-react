import React, { Component, useState } from 'react';
import axios from '../../../axiosInst'

class PasswordService {
    static ResetPassword(data) {
        const body = data
        axios.post('/auth/member/resetpassword', body)
            .then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            });
    }
}
export default PasswordService;