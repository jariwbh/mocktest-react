import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

class Signin extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        document.title = "Igyanam - Sign In";
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
                                <h2 className="mb-3"> Sign In</h2>
                                <div className="white-box-no-animate p-20">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email </label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="Password" className="form-control" id="exampleInputPassword1" /></div>
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                        <Link className="float-right" to="/ForgetPassword">Forgot Password?</Link>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Sign In</button>
                                    <div className="mt-4">
                                        Need an account? <Link to="/Signup">Sign Up</Link>
                                    </div>
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