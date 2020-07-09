import React, { Component, useState } from 'react';
import axios from '../../../axiosInst'

class StudentService {
    static UpdateStudentProfile(id, data) {
        const body = data
        console.log('Student Service' + id, body);
        axios.put('/members/' + id, body)
            .then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            });
    }
}
export default StudentService;