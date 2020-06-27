import React, { Component } from 'react';
import { quesimg, marksimg, timeimg, negativeimg, avatarimg, homeimg } from '../Image';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

class Home extends Component {
    constructor() {
        super();
        this.state = { visible: true };
    }

    componentDidMount() {
        document.title = "Igyanam";
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <main className="flex-shrink-0">
                    <section className="coffee-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <h1 className="home-head-1 mb-3 xl-mt-50">One Step for your
                                complete Learning</h1>
                                    <h2 className="home-head-2 mb-4" >NEET, GATE, SSC, Banking, Railways &amp; more</h2>
                                    <Link to="/MockTestList" className="btn btn-primary btn-lg xs-mrb30">Access Now</Link>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <img src={homeimg} className="img-fluid" alt="home" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="common-block">
                        <div className="container">
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
                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="question" />
                                                    <div className="media-body">
                                                        <div className="mt-0">50 </div>
                                                    Questions
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={marksimg} width="40" height="40" className="mr-3" alt="Marks" />
                                                    <div className="media-body">
                                                        <div className="mt-0">200  </div>
                                                    Marks
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="times" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                    Minutes
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="negative" />
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
                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="question" />
                                                    <div className="media-body">
                                                        <div className="mt-0">50 </div>
                                                    Questions
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={marksimg} width="40" height="40" className="mr-3" alt="Marks" />
                                                    <div className="media-body">
                                                        <div className="mt-0">200  </div>
                                                    Marks
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="times" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                    Minutes
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="negative" />
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
                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="question" />
                                                    <div className="media-body">
                                                        <div className="mt-0">50 </div>
                                                    Questions
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={marksimg} width="40" height="40" className="mr-3" alt="Marks" />
                                                    <div className="media-body">
                                                        <div className="mt-0">200  </div>
                                                    Marks
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="times" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                    Minutes
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="negative" />
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
                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="question" />
                                                    <div className="media-body">
                                                        <div className="mt-0">50 </div>
                                                    Questions
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={marksimg} width="40" height="40" className="mr-3" alt="Marks" />
                                                    <div className="media-body">
                                                        <div className="mt-0">200  </div>
                                                    Marks
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="times" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                    Minutes
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="negative" />
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
                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="question" />
                                                    <div className="media-body">
                                                        <div className="mt-0">50 </div>
                                                    Questions
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={marksimg} width="40" height="40" className="mr-3" alt="Marks" />
                                                    <div className="media-body">
                                                        <div className="mt-0">200  </div>
                                                    Marks
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="times" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                    Minutes
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="negative" />
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
                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="question" />
                                                    <div className="media-body">
                                                        <div className="mt-0">50 </div>
                                                    Questions
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={marksimg} width="40" height="40" className="mr-3" alt="Marks" />
                                                    <div className="media-body">
                                                        <div className="mt-0">200  </div>
                                                    Marks
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="times" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                    Minutes
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="negative" />
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
                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="question" />
                                                    <div className="media-body">
                                                        <div className="mt-0">50 </div>
                                                    Questions
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={marksimg} width="40" height="40" className="mr-3" alt="Marks" />
                                                    <div className="media-body">
                                                        <div className="mt-0">200  </div>
                                                    Marks
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="times" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                    Minutes
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="negative" />
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
                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="question" />
                                                    <div className="media-body">
                                                        <div className="mt-0">50 </div>
                                                    Questions
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={marksimg} width="40" height="40" className="mr-3" alt="Marks" />
                                                    <div className="media-body">
                                                        <div className="mt-0">200  </div>
                                                    Marks
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="times" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                    Minutes
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="negative" />
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
                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="question" />
                                                    <div className="media-body">
                                                        <div className="mt-0">50 </div>
                                                    Questions
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={marksimg} width="40" height="40" className="mr-3" alt="Marks" />
                                                    <div className="media-body">
                                                        <div className="mt-0">200  </div>
                                                    Marks
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="times" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                    Minutes
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="negative" />
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
                            <h2 className="mb-3"> Teachers</h2>
                            <div className="row">
                                <div className="col-lg-4 col-sm-6 d-flex" >
                                    <div className="white-box animate slideIn" >
                                        <div className="media mb-3">
                                            <div className="t-avatar-img-main mr-4">
                                                <a href="#" > <img src={avatarimg} className="rounded-circle img-fluid" alt="avtar" /></a>
                                            </div>
                                            <div className="media-body mt-auto mb-auto">
                                                <a className="t-name" href="#">Kamlesh Sharma </a>
                                                <div className="">M.sc</div>
                                                <div className="t-mock-test">Mock Test (90)</div>
                                            </div>
                                        </div>
                                        <div className="mt-tags mb-3"><a href="#" >NEET</a> <a href="#" >Maths</a> <a href="#" >NEET</a> <a href="#" >Maths</a> <a href="#" >NEET</a> <a href="#" >Maths</a> </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 d-flex" >
                                    <div className="white-box animate slideIn" >
                                        <div className="media mb-3">
                                            <div className="t-avatar-img-main mr-4">
                                                <a href="#" > <img src={avatarimg} className="rounded-circle img-fluid" alt="avtar" /></a>
                                            </div>
                                            <div className="media-body mt-auto mb-auto">
                                                <a className="t-name" href="#">Kamlesh Sharma </a>
                                                <div className="">M.sc</div>
                                                <div className="t-mock-test">Mock Test (90)</div>
                                            </div>
                                        </div>
                                        <div className="mt-tags mb-3"><a href="#" >NEET</a> <a href="#" >Maths</a>  </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 d-flex" >
                                    <div className="white-box animate slideIn" >
                                        <div className="media mb-3">
                                            <div className="t-avatar-img-main mr-4">
                                                <a href="#" > <img src={avatarimg} className="rounded-circle img-fluid" alt="avtar" /></a>
                                            </div>
                                            <div className="media-body mt-auto mb-auto">
                                                <a className="t-name" href="#">Kamlesh Sharma </a>
                                                <div className="">M.sc</div>
                                                <div className="t-mock-test">Mock Test (90)</div>
                                            </div>
                                        </div>
                                        <div className="mt-tags mb-3"><a href="#" >NEET</a> <a href="#" >Maths</a>  </div>
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

export default Home;