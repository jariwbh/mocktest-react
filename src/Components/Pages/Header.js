import React, { Component } from "react";
import { logo } from './Image';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../Core/Auth'

class Header extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        document.title = "Igyanam";
        window.scrollTo(0, 0);
        console.log("isAuthenticated", isAuthenticated())
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark p-0">
                        <div id="header" className="header-inner fixed-top">
                            <div className="container">
                                <Link to="/" className="navbar-brand"><img className="img-fluid" src={logo} alt="logo" /></Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="true" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item"> <Link className="nav-link" to="/">Mock Tests</Link> </li>
                                        <li className="nav-item"> <Link className="nav-link" to="/Teachers">Teachers</Link> </li>
                                        <li className="nav-item"> <Link className="nav-link" to="/Faqs">FAQs</Link> </li>
                                        <li className="nav-item"> <Link className="nav-link" to="/Contactus">Contact Us</Link> </li>
                                        <li className="nav-item"> <Link className="nav-link" to="/Signup">Sign Up</Link> </li>
                                      {isAuthenticated() ?
                                           <li className="nav-item"> <Link className="nav-link" to="/Logout">Logout</Link> </li>
                                           :
                                           <li className="nav-item"> <Link className="nav-link" to="/Signin">Sign In</Link> </li>
                                      }
                                       
                                      
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;
