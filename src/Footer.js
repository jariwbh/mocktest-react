import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    constructor() {
        super();
        this.state = {
            is_visible: false
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function (e) {
            scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility() {
        if (window.pageYOffset > 400) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        const { is_visible } = this.state;

        return (
            <React.Fragment>
                <footer className="footer-main mt-auto">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <ul className="list-unstyled footer-links">
                                    <li> <Link className="nav-link" to="/">Mock Tests</Link> </li>
                                    <li> <Link className="nav-link" to="/Faqs">FAQs</Link> </li>
                                </ul>
                            </div>

                            <div className="col-md-3">
                                <ul className="list-unstyled footer-links">
                                    <li> <Link className="nav-link" to="/Teachers">Teachers</Link> </li>
                                    <li> <Link className="nav-link" to="/TermsofService">Terms</Link> </li>
                                </ul>
                            </div>

                            <div className="col-md-3">
                                <ul className="list-unstyled footer-links">
                                    <li> <Link className="nav-link" to="/Contactus">Contact Us</Link> </li>
                                    <li> <Link className="nav-link" to="/PrivacyPolicy">Policy</Link> </li>
                                </ul>
                            </div>

                            <div className="col-md-3">
                                <div className="social-icons-main">
                                    <a href="https://www.facebook.com/" className="social-link" target="_blank"><i className="customicons-facebook-icon"></i></a>
                                    <a href="https://twitter.com/login" className="social-link" target="_blank"><i className="customicons-twitter-icon"></i></a>
                                    <a href="https://myaccount.google.com/" className="social-link" target="_blank"><i className="customicons-google-plus-icon"></i></a>
                                    <a href="https://www.instagram.com/accounts/login/?hl=en" className="social-link" target="_blank"><i className="customicons-instagram-icon"></i></a>
                                    <a href="https://www.linkedin.com/login" className="social-link" target="_blank"><i className="customicons-linkedin-icon"></i></a> </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <div className="copyright-main"> Copyright © 2020 Igyanam. </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="scroll-to-top">
                    {is_visible && (
                        <a href="#" onClick={() => this.scrollToTop()} id="back-to-top" title="Scroll to Top" className="btn btn-primary backtotop active"><i className="customicons-backtotop-icon "></i></a>
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;