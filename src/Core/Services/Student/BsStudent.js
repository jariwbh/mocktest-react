import React, { Component, useState } from 'react';
import axios from '../../../axiosInst'

class StudentService {
    static UpdateStudentProfile(data) {
        const body = data
        console.log('Student Service', body);
        axios.post('/members', body)
            .then(response => {
                console.log(response);
            });
    }
}
export default StudentService;