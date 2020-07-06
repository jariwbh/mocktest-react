import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import FormValidator from './FromValidator';
import BsSignUp from '../../Core/Services/SignUp/BsSignUp'

class Signup extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
   
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
      fullName: '',
      email: '',
      mobile_number: '',
      responseData:'',
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
    
    let myForm = document.getElementById('myForm');
    let formData = new FormData(myForm);
    var object = {};
    formData.forEach((value, key) => {object[key] = value});
    var json ='{"property":' +  JSON.stringify(object) +'}';

    console.log(json);

    BsSignUp.signUp(json)
    console.log('done');
    this.submitted = true;
   }

  componentDidMount() {
    document.title = "Igyanam - Sign Up";
    window.scrollTo(0, 0);
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
                <h2 className="mb-3"> Student Sign Up</h2>
                <form method="post" id="myForm" name="userSignUpForm" onChange={this.handleInputChange} >
                  <div className="white-box-no-animate p-20">
                    <div className="form-group">
                      <label >Full Name <span style={{ color: 'red' }}>*</span></label>
                      <input type="string" placeholder="Enter The Full Name" className="form-control" name='fullname' />
                      <span className="help-block">{validation.fullname.message}</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email <span style={{ color: 'red' }}>*</span></label>
                      <input type="email" placeholder="Enter The Email" className="form-control" name='email' />
                      <span className="help-block">{validation.email.message}</span>
                    </div>
                    <div className="form-group">
                      <label >Mobile <span style={{ color: 'red' }}>*</span></label>
                      <input type="mobile" placeholder="Enter The Mobile No" className="form-control" name='mobile_number' />
                      <span className="help-block">{validation.mobile_number.message}</span>
                    </div>
                    <button type="submit" onClick={this.handleFormSubmit} className="btn btn-primary">Submit</button>
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