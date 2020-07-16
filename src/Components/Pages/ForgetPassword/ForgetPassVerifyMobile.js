import React, { Component, version } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import FormValidator from '../FromValidator';
import { forGetUserIcon } from '../Image';
import StudentService from '../../../Core/Services/Student/BsStudent'
import { getsms, destroySMS } from '../../../Core/Auth'
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
            verifyCode: '',
            validation: this.validator.valid(),
            StudentName: '',
            error: '',
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
        const validation = this.validator.validate(this.state);
        this.setState({ validation });
        const smstoken = getsms()
        if (validation.isValid) {
            const { StudentName, verifyCode } = this.state;
            const decryptedsmstoken = cryptr.decrypt(smstoken);
            if (verifyCode === decryptedsmstoken.toString()) {
                this.props.history.push(`/NewPassword/${StudentName._id}`)
                destroySMS()
            }
            else {
                this.setState({ error: '6-digit verification code is wrong!' })
            }
        }
    };

    componentDidMount() {
        document.title = "Igyanam";
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
                                                    <img className="rounded-circle img-fluid" src={forGetUserIcon} />
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
                                            <button className="btn btn-primary btn-lg btn-block" onClick={this.handleFormSubmit}>Next</button>
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