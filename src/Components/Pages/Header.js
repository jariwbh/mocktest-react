import React, { Component } from "react";
import { logo } from './Image';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../Core/Auth'
import Dropdown from 'react-bootstrap/Dropdown'

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
                                {isAuthenticated() ?
                                    <Link to="/Dashboard" className="navbar-brand"><img className="img-fluid" src={logo} alt="logo" /></Link>
                                    :
                                    <Link to="/" className="navbar-brand"><img className="img-fluid" src={logo} alt="logo" /></Link>
                                }
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
                                        {isAuthenticated() ?
                                            <Dropdown>
                                                <Dropdown.Toggle className="nav-link dropdown-toggle" id="dropdown-basic" >
                                                    Dashboard
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                                    <Dropdown.Item ></Dropdown.Item>
                                                    <Dropdown.Item ><Link className="dropdown-item" to="/StudentProfile">My Profile</Link></Dropdown.Item>
                                                    <Dropdown.Item ><Link className="dropdown-item" to="/Logout">Logout</Link></Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            :
                                            <React.Fragment>
                                                <li className="nav-item"> <Link className="nav-link" to="/Signup">Sign Up</Link> </li>
                                                <li className="nav-item"> <Link className="nav-link" to="/Signin">Sign In</Link> </li>
                                            </React.Fragment>
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
