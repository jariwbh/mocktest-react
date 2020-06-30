import React, { Component, useState } from 'react';

// class getTeachers extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//              : []
//         };
//     }
//     render() {
//         const getTeacherdata = () => {
//             document.title = "Igyanam - Teachers";
//             window.scrollTo(0, 0);
//             // const [post, setpost] = useState([]);
//             const requestOptions = {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'authkey': '5ef44df26bf23edb7fd9a8e8'
//                 },
//                 body: JSON.stringify({ "search": [] })
//             };
//             fetch("http://live.edzskool.com/api/users/filter", requestOptions)
//                 .then(response => response.json())
//                 .then(data => {
//                     // for (let i = 0; i < data.length; i++) {
//                     this.setState({ teachers: data });
//                     //console.log(data);
//                     //}
//                 })
//                 .catch(error => {
//                     //this.setState({ errorMessage: error });
//                     console.error('There was an error!', error);
//                 });
//         }
//     }
//     re
// }
// export { getTeachers };