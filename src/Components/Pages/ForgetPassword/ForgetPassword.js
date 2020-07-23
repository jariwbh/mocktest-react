import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import FormValidator from '../FromValidator';
import ResetPasswordService from '../../../Core/Services/Password/BsResetPassword';
import { smstokenset } from '../../../Core/Sms'
import SmsService from '../../../Core/Services/SMS/Bssms';
import { getheader } from '../../../Core/CustomerHeader';
const Cryptr = require('cryptr');
const cryptr = new Cryptr('SecretKey');

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
      loading: false,
      tabTitle: getheader(),
      validation: this.validator.valid(),
    }
    this.submitted = false;
  }

  componentDidMount() {
    document.title = this.props.title;
    window.scrollTo(0, 0);
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
      this.setState({ loading: true })
      this.submitted = true;
      const { UserName } = this.state;
      const ForgetPasswordBody =
      {
        "search": [
          { "searchfield": "property.mobile_number", "searchvalue": UserName, "criteria": "eq", "cond": "or" },
          { "searchfield": "membernumber", "searchvalue": UserName, "criteria": "eq", "cond": "or" }
        ]
      }

      ResetPasswordService.getUserIdForgetPassword(ForgetPasswordBody)
        .then(data => {
          if (data != null) {
            this.setState({ UserDetails: data[0] });
            const { UserDetails } = this.state;
            if (UserDetails != null) {
              const rendomNumber = Math.floor(100000 + Math.random() * 900000);
              // console.log(rendomNumber)
              const encryptedRendomNumber = cryptr.encrypt(rendomNumber);
              smstokenset(encryptedRendomNumber)
              const SmsBody = {
                "tomobile": `${UserDetails.property.mobile_number}`,
                "message": `Your One Time Password (OTP) for Reset Password is ${rendomNumber}.This OTP Will Be Valid For Next 5 Minutes.`
              }
              SmsService.getSMS(SmsBody)
              this.setState({ loading: false })
              this.props.history.push(`/ForgetPassVerifyMobile/${UserDetails._id}`)
            }
            else {
              this.setState({ loading: false, error: 'UserName or PhoneNumber is wrong!' })
            }
          }
          else {
            this.setState({ loading: false, error: 'Internal Server Error!' })
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
    const { error, loading } = this.state;
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
                    <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit} value="Next" disabled={loading}>
                      {loading && <span className="spinner-border spinner-border-sm mr-1"></span>} Next
                      </button>
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