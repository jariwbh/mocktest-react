import React, { Component } from 'react'
import { avatarimg, quesimg, marksimg, timeimg, negativeimg } from './Image';
import Header from './Header';
import Footer from './Footer';
import BsStudent from '../../Core/Services/Student/BsStudent'
import BsResetpassword from '../../Core/Services/Password/BsResetPassword'
import swal from 'sweetalert';

export class StudentProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userDetails: '',
            submitted: false,
            loading: false,
            errorProfile: '',
            errorPassword: ''
        }
    }

    render() {
        this.state.userDetails = JSON.parse(localStorage.getItem('authuser'));
        const { errorProfile, errorPassword } = this.state;

        const UpdateStudentProfile = () => {
            try {
                let UpdateStudentProfile = document.getElementById('UpdateStudentProfile');
                let formData = new FormData(UpdateStudentProfile);
                var object = {};
                formData.forEach((value, key) => { object[key] = value });
                var json = '{"username":' + JSON.stringify(this.state.userDetails.user.membernumber) + ',"status":"active","property":' + JSON.stringify(object) + '}';
                console.log(json);
                //localStorage.setItem('authuser', JSON.stringify(this.state.userDetails.user.property.object));
                BsStudent.UpdateStudentProfile(this.state.userDetails.user._id, json)
                console.log('done');
                swal({
                    title: "Your Profile Update!",
                    icon: "success",
                });
                this.submitted = true;
            }
            catch (errorProfile) {
                console.log('error', errorProfile)
                this.setState({ loading: false, errorProfile: 'Internal Server Error!' })
            }
        }

        const ChangePassword = () => {
            try {
                let ChangePassword = document.getElementById('ChangePassword');
                let formData = new FormData(ChangePassword);
                var object = {};
                formData.forEach((value, key) => { object[key] = value });
                var json = '{"username":' + JSON.stringify(this.state.userDetails.user.membernumber) + ',"newpassword":' + JSON.stringify(object.newpassword) + '}';
                console.log(json);
                BsResetpassword.ResetPassword(json)
                console.log('done');
                swal({
                    title: "Your Password Reset!",
                    icon: "success",
                });
                ChangePassword.reset();
                this.submitted = true;
            }
            catch (errorPassword) {
                console.log('error', errorPassword)
                this.setState({ loading: false, errorPassword: 'Internal Server Error!' })
            }
        }

        return (
            <React.Fragment>
                <Header />
                <main className="flex-shrink-0">
                    <section className="common-block">
                        <div className="container">
                            <div className="row">
                                <form method="post" id="ChangePassword" className="col-lg-6 col-sm-6" name="ChangePassword" >
                                    {errorPassword && <div className="alert alert-danger">{errorPassword}</div>}
                                    <div className="col-lg-12 col-sm-12">
                                        <h2 className="mb-3">Change Password</h2>
                                        <div className="row">
                                            <div className="col-lg-12 col-sm-12 d-flex" >
                                                <div className="white-box-no-animate p-20">
                                                    <div className="form-group">
                                                        <label >Old Password</label>
                                                        <input type="password" className="form-control" name="oldpassword"></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>New Password</label>
                                                        <input type="password" className="form-control" name="newpassword"></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <label >Confirm New Password</label>
                                                        <input type="password" className="form-control" name="confpassword"></input>
                                                    </div>
                                                    <button type="button" className="btn btn-primary" onClick={ChangePassword}>Change Password</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <form method="post" id="UpdateStudentProfile" className="col-lg-6 col-sm-6" name="UpdateStudentProfile" >
                                    {errorProfile && <div className="alert alert-danger">{errorProfile}</div>}
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
                                                    <button type="button" className="btn btn-primary" onClick={UpdateStudentProfile}>Update</button>
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
