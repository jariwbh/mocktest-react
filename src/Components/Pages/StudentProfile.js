import React, { Component } from 'react'
import { avatarimg, quesimg, marksimg, timeimg, negativeimg } from './Image';
import Header from './Header';
import Footer from './Footer';
import BsStudent from '../../Core/Services/Student/BsStudent'
import swal from 'sweetalert';

export class StudentProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userDetails: '',
            fullname: '',
            email: '',
            mobile_number: '',
            responseData: '',

        }
        this.submitted = false;
    }


    handleInputChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        let UpdateStudentProfile = document.getElementById('UpdateStudentProfile');
        let formData = new FormData(UpdateStudentProfile);
        var object = {};
        formData.forEach((value, key) => { object[key] = value });
        var json = '{"property":' + JSON.stringify(object) + '}';
        console.log('json');
        console.log(json);
        const { fullname, email, mobile_number } = this.state;
        console.log({ fullname, email, mobile_number });
        //BsStudent.UpdateStudentProfile(json)
        //console.log('done');
        // swal({
        //     title: "Your Profile Update!",
        //     icon: "success",
        // });
        //this.props.history.push('/Teachers')
        this.submitted = true;
    }

    render() {
        this.state.userDetails = JSON.parse(localStorage.getItem('authuser'));
        console.log(this.state.userDetails);
        return (
            <React.Fragment>
                <Header />
                <main className="flex-shrink-0">
                    <section className="common-block">
                        <div className="container">
                            <div className="row">
                                <form method="post" id="ChangePassword" className="col-lg-6 col-sm-6" name="ChangePassword" >
                                    <div className="col-lg-12 col-sm-12">
                                        <h2 className="mb-3">Change Password</h2>
                                        <div className="row">
                                            <div className="col-lg-12 col-sm-12 d-flex" >
                                                <div className="white-box-no-animate p-20">
                                                    <div className="form-group">
                                                        <label >Old Password</label>
                                                        <input type="password" className="form-control"></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>New Password</label>
                                                        <input type="password" className="form-control" ></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <label >Confirm New Password</label>
                                                        <input type="password" className="form-control"></input>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Change Password</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <form method="post" id="UpdateStudentProfile" className="col-lg-6 col-sm-6" name="UpdateStudentProfile" onChange={this.handleInputChange} >
                                    <div className="col-lg-12 col-sm-12">
                                        <h2 className="mb-3">Edit Profile</h2>
                                        <div className="row">
                                            <div className="col-lg-12 col-sm-12 d-flex" >
                                                <div className="white-box-no-animate p-20">
                                                    <div className="form-group">
                                                        <label >Full Name</label>
                                                        <input type="text" className="form-control" name='fullname' defaultValue={this.state.userDetails.user.property.fullname}  ></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input type="email" name='email' className="form-control" defaultValue={this.state.userDetails.user.property.email}></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <label >Mobile</label>
                                                        <input type="text" name='mobile_number' className="form-control" defaultValue={this.state.userDetails.user.property.mobile_number}></input>
                                                    </div>
                                                    <button type="" className="btn btn-primary" onClick={this.handleFormSubmit}>Update</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}

export default StudentProfile;
