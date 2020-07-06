import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FormValidator from './FromValidator';
import axios from '../../axiosInst'
import { authenticateUser } from '../../Core/Auth'

class Signin extends React.Component {
  constructor(props) {
    super(props);

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
      submitted: false,
      loading: false,
      errorMessage: ''
    }


    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  handleFormSubmit = event => {
    event.preventDefault();
    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.setState({ submitted: true });

    if (validation.isValid) {
      //reaches here if form validates successfully...

    }

    this.setState({ loading: true });
    const { email, password } = this.state
    console.log(this.state)

    try 
    {
      const response = axios.post('auth/memberlogin', { email, password })
      console.log(response.token)
      authenticateUser(response.token)
      this.setState({loading: false})
      this.props.history.push('/')
    } 
    catch (error) {
      console.log(error.message)
      this.setState({loading: false, error: 'User name or password is wrong!'})
    }

  }
  
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}

  componentDidMount() {
    document.title = "Igyanam - Sign In";
    window.scrollTo(0, 0);
    //     const requestOptions = {
    //       method: 'POST',
    //       headers: {
    //           'Content-Type': 'application/json'
    //          // 'authkey': '5ef44df26bf23edb7fd9a8e8'
    //       },
    //       body: JSON.stringify({ 

    //           "email": "",
    //           "password": ""

    //        })
    // };
    // fetch("http://live.edzskool.com/api/auth/memberlogin", requestOptions)
    // .then(response => response.json())
    // .then(obj => {

    //     this.setState({ obj });
    //     console.log(obj);

    // })
    // .catch(error => {
    //     this.setState({ errorMessage: error });
    //     console.error('There was an error!', error);
    // });
  }

  render() {
    const validation = this.state.submitted ? this.validator.validate(this.state) : this.state.validation
    const { email, password, submitted, loading, error } = this.state;
    return (
      <React.Fragment>
        <Header />
        <main className="flex-shrink-0">
          <section className="common-block">
            <div className="container">
              <div className="login-main">
                <form method="post" name="userSignUpForm" onChange={this.handleInputChange} >
                { error && <p>{error}</p> }
                  <h2 className="mb-3"> Sign In</h2>
                  <div className="form-group">
                    <label htmlFor="email" className="user-select-all">Email <span style={{ color: 'red' }}>*</span> </label>
                    <input type="email" name='email' placeholder="Enter The Email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={this.handleChange}/>
                    <span className="help-block">{validation.email.message}</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password <span style={{ color: 'red' }}>*</span></label>
                    <input type="Password" name='password' placeholder="Enter The Password" className="form-control" id="password" value={password} onChange={this.handleChange}/>
                    <span className="help-block">{validation.password.message}</span>
                  </div>
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    <Link className="float-right" to="/ForgetPassword">Forgot Password?</Link>
                  </div>
                  <button onClick={this.handleFormSubmit} className="btn btn-primary" disabled={loading} >Sign In</button>
                  {loading &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                  <div className="mt-4">
                    Need an account? <Link to="/Signup">Sign Up</Link>
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

export default Signin;