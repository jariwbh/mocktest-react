import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import FormValidator from './FromValidator';

class Signin extends Component {
  constructor() {
    super();

    this.validator = new FormValidator([
      {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'Enter your email.'
      },
      {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'Enter valid email.'
      },
      {
        field: 'password',
        method: 'isEmpty',
        validWhen: false,
        message: 'Enter password.'
      },
      {
        field: 'password',
        method: 'isEmpty',
        validWhen: true,
        message: 'Enter valid password.'
      },
    ]);

    this.state = {
      email: '',
      password: '',
      validation: this.validator.valid(),
      errorMessage: ''
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
      //reaches here if form validates successfully...
    }
  }

  componentDidMount() {
    document.title = "Igyanam - Sign In";
    window.scrollTo(0, 0);
    // const requestOptions = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     "username": "",
    //     "password": ""
    //   })
    // };
    // fetch("http://live.edzskool.com/api/members", requestOptions)
    //   .then(response => response.json())
    //   .then(data => {

    //     this.setState({ data });
    //     console.log(data);

    //   })
    //   .catch(error => {
    //     this.setState({ errorMessage: error });
    //     console.error('There was an error!', error);
    //   });
  }
  render() {
    console.log(this.state);
    const validation = this.submitted ? this.validator.validate(this.state) : this.state.validation
    return (
      <React.Fragment>
        <Header />
        <main className="flex-shrink-0">
          <section className="common-block">
            <div className="container">
              <div className="login-main">
                <h2 className="mb-3"> Sign In</h2>
                <div className="form-group">
                  <label htmlFor="email">Email <span style={{ color: 'red' }}>*</span> </label>
                  <input type="email" name='email' placeholder="Enter The Email" onChange={this.handleInputChange} className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
                  <span className="help-block">{validation.email.message}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password <span style={{ color: 'red' }}>*</span></label>
                  <input type="Password" name='password' placeholder="Enter The Password" onChange={this.handleInputChange} className="form-control" id="exampleInputPassword" />
                  <span className="help-block">{validation.password.message}</span>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                  <Link className="float-right" to="/ForgetPassword">Forgot Password?</Link>
                </div>
                <button onClick={this.handleFormSubmit} className="btn btn-primary" >Sign In</button>
                <div className="mt-4">
                  Need an account? <Link to="/Signup">Sign Up</Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Signin;