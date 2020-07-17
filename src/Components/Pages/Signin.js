import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FormValidator from './FromValidator';
import axios from '../../axiosInst'
import { authenticateUser, getRememberUser, setRememberUser } from '../../Core/Auth'

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
      rememberme: false,
      validation: this.validator.valid(),
      submitted: false,
      loading: false,
      errorMessage: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleFormSubmit = async event => {
    event.preventDefault();
    const validation = this.validator.validate(this.state);
    this.setState({ validation });

    if (validation.isValid) {
      this.setState({ loading: true })
      const { username, password, rememberme } = this.state

      setRememberUser(username, password, rememberme);

      try {
        const response = await axios.post('auth/memberlogin', { username, password })
        console.log('response', response)
        if (response.data.type && response.data.type == 'Error') {
          this.setState({ loading: false, error: response.data.message })
          return
        }
        authenticateUser(JSON.stringify(response.data))
        this.setState({ submitted: true });
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
    else {
      this.setState({ loading: false })
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleChangeCheckbox(e) {
    this.setState({ rememberme: e.target.checked });
  }

  componentDidMount() {
    document.title = "Igyanam - Sign In";
    window.scrollTo(0, 0);

    const user = getRememberUser();
    if (user) {
      this.setState({ username: user.username, password: user.password, rememberme: true });
    }
  }

  render() {
    const validation = this.state.submitted ? this.validator.validate(this.state) : this.state.validation
    const { username, password, rememberme, submitted, loading, error } = this.state;
    return (
      <React.Fragment>
        <Header />
        <main className="flex-shrink-0">
          <section className="common-block">
            <div className="container">
              <div className="login-main">
                <form method="post" name="userSignInForm" onChange={this.handleInputChange} >
                  {error && <div className="alert alert-danger">{error}</div>}
                  <h2 className="mb-3"> Student Sign In</h2>
                  <div className="white-box-no-animate p-20">
                    <div className="form-group">
                      <label htmlFor="email" className="user-select-all">Student Number <span style={{ color: 'red' }}>*</span> </label>
                      <input type="email" name='username' placeholder="Enter The Student Number" className="form-control" id="username" aria-describedby="emailHelp" value={username} onChange={this.handleChange} />
                      <span className="help-block">{validation.username.message}</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password <span style={{ color: 'red' }}>*</span></label>
                      <input type="Password" name='password' placeholder="Enter The Password" className="form-control" id="password" value={password} onChange={this.handleChange} />
                      <span className="help-block">{validation.password.message}</span>
                    </div>
                    <div className="form-group form-check">
                      <input type="checkbox" className="form-check-input" id="rememberMe" checked={rememberme} onChange={this.handleChangeCheckbox} />
                      <label className="form-check-label" htmlFor="rememberMe"> Remember me</label>
                      <Link className="float-right" to="/ForgetPassword">Forgot Password?</Link>
                    </div>
                    <button onClick={this.handleFormSubmit} className="btn btn-primary" disabled={loading} >
                      {loading && <span className="spinner-border spinner-border-sm mr-1"></span>}
                  Sign In
                  </button>
                    <div className="mt-4">
                      Need an account? <Link to="/Signup">Sign Up</Link>
                    </div>
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