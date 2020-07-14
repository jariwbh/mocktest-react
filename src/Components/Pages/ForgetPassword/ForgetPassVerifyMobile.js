import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import FormValidator from '../FromValidator';
import { forGetUserIcon } from '../Image';
import StudentService from '../../../Core/Services/Student/BsStudent'

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
            StudentId: '',
            StudentName: ''
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
        this.submitted = true;
        if (validation.isValid) {
            this.props.history.push('/NewPassword')
        }
    };

    componentDidMount() {
        document.title = "Igyanam";
        window.scrollTo(0, 0);
        const { StudentId } = this.props.match.params.id
        console.log('StudentId')
        console.log(StudentId)
        StudentService.getByIdStudent(StudentId)
            .then(data => {
                this.setState({ StudentName: data });
                console.log(this.state.StudentName)
            })
    }

    render() {
        const validation = this.submitted ? this.validator.validate(this.state) : this.state.validation
        const { StudentName } = this.state;
        return (
            <React.Fragment>
                <Header />
                <main className="flex-shrink-0">
                    <section className="common-block">
                        <div className="container">
                            <div className="login-main">
                                <h2 className="mb-3"> Forgot Password</h2>
                                <form method="post" name="ForgetVerifyMobile" onChange={this.handleInputChange} >
                                    <div className="white-box-no-animate p-20">
                                        <div className="form-group">
                                            <div className="mr-4 text-center">
                                                <img className="rounded-circle img-fluid" src={forGetUserIcon} />
                                            </div>
                                            <br />
                                            <h4 className="card-title text-center">{'Jay Parmar'}</h4>
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
    }
}

export default ForgetPassVerifyMobile;