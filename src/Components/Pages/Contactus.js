import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import DemoService from '../../Core/Services/DemoService/DemoServices';
import { getheader } from '../../Core/CustomerHeader';
const MapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d782.0102619821901!2d72.78420635307717!3d21.196581104939156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9cf1ece5e9fad379!2sUrjaa%20Fitness%20%3A%20GYM!5e0!3m2!1sen!2sin!4v1592819663012!5m2!1sen!2sin";

class Contactus extends Component {
    constructor() {
        super();
        this.state = {
            details: [],
        }
    }

    componentDidMount() {
        document.title = this.props.title;
        window.scrollTo(0, 0);
        DemoService.getClientDetails()
            .then(data => {
                this.setState({ details: data })
            })
    }

    render() {
        const { details } = this.state;
        return (
            <React.Fragment>
                <Header />
                <main className="flex-shrink-0">
                    <section className="common-block">
                        <div className="container">
                            <h2 className="mb-3"> Contact Us</h2>
                            <div className="white-box-no-animate p-20">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 xs-mrb30 md-mrb30">
                                        <div className="tp-head-sm mb-1">Address</div>
                                        {details.branchname}<br />
                                        {details.address},<br />
                                        {details.city} {details.postcode}
                                    </div>
                                    <div className="col-lg-4 col-md-6 xs-mrb30 md-mrb30">
                                        <div className="tp-head-sm mb-1">Phone</div>
                                        {details.companyphone}
                                    </div>
                                    <div className="col-lg-4 col-md-6 xs-mrb30">
                                        <div className="tp-head-sm mb-1">Email</div>
                                        {details.supportemail}
                                    </div>
                                </div>
                            </div>
                            <div className="white-box-no-animate p-20">
                                <iframe src={MapURL} width="100%" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Contactus;