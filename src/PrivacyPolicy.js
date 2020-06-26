import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class PrivacyPolice extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        document.title = "Igyanam - Privacy Policy";
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <main className="flex-shrink-0" >
                    <section className="common-block">
                        <div className="container">
                            <h2 className="mb-3"> Privacy Policy</h2>
                            <div className="white-box-no-animate p-20">
                                <p>The Personal information,
                                email that submitted while registering to the site,
                                will NOT be distributed, shared with any other third-parties.
                                We only use this data for our information, for research,
                                to improve our services and for contacting you purposes.
                                igyanam is an Open Database Site,
                                so Registering into site is not mandatory.
                                Registration into the site is purely of user's interest.
                                igyanam reserves the right to change this policy at any time.
                                Any significant changes will be notified to you by sending an
                                email to your email address that you provided while registering
                            with us or by placing a notice on our site.</p>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default PrivacyPolice;