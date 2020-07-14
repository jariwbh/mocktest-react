import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import FormValidator from '../FromValidator';
import ResetPasswordService from '../../../Core/Services/Password/BsResetPassword'

class ForgetPassword extends Component {
  constructor() {
    super();
    this.validator = new FormValidator([
      {
        field: 'UserName',
        method: 'isEmpty',
        validWhen: false,
        message: 'Enter your UserName .'
      }
    ]);
    this.state = {
      UserName: '',
      UserDetails: null,
      error: '',
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
      const { UserName, error } = this.state;
      console.log(UserName)
      const ForgetPasswordBody = {
        "search": [
          {
            "searchfield": "membernumber",
            "searchvalue": UserName,
            "criteria": "eq",
            "datatype": "text"
          }
        ]
      }
      ResetPasswordService.getUserIdForgetPassword(ForgetPasswordBody)
        .then(data => {
          if (data != null) {
            this.setState({ UserDetails: data[0] });
            const { UserDetails } = this.state;
            if (UserDetails != null) {
              this.props.history.push(`/ForgetPassVerifyMobile/${UserDetails._id}`)
            }
            else {
              this.setState({ error: 'UserName or PhoneNumber is wrong!' })
            }
          }
          else {
            this.setState({ error: 'Internal Server Error!' })
          }
        })

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
    const validation = this.submitted ? this.validator.validate(this.state) : this.state.validation;
    const { error } = this.state;
    return (
      <React.Fragment>
        <Header />
        <main className="flex-shrink-0">
          <section className="common-block">
            <div className="container">
              <div className="login-main">
                <h2 className="mb-3"> Forgot Password</h2>
                <form method="post" name="ForgotPassword" onChange={this.handleInputChange} >
                  {error && <div className="alert alert-danger">{error}</div>}
                  <div className="white-box-no-animate p-20">
                    <div className="form-group">
                      <label htmlFor="exampleInputUserName">Username or phone<span style={{ color: 'red' }}>*</span> </label>
                      <input type="text" placeholder="Username or phone" name='UserName' className="form-control" id="UserName" />
                      <span className="help-block">{validation.UserName.message}</span>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit} value="Next">Next</button>
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

export default ForgetPassword;