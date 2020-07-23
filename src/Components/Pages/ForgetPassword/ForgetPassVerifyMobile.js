import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import FormValidator from '../FromValidator';
import { forGetUserIcon } from '../Image';
import StudentService from '../../../Core/Services/Student/BsStudent';
import { getsms, destroySMS } from '../../../Core/Sms';
import $ from 'jquery';
import { getheader } from '../../../Core/CustomerHeader';
const Cryptr = require('cryptr');
const cryptr = new Cryptr('SecretKey');

class ForgetPassVerifyMobile extends Component {
    constructor() {
        super();
        this.validator = new FormValidator([
            {
                field: 'verifyCode',
                method: 'isEmpty',
                validWhen: false,
                message: 'Enter 6-digit verification code'
            },
        ]);

        this.state = {
            isButtonDisabled: false,
            verifyCode: '',
            validation: this.validator.valid(),
            StudentName: '',
            error: '',
            tabTitle: getheader()
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
        this.setState({ isButtonDisabled: true });
        event.preventDefault();
        const validation = this.validator.validate(this.state);
        this.setState({ validation });
        const smstoken = getsms()
        if (validation.isValid) {
            const { StudentName, verifyCode } = this.state;
            if (smstoken != null) {
                console.log('true')
                const decryptedsmstoken = cryptr.decrypt(smstoken);
                if (verifyCode === decryptedsmstoken.toString()) {
                    this.props.history.push(`/NewPassword/${StudentName._id}`)
                    destroySMS()
                }
                else {
                    console.log('false')
                    this.setState({ isButtonDisabled: false, error: '6-digit verification code is wrong!' })
                }
            }
            else {
                this.props.history.push('/ForgetPassword')
            }
        }
        else {
            console.log('false')
            this.setState({ isButtonDisabled: false, error: 'Internal Server Error!' })
        }
    };

    componentDidMount() {
        document.title = this.props.title;
        window.scrollTo(0, 0);
        const StudentId = this.props.match.params.id;
        if (StudentId != null) {
            StudentService.getByIdStudent(StudentId)
                .then(data => {
                    this.setState({ StudentName: data });
                })
        }
    }

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
                                    <h2 className="mb-3"> Forgot Password</h2>
                                    <form method="post" name="ForgetVerifyMobile" onChange={this.handleInputChange} >
                                        {error && <div className="alert alert-danger">{error}</div>}
                                        <div className="white-box-no-animate p-20">
                                            <div className="form-group">
                                                <div className="mr-4 text-center">
                                                    <img className="rounded-circle img-fluid" src={forGetUserIcon} alt="UserIcon" />
                                                </div>
                                                <br />
                                                <h4 className="card-title text-center">{StudentName.property.fullname}</h4>
                                                <label htmlFor="exampleInputNumber" className="text-center">
                                                    A text message with a 6-digit verification code was just sent to Registered Mobile number.
                                                <span style={{ color: 'red' }}>*</span>
                                                </label>
                                                <input type="text" placeholder="Enter the code" name='verifyCode' className="form-control" id="verifyCode" />
                                                <span className="help-block">{validation.verifyCode.message}</span>
                                            </div>
                                            <button id="btn" className="btn btn-primary btn-lg btn-block" onClick={this.handleFormSubmit} disabled={this.state.isButtonDisabled}> Next </button>
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

export default ForgetPassVerifyMobile;