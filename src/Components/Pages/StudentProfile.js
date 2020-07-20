import React, { Component } from 'react'
//import { avatarimg, quesimg, marksimg, timeimg, negativeimg } from './Image';
import Header from './Header';
import Footer from './Footer';
import BsStudent from '../../Core/Services/Student/BsStudent'
import BsResetpassword from '../../Core/Services/Password/BsResetPassword'
import swal from 'sweetalert';
import FormValidator from './FromValidator';
import { getUser } from '../../Core/Auth'
//import { get } from 'jquery';

export class StudentProfile extends Component {

    constructor(props) {
        super(props);
        this.validator = new FormValidator([
            {
                field: 'oldpassword',
                method: 'isEmpty',
                validWhen: false,
                message: 'Enter Old password.'
            },
            {
                field: 'newpassword',
                method: 'isEmpty',
                validWhen: false,
                message: 'Enter New password.'
            },
            {
                field: 'confpassword',
                method: 'isEmpty',
                validWhen: false,
                message: 'Enter Password confirmation.'
            },
            {
                field: 'confpassword',
                method: this.passwordMatch,   // notice that we are passing a custom function here
                validWhen: true,
                message: 'Password and password confirmation do not match.'
            }
        ]);

        this.state = {
            newpassword: '',
            oldpassword: '',
            confpassword: '',
            fullname: '',
            email: '',
            mobile_number: '',
            userDetails: '',
            loading: false,
            errorProfile: '',
            errorPassword: '',
            fields: {},
            errors: {},
            validation: this.validator.valid(),
        }
        this.submitted = false;

    }
    passwordMatch = (confirmation, state) => (state.newpassword === confirmation)

    handleInputChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleChange(e) {

        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({ fields });
    }

    // validateForm() {

    //     let fields = this.state.fields;
    //     let errors = {};
    //     let formIsValid = true;

    //     if (!fields["fullname"]) {
    //         formIsValid = false;
    //         errors["fullname"] = "Enter your FullName.";
    //     }

    //     if (!fields["email"]) {
    //         formIsValid = false;
    //         errors["email"] = "Enter your emailID.";
    //     }

    //     if (typeof fields["email"] !== "undefined") {
    //         var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //         if (!pattern.test(fields["email"])) {
    //             formIsValid = false;
    //             errors["email"] = "Enter valid email-ID.";
    //         }
    //     }

    //     if (!fields["mobile_number"]) {
    //         formIsValid = false;
    //         errors["mobile_number"] = "Enter mobile no.";
    //     }

    //     if (typeof fields["mobile_number"] !== "undefined") {
    //         if (!fields["mobile_number"].match(/^[0-9]{10}$/)) {
    //             formIsValid = false;
    //             errors["mobile_number"] = "Enter valid mobile no.";
    //         }
    //     }

    //     this.setState({
    //         errors: errors
    //     });
    //     return formIsValid;
    // }

    render() {
        this.state.userDetails = getUser() // JSON.parse(localStorage.getItem('authuser'));
        //console.log("Student Profile User:", this.state.userDetails)
        const validation = this.submitted ? this.validator.validate(this.state) : this.state.validation
        const { errorProfile, errorPassword, errors } = this.state;
        this.state.fullname = this.state.userDetails.user.property.fullname;
        this.state.email = this.state.userDetails.user.property.email;
        this.state.mobile_number = this.state.userDetails.user.property.mobile_number;

        const UpdateStudentProfile = () => {
            try {
                //if (this.validateForm()) {
                let UpdateStudentProfile = document.getElementById('UpdateStudentProfile');
                let formData = new FormData(UpdateStudentProfile);
                var object = {};
                formData.forEach((value, key) => { object[key] = value });
                var json = '{"username":' + JSON.stringify(this.state.userDetails.user.membernumber) + ',"status":"active","property":' + JSON.stringify(object) + '}';
                //console.log(json);
                this.submitted = true;
                BsStudent.UpdateStudentProfile(this.state.userDetails.user._id, json)
                //console.log('done');
                swal({
                    title: "Your Profile Update!",
                    icon: "success",
                });
                // }
            }
            catch (errorProfile) {
                //console.log('error', errorProfile)
                this.setState({ loading: false, errorProfile: 'Internal Server Error!' })
            }
        }

        const ChangePassword = () => {
            try {
                const validation = this.validator.validate(this.state);
                this.setState({ validation });
                this.submitted = true;
                if (validation.isValid) {
                    let ChangePassword = document.getElementById('ChangePassword');
                    let formData = new FormData(ChangePassword);
                    var object = {};
                    formData.forEach((value, key) => { object[key] = value });
                    var json = '{"username":' + JSON.stringify(this.state.userDetails.user.membernumber) + ',"newpassword":' + JSON.stringify(object.newpassword) + '}';
                    //console.log(json);
                    BsResetpassword.ResetPassword(json)
                    //  console.log('done');
                    swal({
                        title: "Your Password Reset!",
                        icon: "success",
                    });
                    ChangePassword.reset();
                }
            }
            catch (errorPassword) {
                //console.log('error', errorPassword)
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
                                                        <input type="password" className="form-control" name="oldpassword" onChange={this.handleInputChange}></input>
                                                        <span className="help-block">{validation.oldpassword.message}</span>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>New Password</label>
                                                        <input type="password" className="form-control" name="newpassword" onChange={this.handleInputChange}></input>
                                                        <span className="help-block">{validation.newpassword.message}</span>
                                                    </div>
                                                    <div className="form-group">
                                                        <label >Confirm New Password</label>
                                                        <input type="password" className="form-control" name="confpassword" onChange={this.handleInputChange}></input>
                                                        <span className="help-block">{validation.confpassword.message}</span>
                                                    </div>
                                                    <button type="button" className="btn btn-primary" onClick={ChangePassword}>Change Password</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <form method="post" id="UpdateStudentProfile" className="col-lg-6 col-sm-6" name="UpdateStudentProfile">
                                    {errorProfile && <div className="alert alert-danger">{errorProfile}</div>}
                                    <div className="col-lg-12 col-sm-12">
                                        <h2 className="mb-3">Edit Profile</h2>
                                        <div className="row">
                                            <div className="col-lg-12 col-sm-12 d-flex" >
                                                <div className="white-box-no-animate p-20">
                                                    <div className="form-group">
                                                        <label >Full Name</label>
                                                        <input type="string" className="form-control" name='fullname' onChange={this.handleChange.bind(this)} defaultValue={this.state.fullname}></input>
                                                        {/* <span className="help-block">{this.state.errors.fullname}</span> */}
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input type="email" name='email' className="form-control" onChange={this.handleChange.bind(this)} defaultValue={this.state.email}></input>
                                                        {/* <span className="help-block">{this.state.errors.email}</span> */}
                                                    </div>
                                                    <div className="form-group">
                                                        <label >Mobile</label>
                                                        <input type="mobile" name='mobile_number' className="form-control" onChange={this.handleChange.bind(this)} defaultValue={this.state.mobile_number}></input>
                                                        {/* <span className="help-block">{this.state.errors.mobile_number}</span> */}
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
