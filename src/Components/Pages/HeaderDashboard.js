import React, { Component } from 'react'
import { logo } from './Image';
import { Link } from 'react-router-dom';

class HeaderDashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark p-0">
                        <div id="header" className="header-inner fixed-top">
                            <div className="container"> <Link to="/" className="navbar-brand"><img className="img-fluid" src={logo} alt="logo" /></Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item"> <Link className="nav-link" to="/">Mock Tests</Link> </li>
                                        <li className="nav-item"> <Link className="nav-link" to="/Teachers">Teachers</Link> </li>
                                        <li className="nav-item"> <Link className="nav-link" to="/Faqs">FAQs</Link> </li>
                                        <li className="nav-item"> <Link className="nav-link" to="/Contactus">Contact Us</Link> </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Dashboard</a>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="#">My Profile</a>
                                                <a className="dropdown-item" href="#">Logout</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </React.Fragment>
        )
    }
}

export default HeaderDashboard
