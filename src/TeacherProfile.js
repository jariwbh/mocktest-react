import React, { Component } from 'react';
import { avatarimg, quesimg, marksimg, timeimg, negativeimg } from './Image';
import Header from './Header';
import Footer from './Footer';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class TeacherProfile extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        document.title = "Igyanam - Teachers Profile";
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <main className="flex-shrink-0" >
                    <section className="common-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12" >
                                    <div className="white-box-no-animate mtd-topbar animate slideIn" >
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="media mb-20">
                                                    <div className="tp-avatar-img-main mr-4">
                                                        <img src={avatarimg} className="rounded-circle img-fluid" alt="avatarimg" />
                                                    </div>
                                                    <div className="media-body mt-auto mb-auto">
                                                        <div className="tp-name ">Kamlesh Sharma </div>
                                                        <div className="tp-degree">M.sc</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="mt-tags"><a href="#" >NEET</a> <a href="#" >Maths</a> </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Tabs className="white-box-no-animate tp-tab animate slideIn nav nav-pills" defaultActiveKey="home" id="pills-tab" role="tablist">
                                        <Tab className="nav-link" eventKey="home" data-toggle="pill" title="About Me" role="tab" aria-controls="pills-aboutme" aria-selected="true">
                                            <div className="tab-pane fade show active white-box-no-animate p-20" id="pills-aboutme" role="tabpanel" aria-labelledby="pills-aboutme-tab">
                                                <div className="tp-head-sm">Professional Synopsis</div>
                                                <p>Over 12+ years of experience including 6 years in Web Application Engineering & Development.</p>
                                                <p>Presently working as Founder & Lead Engineer at ByteBundle</p>
                                                <p>Previously associated with MindTech Fusion Pvt Ltd, Delhi as Team Lead & Founding Member Technology for www.campuspedia.in</p>
                                                <p>Previously associated with smartData Enterprises (I) Ltd. (CMMI-3), Nagpur as Junior Team Lead and Netlink Software Group, Bhopal
                                            as DBA / Web Developer for world-bank CIDP project.</p>
                                                <p>Technical expertise in all aspects of the SDLC involving requirement analysis, project scoping, quality management as per the specified
                                                guidelines and norms. Possesses a clear understanding of the industry, technology trends with the distinction of instituting new
                                            practices to achieve business excellence at the lowest overall cost.</p>
                                                <p>Working knowledge of Linux & Windows operating system with SVN & GIT and exposure to various database management systems. Proven skills in managing teams to work in sync with the corporate set parameters & motivating them for achieving business and individual goals. Experience of coordinating in large team. PGDIT from Symbiosis Centre for Distance Learning. (Scored 72.75%)
                                            Oracle Database 10g: Administration Workshop from NIIT in 2010. B.E. in Computer Science Engineering from M.P.C.C.E&T, Pt. Ravishankar Shukla University, Raipur in 2005. (Scored 66%)</p>
                                            </div>
                                        </Tab>
                                        <Tab className="nav-link" eventKey="MockTest" title="MockTest" data-toggle="pill" role="tab" aria-controls="pills-mocktest" aria-selected="false">
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-6 d-flex" >
                                                    <div className="white-box animate slideIn" > <a href="#">
                                                        <h3 className="mt-head">SPEED KOTA  Foundation Test</h3>
                                                    </a>
                                                        <div className="teacher-date-text mb-3">10 June 2020</div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="quesimg" />
                                                                    <div className="media-body">
                                                                        <div className="mt-0">50 </div>
                                                    Questions
						                        </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={marksimg} width="40" height="40" className="mr-3" alt="marksimg" />
                                                                    <div className="media-body">
                                                                        <div className="mt-0">200  </div>
                                                    Marks
                                                 </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="timeimg" />
                                                                    <div className="media-body">
                                                                        <div className="mt-0">60 </div>
                                                    Minutes
                                                 </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="negativeimg" />
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
                                                        <div className="teacher-date-text mb-3">10 June 2020</div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="quesimg" />
                                                                    <div className="media-body">
                                                                        <div className="mt-0">50 </div>
                                                    Questions
                                                </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={marksimg} width="40" height="40" className="mr-3" alt="marksimg" />
                                                                    <div className="media-body">
                                                                        <div className="mt-0">200  </div>
                                                    Marks
                                                </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="timeimg" />
                                                                    <div className="media-body">
                                                                        <div className="mt-0">60 </div>
                                                    Minutes
                                                </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="negativeimg" />
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
                                                        <div className="teacher-date-text mb-3">10 June 2020</div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="quesimg" />
                                                                    <div className="media-body">
                                                                        <div className="mt-0">50 </div>
                                                    Questions
                                                </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={marksimg} width="40" height="40" className="mr-3" alt="marksimg" />
                                                                    <div className="media-body">
                                                                        <div className="mt-0">200  </div>
                                                    Marks
                                                </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="timeimg" />
                                                                    <div className="media-body">
                                                                        <div className="mt-0">60 </div>
                                                    Minutes
                                                </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="negativeimg" />
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
                                                        <div className="teacher-date-text mb-3">10 June 2020</div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="quesimg" />
                                                                    <div className="media-body">
                                                                        <div className="mt-0">50 </div>
                                                                        Questions
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={marksimg} width="40" height="40" className="mr-3" alt="marksimg" />
                                                                    <div className="media-body">
                                                                        <div className="mt-0">200  </div>
                                                                        Marks
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="timeimg" />
                                                                    <div className="media-body">
                                                                        <div className="mt-0">60 </div>
                                                                        Minutes
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="negativeimg" />
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
                                                        <div className="teacher-date-text mb-3">10 June 2020</div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="quesimg" />
                                                                    <div className="media-body">
                                                                        <div className="mt-0">50 </div>
                                                                        Questions
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={marksimg} width="40" height="40" className="mr-3" alt="marksimg" />
                                                                    <div className="media-body">
                                                                        <div className="mt-0">200  </div>
                                                                        Marks
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="timeimg" />
                                                                    <div className="media-body">
                                                                        <div className="mt-0">60 </div>
                                                                        Minutes
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="negativeimg" />
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
                                                        <div className="teacher-date-text mb-3">10 June 2020</div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="quesimg" />
                                                                    <div className="media-body">
                                                                        <div className="mt-0">50 </div>
                                                                        Questions
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={marksimg} width="40" height="40" className="mr-3" alt="marksimg" />
                                                                    <div className="media-body">
                                                                        <div className="mt-0">200  </div>
                                                                        Marks
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="timeimg" />
                                                                    <div className="media-body">
                                                                        <div className="mt-0">60 </div>
                                                                        Minutes
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="negativeimg" />
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
                                            </div>
                                        </Tab>
                                    </Tabs>
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

export default TeacherProfile;