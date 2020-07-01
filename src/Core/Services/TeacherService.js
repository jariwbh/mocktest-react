import React, { Component, useState } from 'react';
const baseUrl = "http://live.edzskool.com/api/"

class getTeachers {

    static getAllTeachers() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authkey': '5ef44df26bf23edb7fd9a8e8'
            },
            body: JSON.stringify({ "search": [] })
        };
        return fetch(baseUrl + 'users/filter', requestOptions)
    }

}
export default getTeachers;