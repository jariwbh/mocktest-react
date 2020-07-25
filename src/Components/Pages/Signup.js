import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import FormValidator from './FromValidator';
import BsSignUp from '../../Core/Services/SignUp/BsSignUp'
import swal from 'sweetalert';

class Signup extends Component {

  constructor() {
    super();

    this.validator = new FormValidator([
      {
        field: 'fullname',
        method: 'isEmpty',
        validWhen: false,
        message: 'Enter full name.'
      },
      {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'Enter your email .'
      },
      {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'Enter valid email.'
      },
      {
        field: 'mobile_number',
        method: 'isEmpty',
        validWhen: false,
        message: 'Enter Mobile No.'
      },
      {
        field: 'mobile_number',
        method: 'matches',
        args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
        validWhen: true,
        message: 'Enter valid Mobile No.'
      },
    ]);

    this.state = {
      fullname: '',
      email: '',
      mobile: '',
      mobile_number: '',
      responseData: '',
      loading: false,
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
      this.setState({ submitted: true });
      let myForm = document.getElementById('myForm');
      let formData = new FormData(myForm);
      var object = {};
      formData.forEach((value, key) => { object[key] = value });
      var json = '{"property":' + JSON.stringify(object) + '}';
      console.log(json);
      BsSignUp.signUp(json)
      console.log('done');
      this.setState({ loading: false })
      swal({
        title: "Sign Up Success!",
        icon: "success",
        text: "Please check your email and activate your account"
      });
      this.props.history.push('/signin')
    }
  }

  componentDidMount() {
    document.title = this.props.title;
    window.scrollTo(0, 0);
  }

  render() {
    const validation = this.submitted ? this.validator.validate(this.state) : this.state.validation
    const { loading, error } = this.state;
    return (
      <React.Fragment>
        <Header />
        <main className="flex-shrink-0">
          <section className="common-block">
            <div className="container">
              <div className="login-main">
                <h2 className="mb-3"> Student Sign Up</h2>
                <form method="post" id="myForm" name="userSignUpForm" onChange={this.handleInputChange} >
                  {error && <div className="alert alert-danger">{error}</div>}
                  <div className="white-box-no-animate p-20">
                    <div className="form-group">
                      <label >Full Name <span style={{ color: 'red' }}>*</span></label>
                      <input type="string" placeholder="Enter The Full Name" className="form-control" name='fullname' onChange={this.handleInputChange} />
                      <span className="help-block">{validation.fullname.message}</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email <span style={{ color: 'red' }}>*</span></label>
                      <input type="email" placeholder="Enter The Email" className="form-control" aria-describedby="emailHelp" name='email' onChange={this.handleInputChange} />
                      <span className="help-block">{validation.email.message}</span>
                    </div>
                    <div className="form-group">
                      <label >Mobile <span style={{ color: 'red' }}>*</span></label>
                      <input type="mobile" placeholder="Enter The Mobile No" className="form-control" name='mobile_number' onChange={this.handleInputChange} />
                      <span className="help-block">{validation.mobile_number.message}</span>
                    </div>
                    <button type="submit" onClick={this.handleFormSubmit} className="btn btn-primary" disabled={loading}>
                      {loading && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Submit
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

export default Signup;