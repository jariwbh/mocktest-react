import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import FormValidator from './FromValidator';



class Signin extends Component{
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
              { 
                field: 'password', 
                method: 'isEmpty', 
                validWhen: false, 
                message: 'Enter password.'
              },
        ]);

        this.state = {
          
            email: '',
            password: '',
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
           
          handleEmail(Text){
            this.setState({email:Text.target.value})
          }

          handlePassword(Text){
            this.setState({password:Text.target.value})
          }
          Signin(){
            let obj ={}
            obj.email = this.state.email
            obj.password = this.state.password 
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
      const validation = this.submitted ?this.validator.validate(this.state) : this.state.validation            
        return (
        
            <React.Fragment>
                <Header />
                <main className="flex-shrink-0">
                    <section className="common-block">
                        <div className="container">
                            <div className="login-main">
                                <h2 className="mb-3"> Sign In</h2>
                                     <div className="form-group">
                                     <div className={validation.email.isInvalid && 'has-error'}>
                                        <label htmlFor="email">Email* </label>
                                        <input type="email" value="" name='email'  placeholder="Enter The Email"  onChange={this.handleInputChange} className="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp" />
                                        <span className="help-block">{validation.email.message}</span>
                                        </div>
                                        </div> 
                                     <div className="form-group">
                                    <div className={validation.password.isInvalid && 'has-error'}>
                                        <label htmlFor="exampleInputPassword1">Password*</label>
                                        <input type="Password" value="" name='password'  placeholder="Enter The Password" onChange={this.handleInputChange} className="form-control" id="exampleInputPassword1"  />
                                        <span className="help-block">{validation.password.message}</span>
                                        </div>
                                        </div>
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                        <Link className="float-right" to="/ForgetPassword">Forgot Password?</Link>
                                    </div>
                                     <button  onClick={this.handleFormSubmit} className="btn btn-primary" >Sign In</button> 
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