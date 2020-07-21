import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
//import ReactHtmlParser from 'react-html-parser';
import DemoService from '../../Core/Services/DemoService/DemoServices'

class Test extends Component {

    constructor() {
        super();

        this.state = {
            details: []
        }
    }

    componentDidMount() {
        document.title = "Igyanam - FAQs";
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
                <Header />
                <main>
                    <div className="container">
                        <img src={details.branchlogo} className="img-fluid" alt="" />
                        <p>
                            {details.branchname}
                            <br />
                            {details.city}
                            <br />
                            {details.companyphone}
                            <br />
                            {details.country}
                            <br />
                            {details.postcode}
                            <br />
                            {details.supportemail}
                            <br />
                            {details.branchname}
                            <br />
                            {details.solutiontype}
                            <br />
                            {details.address}
                        </p>
                    </div>
                </main>

                <Footer />
            </React.Fragment>
        );
    }
}

export default Test;