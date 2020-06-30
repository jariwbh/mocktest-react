import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import FormValidator from './FromValidator';

class Signup extends Component {

  constructor() {
    super();

    this.validator = new FormValidator([
      {
        field: 'fullName',
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
        field: 'mobile',
        method: 'isEmpty',
        validWhen: false,
        message: 'Enter Mobile No.'
      },
      {
        field: 'mobile',
        method: 'matches',
        args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
        validWhen: true,
        message: 'Enter valid Mobile No.'
      },
    ]);

    this.state = {
      fullName: '',
      email: '',
      mobile: '',
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
    componentDidMount() {
        document.title = "Igyanam - Sign Up";
        window.scrollTo(0, 0);
    }
    render() {
      const validation = this.submitted ?this.validator.validate(this.state) : this.state.validation    
        return (
            <React.Fragment>
                <Header />
                <main className="flex-shrink-0">
                    <section className="common-block">
                        <div className="container">
                            <div className="login-main">
                                <h2 className="mb-3"> Student Sign Up</h2>
                                {/* <form method="post"  name="userSignUpForm"  onSubmit= {this.submitsignupForm} > */}
 
                                <div className="white-box-no-animate p-20">
                                    <div className="form-group">
                                    <div className={validation.email.isInvalid && 'has-error'}>
                                        <label >Full Name <span style={{ color: 'red' }}>*</span></label>
                                        <input type="string" placeholder="Enter The Full Name" className="form-control"  onChange={this.handleInputChange} name='fullName' />
                                        {/* <div className="errorMsg">{this.state.errors.fullName}</div> */}
                                        <span className="help-block">{validation.fullName.message}</span>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <div className={validation.email.isInvalid && 'has-error'}>
                                        <label htmlFor="exampleInputEmail1">Email <span style={{ color: 'red' }}>*</span></label>
                                        <input type="email" placeholder="Enter The Email" className="form-control"  name='email' onChange={this.handleInputChange} />
                                        {/* <div className="errorMsg">{this.state.errors.email}</div> */}
                                        <span className="help-block">{validation.email.message}</span>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                    <div className={validation.mobile.isInvalid && 'has-error'}>
                                        <label >Mobile  <span style={{ color: 'red' }}>*</span></label>
                                        <input type="mobile" placeholder="Enter The Mobile No" className="form-control" name='mobile' onChange={this.handleInputChange} />
                                        {/* <div className="errorMsg">{this.state.errors.mobile}</div> */}
                                        <span className="help-block">{validation.mobile.message}</span>
                                      </div>
                                    </div>
                                    <button type="submit" onClick={this.handleFormSubmit} className="btn btn-primary">Submit</button>
                                </div>
                                {/* </form> */}
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