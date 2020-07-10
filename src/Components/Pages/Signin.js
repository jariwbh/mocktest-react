import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FormValidator from './FromValidator';
import axios from '../../axiosInst'
import { authenticateUser, authenticateUserData } from '../../Core/Auth'

class Signin extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator([
      {
        field: 'username',
        method: 'isEmpty',
        validWhen: false,
        message: 'Enter your username.'
      },
      // {
      //   field: 'username',
      //   method: 'isEmail',
      //   validWhen: true,
      //   message: 'Enter valid username.'
      // },
      {
        field: 'password',
        method: 'isEmpty',
        validWhen: false,
        message: 'Enter password.'
      },
      // {
      //   field: 'password',
      //   method: 'isEmpty',
      //   validWhen: true,
      //   message: 'Enter valid password.'
      // },
    ]);

    this.state = {
      username: '',
      password: '',
      validation: this.validator.valid(),
      submitted: false,
      loading: false,
      errorMessage: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  handleFormSubmit = async event => {
    this.setState({ loading: true })
    event.preventDefault();
    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.setState({ submitted: true });

    if (validation.isValid) {
      //reaches here if form validates successfully...

    }

    const { username, password } = this.state

    console.log('state', this.state)
    console.log('loading', this.state.loading)

    try {
      const response = await axios.post('auth/memberlogin', { username, password })
      console.log('response', response)
      if (response.data.type && response.data.type == 'Error') {
        console.log('error', response.data.message)
        this.setState({ loading: false, error: response.data.message })
        return
      }
      authenticateUser(JSON.stringify(response.data))
      this.setState({ loading: false })
      this.props.history.push('/Dashboard')
      // const { from } = location.state || { from: { pathname: "/" } };
      // history.push(from);
    }
    catch (error) {
      console.log('error', error)
      this.setState({ loading: false, error: 'User name or password is wrong!' })
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  componentDidMount() {
    document.title = "Igyanam - Sign In";
    window.scrollTo(0, 0);
  }

  render() {
    const validation = this.state.submitted ? this.validator.validate(this.state) : this.state.validation
    const { username, password, submitted, loading, error } = this.state;
    return (
      <React.Fragment>
        <Header />
        <main className="flex-shrink-0">
          <section className="common-block">
            <div className="container">
              <div className="login-main">
                <form method="post" name="userSignUpForm" onChange={this.handleInputChange} >
                  {error && <div className="alert alert-danger">{error}</div>}
                  <h2 className="mb-3"> Student Sign In</h2>
                  <div className="form-group">
                    <label htmlFor="email" className="user-select-all">Email <span style={{ color: 'red' }}>*</span> </label>
                    <input type="email" name='username' placeholder="Enter The Email" className="form-control" id="username" aria-describedby="emailHelp" value={username} onChange={this.handleChange} />
                    <span className="help-block">{validation.username.message}</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password <span style={{ color: 'red' }}>*</span></label>
                    <input type="Password" name='password' placeholder="Enter The Password" className="form-control" id="password" value={password} onChange={this.handleChange} />
                    <span className="help-block">{validation.password.message}</span>
                  </div>
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    <Link className="float-right" to="/ForgetPassword">Forgot Password?</Link>
                  </div>
                  <button onClick={this.handleFormSubmit} className="btn btn-primary" disabled={loading} >
                    {loading && <span className="spinner-border spinner-border-sm mr-1"></span>}
                  Sign In
                  </button>
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