import React, { Component } from "react";
import { logo } from './Image';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../Core/Auth'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import DemoService from '../../Core/Services/DemoService/DemoServices'

class Header extends Component {
    constructor() {
        super();
        this.state = {
            details: ''
        }
    }

    componentDidMount() {
        document.title = "Igyanam";
        window.scrollTo(0, 0);
        DemoService.getClientDetails()
            .then(data => {
                this.setState({ details: data })
                console.log(this.state.details)
            })
    }

    render() {
        const { details } = this.state;
        return (
            <React.Fragment>
                <header>
                    <Navbar className="navbar-expand-lg navbar-dark p-0" expand="lg">
                        <div id="header" className="header-inner fixed-top">
                            <div className="container">
                                <Navbar.Brand>{isAuthenticated() ?
                                    <Link to="/Dashboard" className="navbar-brand"><img className="img-fluid" width="70px" height="70px" src={details.branchlogo} alt="" /></Link>
                                    :
                                    <Link to="/" className="navbar-brand"><img className="img-fluid" width="70px" height="70px" src={details.branchlogo} alt="" /></Link>
                                }</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <div className="collapse navbar-collapse" id="navbarSupportedContent1"></div>
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="navbar-nav ml-auto">
                                        <li className="nav-item"> <Link className="nav-link" to="/">Mock Tests</Link> </li>
                                        <li className="nav-item"> <Link className="nav-link" to="/Teachers">Teachers</Link> </li>
                                        <li className="nav-item"> <Link className="nav-link" to="/Faqs">FAQs</Link> </li>
                                        <li className="nav-item"> <Link className="nav-link" to="/Contactus">Contact Us</Link> </li>
                                        {isAuthenticated() ?
                                            <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                                                <NavDropdown.Item ><Link className="dropdown-item" to="/dashboard">My Dashboard</Link></NavDropdown.Item>
                                                <NavDropdown.Item ><Link className="dropdown-item" to="/StudentProfile">My Profile</Link></NavDropdown.Item>
                                                <NavDropdown.Item ><Link className="dropdown-item" to="/Logout">Logout</Link></NavDropdown.Item>
                                            </NavDropdown>
                                            :
                                            <React.Fragment>
                                                <li className="nav-item"> <Link className="nav-link" to="/Signup">Sign Up</Link> </li>
                                                <li className="nav-item"> <Link className="nav-link" to="/Signin">Sign In</Link> </li>
                                            </React.Fragment>
                                        }
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                        </div>
                    </Navbar>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;
