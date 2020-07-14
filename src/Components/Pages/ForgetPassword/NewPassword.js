import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import FormValidator from '../FromValidator';

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
        ]);
        this.state = {
            newpassword: '',
            confpassword: '',
            validation: this.validator.valid(),
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
        if (validation.isValid) {
            this.submitted = true;
            this.props.history.push('/Signin')
        }
    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    render() {
        const validation = this.submitted ? this.validator.validate(this.state) : this.state.validation
        return (
            <React.Fragment>
                <Header />
                <main className="flex-shrink-0">
                    <section className="common-block">
                        <div className="container">
                            <div className="login-main">
                                <h2 className="mb-3">Create password</h2>
                                <form method="post" id="NewPassword" onChange={this.handleInputChange} >
                                    <div className="white-box-no-animate p-20">
                                        <div className="form-group">
                                            <label>New Password</label>
                                            <input type="password" className="form-control" name="newpassword"></input>
                                            <span className="help-block">{validation.newpassword.message}</span>
                                        </div>
                                        <div className="form-group">
                                            <label >Confirm New Password</label>
                                            <input type="password" className="form-control" name="confpassword"></input>
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

    }
}

export default NewPassword;