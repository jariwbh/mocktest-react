import React, { Component } from 'react';
import HeaderDashboard from './HeaderDashboard';
import Footer from './Footer';

class Dashboard extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        document.title = "Igyanam";
    }
    render() {
        return (
            <React.Fragment>
                <HeaderDashboard />
                <main className="flex-shrink-0">
                    <section className="common-block">
                        <div className="container">
                            <h2 className="mb-3"> Attempted Mock Test</h2>
                            <div className="row">
                                <div className="col-lg-4 col-sm-6 d-flex" >
                                    <div className="white-box animate slideIn" >
                                        <div className="media">
                                            <div className="dash-subject-icon mr-3">
                                                <img src="images/maths-icon.svg" alt="" />
                                            </div>
                                            <div className="media-body">
                                                <div className="mt-price mt-0 mb-0">Maths Foundation Test</div>
                                                <div className="mb-4"><span className="dash-price">Free</span> <span className="teacher-date-text mb-0 ml-3">10 June 2020 05:12 PM</span></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 mb-4">
                                                <div className="progress mx-auto" data-value='72'>
                                                    <span className="progress-left">
                                                        <span className="progress-bar border-success"></span>
                                                    </span>
                                                    <span className="progress-right">
                                                        <span className="progress-bar border-success"></span>
                                                    </span>
                                                    <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                                        <div className="h4 font-weight-bold">72%</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4 d-flex align-items-center">
                                                <div>
                                                    <h3>40 / 50</h3>
                                                    <div className="dash-avg">20.5 avg</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <a href="#" className="btn btn-primary btn-block">Marksheet</a>
                                            </div>
                                            <div className="col-6">
                                                <a href="#" className="btn btn-primary btn-block">Retake</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 d-flex" >
                                    <div className="white-box animate slideIn" >
                                        <div className="media">
                                            <div className="dash-subject-icon mr-3">
                                                <img src="images/maths-icon.svg" alt="" />
                                            </div>
                                            <div className="media-body">
                                                <div className="mt-price mt-0 mb-0">Maths Foundation Test</div>
                                                <div className="mb-4"><span className="dash-price">Free</span> <span className="teacher-date-text mb-0 ml-3">10 June 2020 05:12 PM</span></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 mb-4">
                                                <div className="progress mx-auto" data-value='72'>
                                                    <span className="progress-left">
                                                        <span className="progress-bar border-success"></span>
                                                    </span>
                                                    <span className="progress-right">
                                                        <span className="progress-bar border-success"></span>
                                                    </span>
                                                    <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                                        <div className="h4 font-weight-bold">72%</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4 d-flex align-items-center">
                                                <div>
                                                    <h3>40 / 50</h3>
                                                    <div className="dash-avg">20.5 avg</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <a href="#" className="btn btn-primary btn-block">Marksheet</a>
                                            </div>
                                            <div className="col-6">
                                                <a href="#" className="btn btn-primary btn-block">Retake</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 d-flex" >
                                    <div className="white-box animate slideIn" >
                                        <div className="media">
                                            <div className="dash-subject-icon mr-3">
                                                <img src="images/maths-icon.svg" alt="" />
                                            </div>
                                            <div className="media-body">
                                                <div className="mt-price mt-0 mb-0">Maths Foundation Test</div>
                                                <div className="mb-4"><span className="dash-price">Free</span> <span className="teacher-date-text mb-0 ml-3">10 June 2020 05:12 PM</span></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 mb-4">
                                                <div className="progress mx-auto" data-value='72'>
                                                    <span className="progress-left">
                                                        <span className="progress-bar border-success"></span>
                                                    </span>
                                                    <span className="progress-right">
                                                        <span className="progress-bar border-success"></span>
                                                    </span>
                                                    <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                                        <div className="h4 font-weight-bold">72%</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4 d-flex align-items-center">
                                                <div>
                                                    <h3>40 / 50</h3>
                                                    <div className="dash-avg">20.5 avg</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <a href="#" className="btn btn-primary btn-block">Marksheet</a>
                                            </div>
                                            <div className="col-6">
                                                <a href="#" className="btn btn-primary btn-block">Retake</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2 className="mb-3"> Recent Mock Tests</h2>
                            <div className="row">
                                <div className="col-lg-4 col-sm-6 d-flex" >
                                    <div className="white-box animate slideIn" > <a href="#">
                                        <h3 className="mt-head">SPEED KOTA  Foundation Test</h3>
                                    </a>
                                        <div className="teacher-date-text">By Kamlesh Sharma</div>
                                        <div className="teacher-date-text mb-3">10 June 2020</div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src="images/question-icon.svg" width="40" height="40" className="mr-3" alt="" />
                                                    <div className="media-body">
                                                        <div className="mt-0">50 </div>
                                                        Questions
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src="images/marks-icon.svg" width="40" height="40" className="mr-3" alt="" />
                                                    <div className="media-body">
                                                        <div className="mt-0">200  </div>
                                                            Marks
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src="images/time-icon.svg" width="40" height="40" className="mr-3" alt="" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                            Minutes
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src="images/negative-icon.svg" width="40" height="40" className="mr-3" alt="" />
                                                    <div className="media-body">
                                                        <div className="mt-0">1 </div>
                                                            Negative
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-price mb-3">
                                            Free
			                            </div>
                                        <div className="mt-tags"><a href="#" >NEET</a> <a href="#" >Maths</a> </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 d-flex" >
                                    <div className="white-box animate slideIn" > <a href="#">
                                        <h3 className="mt-head">SPEED KOTA  Foundation Test</h3>
                                    </a>
                                        <div className="teacher-date-text">By Kamlesh Sharma</div>
                                        <div className="teacher-date-text mb-3">10 June 2020</div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src="images/question-icon.svg" width="40" height="40" className="mr-3" alt="" />
                                                    <div className="media-body">
                                                        <div className="mt-0">50 </div>
                                                        Questions
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src="images/marks-icon.svg" width="40" height="40" className="mr-3" alt="" />
                                                    <div className="media-body">
                                                        <div className="mt-0">200  </div>
                                                        Marks
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src="images/time-icon.svg" width="40" height="40" className="mr-3" alt="" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                        Minutes
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src="images/negative-icon.svg" width="40" height="40" className="mr-3" alt="" />
                                                    <div className="media-body">
                                                        <div className="mt-0">1 </div>
                                                        Negative
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-price mb-3">
                                            ₹450
			                             </div>
                                        <div className="mt-tags"><a href="#" >NEET</a> <a href="#" >Maths</a> </div>

                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 d-flex" >
                                    <div className="white-box animate slideIn" > <a href="#">
                                        <h3 className="mt-head">SPEED KOTA  Foundation Test</h3>
                                    </a>
                                        <div className="teacher-date-text">By Kamlesh Sharma</div>
                                        <div className="teacher-date-text mb-3">10 June 2020</div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src="images/question-icon.svg" width="40" height="40" className="mr-3" alt="" />
                                                    <div className="media-body">
                                                        <div className="mt-0">50 </div>
                                                        Questions
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src="images/marks-icon.svg" width="40" height="40" className="mr-3" alt="" />
                                                    <div className="media-body">
                                                        <div className="mt-0">200  </div>
                                                            Marks
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src="images/time-icon.svg" width="40" height="40" className="mr-3" alt="" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                            Minutes
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src="images/negative-icon.svg" width="40" height="40" className="mr-3" alt="" />
                                                    <div className="media-body">
                                                        <div className="mt-0">1 </div>
                                                        Negative
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-price mb-3">
                                            Free
			                            </div>
                                        <div className="mt-tags"><a href="#" >NEET</a> <a href="#" >Maths</a> </div>
                                    </div>
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

export default Dashboard;