import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Signup extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        document.title = "Igyanam - Sign Up";
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
                                <h2 className="mb-3"> Sign Up</h2>
                                <div className="white-box-no-animate p-20">
                                    <div className="form-group">
                                        <label >Full Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label >Mobile</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
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

export default Signup;