import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class TermOfService extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        document.title = "Igyanam - Terms of Service";
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <main className="flex-shrink-0">
                    <section className="common-block">
                        <div className="container">
                            <h2 className="mb-3"> Terms of Service</h2>
                            <div className="white-box-no-animate p-20">

                                <div className="tp-head-sm mb-1">1. ACCEPTANCE OF TERMS</div>
                                <p>igyanam provides its service to you, subject to the following Terms of Service. These policies may be updated by us from time to time without notice of you. You can review our updated terms and conditions always in this page. Usage of this site is subject to these Terms, Conditions and Policies, therefore please read the following information carefully.</p>

                                <div className="tp-head-sm mb-1">2. WEBSITE DISCLAIMER</div>
                                <p>All the facts or knowledge you grasp from this website is not a ancillary for advice, programs, or treatment that you would normally receive from a licensed professional such as a lawyer, doctor, psychiatrist, or financial advisor. This website provides no guarantees, implied warranties, or assurances of any kind, and will not be responsible for any interpretation made or use by the recipient of the information.By exploiting and accessing igyanam and obtaining updates and information you agree to release igyanam any and all liability with regard to the content of the website.This website and it’s content is to be considered a curio on your behalf. Advice or content may or may not influence your decisions and/or behaviour.</p>

                                <p>No representations, warranties or guarantees whatsoever are made by igyanam as to the (a) accuracy, adequacy, reliability, completeness, suitability or applicability of the information to a particular situation; (b) that the service will be uninterrupted, timely, secure, or error-free; (c) the quality of any products, services, content, information, or other material purchased or obtained from the website will meet your expectations or requirements; or (d) any errors in the website will be corrected.</p>

                                <div className="tp-head-sm mb-1">3. USAGE OF THIS SITE</div>
                                <p>igyanam is an Open Database website and operates with a motto to help students for various competitive examinations in India. The data in igyanam is either prepared by team igyanam or collected and submitted by various Teachers around the world. igyanam does not guarantee the re-occurrences or repetition of contents. The purpose of this site is to provide information to the students. Though every care has been taken in compiling the information forwarded by certain enthusiastic users, igyanam doesn't guarantee the accuracy of the content or information that provided in this site and won't take responsible for any incorrect questions, answers, blogs, content and any form of errors. igyanam will not be responsible in any way for any damages/consequences that might occur due to inclusion of some incorrect content or information in this site. You can use this information solely at your own risk. Users submitting content to this site, asserts that he or she owns that data or otherwise has the right to redistribute it freely. igyanam assumes no liability for disputes regarding ownership, copyright, or trademarks of the data submitted to this site. igyanam reserves the right to refuse to post any submission, to alter submissions, and to remove a submission from the site. igyanam may exercise this right without any prior notice to the individual submitting the content. All trademarks and company names published in this site are subjected to their respected owners and companies.</p>

                                <div className="tp-head-sm mb-1">4. REGISTRATION INTO SITE</div>
                                <p>This is an OPTIONAL service provided by igyanam. Visitors can register into the site on their own interest, it is not mandatory. This registration into the site permits the user to maintain and modify of the data submitted to the site. The personal information that collected during this registration process will not, be distributed and shared with any other third-parties. While submitting registration form, you also agreed to provide and maintain true, accurate, current and complete information about yourself as prompted by the Service's registration form. igyanam never verifies the accuracy of Personal Information that is submitted to the site, it is solely responsibility of the user. igyanam reserves the right to suspend or permanently delete any user, If the data or information provided by the user is inaccurate, not related or incomplete or if the user violated our terms and conditions in any manner.</p>

                                <div className="tp-head-sm mb-1">5. ANTI-SPAM POLICY</div>
                                <p>igyanam is against in sending spam, unsolicited emails. You should not use our service and you are not authorized to use our referral or email services, for your personal or commercial purposes. By usage of this service you agreed that to our policies. Violating these policies in any manner subject to violation of respected laws and necessary action will be initiated against the defaulters.</p>

                                <div className="tp-head-sm mb-1">6. COPYRIGHT POLICY</div>
                                <p>All pages, data and graphics presented on this website are the property of igyanam. The pages may not be redistributed or reproduced in any way, shape, or form without the written permission of igyanam. igyanam respects the copyrights, trademarks and intellectual property of others and also we expect this from other users. In this site, if you found any information that is owned by you or any content that violates your intellectual property rights, please contact to us with all necessary documents/information that authenticate your authority on your property.</p>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default TermOfService;