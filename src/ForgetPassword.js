import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class ForgetPassword extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        document.title = "Igyanam - Forgot Password";
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <body class="d-flex flex-column h-100" data-spy="scroll" data-target=".header-inner" data-offset="100">
                    <main className="flex-shrink-0">
                        <section className="common-block">
                            <div className="container">
                                <div className="login-main">
                                    <h2 className="mb-3"> Forgot Password</h2>
                                    <div className="white-box-no-animate p-20">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email </label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Next</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </body>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ForgetPassword;