import React, { Component, useState } from 'react';
import appConfig from '../../configuration/AppConfig'

class TeacherService {

    static getAllTeachers(data) {
        const body = JSON.stringify(data)
        const requestOptions = {
            method: 'POST',
            headers: appConfig.headers,
            body: body
        };
        return fetch(appConfig.baseUrl + 'users/filter', requestOptions)
            .then(response => response.json())
            .catch(error => {
                this.setState({ errorMessage: error });
                console.error('There was an error!', error);
            });
    }
}
export default TeacherService;