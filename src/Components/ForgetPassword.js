import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import FormValidator from './FromValidator';

class ForgetPassword extends Component {
    constructor() {
        super();
        this.validator = new FormValidator([
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
          ]);
          this.state = {
          
            email: '',
        
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
            this.submitted = true;
        
            if (validation.isValid) {
              //reaches here if form validates successfully...
            }
          }
        // handleChange(e) {
        //   let fields = this.state.fields;
        //   fields[e.target.name] = e.target.value;
        //   this.setState({
        //     fields
        //   });
    
        // }
    
        // submitsignupForm(e) {
        //   e.preventDefault();
        //   if (this.validateForm()) {
        //       let fields = {};
        //      fields["email"] = "";
             
            
        //       this.setState({fields:fields});
        //       alert("Form has been submitted");
        //   }
    
        // }
    
        // validateForm() {
    
        //   let fields = this.state.fields;
        //   let errors = {};
        //   let formIsValid = true;
    
        //   if (!fields["email"]) {
        //     formIsValid = false;
        //     errors["email"] = "*Please enter your email.";
        //   }
    
        //   if (typeof fields["email"] !== "undefined") {
        //     //regular expression for email validation
        //     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        //     if (!pattern.test(fields["email"])) {
        //       formIsValid = false;
        //       errors["email"] = "*Please enter valid email.";
        //     }
        //   }
  
      
=======
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitsignupForm = this.submitsignupForm.bind(this);
>>>>>>> bf9add7755fc03edbd54ffa9c53fdd668009c8bb

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submitsignupForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["email"] = "";
      this.setState({ fields: fields });
      alert("Form has been submitted");
    }

<<<<<<< HEAD
    render() {
      const validation = this.submitted ?this.validator.validate(this.state) : this.state.validation   
        return (
            <React.Fragment>
                <Header />
              
                    <main className="flex-shrink-0">
                        <section className="common-block">
                            <div className="container">
                                <div className="login-main">
                                    <h2 className="mb-3"> Forgot Password</h2>
                                    <form method="post"  name="ForgotPassword"  onChange={this.handleInputChange} >
                                    <div className="white-box-no-animate p-20">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail">Email <span style={{ color: 'red' }}>*</span> </label>
                                            <input type="email"  placeholder="Enter The Email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            <span className="help-block">{validation.email.message}</span>
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
=======
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email.";
>>>>>>> bf9add7755fc03edbd54ffa9c53fdd668009c8bb
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email.";
      }
    }

  }

  componentDidMount() {
    document.title = "Igyanam - Forgot Password";
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Header />

        <main className="flex-shrink-0">
          <section className="common-block">
            <div className="container">
              <div className="login-main">
                <h2 className="mb-3"> Forgot Password</h2>
                <form method="post" name="ForgotPassword" onSubmit={this.submitsignupForm} >
                  <div className="white-box-no-animate p-20">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email </label>
                      <input type="email" placeholder="Enter The Email" name='email' value={this.state.fields.email} onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <button type="submit" className="btn btn-primary" value="Next">Next</button>
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