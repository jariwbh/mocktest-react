import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import FormValidator from '../FromValidator';
import StudentService from '../../../Core/Services/Student/BsStudent';
import swal from 'sweetalert';
import BsResetpassword from '../../../Core/Services/Password/BsResetPassword'

class NewPassword extends Component {
    constructor() {
        super();
        this.validator = new FormValidator([
            {
                field: 'newpassword',
                method: 'isEmpty',
                validWhen: false,
                message: 'Enter New Password'
            },
            {
                field: 'confpassword',
                method: 'isEmpty',
                validWhen: false,
                message: 'Enter Confirm password'
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
            confpassword: '',
            validation: this.validator.valid(),
            StudentName: '',
            error: ''
        }
        this.submitted = false;
    }

    passwordMatch = (confirmation, state) => (state.newpassword === confirmation)

    componentDidMount() {
        document.title = "Igyanam";
        window.scrollTo(0, 0);
        const StudentId = this.props.match.params.id;
        if (StudentId != null) {
            StudentService.getByIdStudent(StudentId)
                .then(data => {
                    this.setState({ StudentName: data });
                    console.log(this.state.StudentName)
                })
        }
    }

    handleInputChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleFormSubmit = event => {
        try {
            event.preventDefault();
            const validation = this.validator.validate(this.state);
            this.setState({ validation });
            this.submitted = true;
            if (validation.isValid) {
                let ChangePassword = document.getElementById('NewPassword');
                let formData = new FormData(ChangePassword);
                var object = {};
                formData.forEach((value, key) => { object[key] = value });
                var json = '{"username":' + JSON.stringify(this.state.StudentName.membernumber) + ',"newpassword":' + JSON.stringify(object.newpassword) + '}';
                BsResetpassword.ResetPassword(json)
                this.props.history.push('/Signin')
                swal({
                    title: "Your Password Reset!",
                    icon: "success",
                });
                ChangePassword.reset();
            }
        }
        catch (error) {
            this.setState({ loading: false, error: 'Internal Server Error!' })
        }
    };

    render() {
        const validation = this.submitted ? this.validator.validate(this.state) : this.state.validation
        const { StudentName, error } = this.state;
        if (StudentName) {
            return (
                <React.Fragment>
                    <Header />
                    <main className="flex-shrink-0">
                        <section className="common-block">
                            <div className="container">
                                <div className="login-main">
                                    <h2 className="mb-3">Create password</h2>
                                    <form method="post" id="NewPassword" name="NewPassword">
                                        {error && <div className="alert alert-danger">{error}</div>}
                                        <div className="white-box-no-animate p-20">
                                            <div className="form-group">
                                                <h5 className="card-title">{StudentName.property.fullname}</h5>
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
                                            <button type="button" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </main>
                    <Footer />
                </React.Fragment>
            );
        } else {
            return <span></span>
        }
    }
}

export default NewPassword;