import React, { Component } from 'react';
import { quesimg, marksimg, timeimg, negativeimg } from '../Image';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

class MockTestList extends Component {
    constructor() {
        super();
        this.state = { visible: null };
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
                    <section className="common-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 offset-lg-3">
                                    <div className="mt-search mb-5" >
                                        <form action="#" className="mt-form">
                                            {/* <input name="search" className="form-control" value="" placeholder="Select Exams" type="search" /> */}
                                            <input name="search" className="form-control" placeholder="Select Exams" type="search" />
                                            <span className="mt-btn">
                                                <button type="submit"><i className="customicons-search-icon"></i></button>
                                            </span>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-sm-6 d-flex" >
                                    <div className="white-box animate slideIn" >
                                        <Link to="/MockTestStartTest">
                                            <h3 className="mt-head">SPEED KOTA  Foundation Test</h3>
                                        </Link>
                                        <div className="teacher-date-text">By Kamlesh Sharma</div>
                                        <div className="teacher-date-text mb-3">10 June 2020</div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="Question" />
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
                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="Times" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                    Minutes
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="Negative" />
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
                                    <div className="white-box animate slideIn" >
                                        <Link to="/MockTestStartTest">
                                            <h3 className="mt-head">SPEED KOTA  Foundation Test</h3>
                                        </Link>
                                        <div className="teacher-date-text">By Kamlesh Sharma</div>
                                        <div className="teacher-date-text mb-3">10 June 2020</div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="Question" />
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
                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="Times" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                    Minutes
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="Negative" />
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
                                    <div className="white-box animate slideIn" >
                                        <Link to="/MockTestStartTest">
                                            <h3 className="mt-head">SPEED KOTA  Foundation Test</h3>
                                        </Link>
                                        <div className="teacher-date-text">By Kamlesh Sharma</div>
                                        <div className="teacher-date-text mb-3">10 June 2020</div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="Question" />
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
                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="Times" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                    Minutes
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="Negative" />
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
                                    <div className="white-box animate slideIn" >
                                        <Link to="/MockTestStartTest">
                                            <h3 className="mt-head">SPEED KOTA  Foundation Test</h3>
                                        </Link>
                                        <div className="teacher-date-text">By Kamlesh Sharma</div>
                                        <div className="teacher-date-text mb-3">10 June 2020</div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="Question" />
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
                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="Times" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                    Minutes
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="Negative" />
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
                                    <div className="white-box animate slideIn" >
                                        <Link to="/MockTestStartTest">
                                            <h3 className="mt-head">SPEED KOTA  Foundation Test</h3>
                                        </Link>
                                        <div className="teacher-date-text">By Kamlesh Sharma</div>
                                        <div className="teacher-date-text mb-3">10 June 2020</div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="Question" />
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
                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="Times" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                    Minutes
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="Negative" />
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
                                    <div className="white-box animate slideIn" >
                                        <Link to="/MockTestStartTest">
                                            <h3 className="mt-head">SPEED KOTA  Foundation Test</h3>
                                        </Link>
                                        <div className="teacher-date-text">By Kamlesh Sharma</div>
                                        <div className="teacher-date-text mb-3">10 June 2020</div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="Question" />
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
                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="Times" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                    Minutes
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="Negative" />
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
                                    <div className="white-box animate slideIn" >
                                        <Link to="/MockTestStartTest">
                                            <h3 className="mt-head">SPEED KOTA  Foundation Test</h3>
                                        </Link>
                                        <div className="teacher-date-text">By Kamlesh Sharma</div>
                                        <div className="teacher-date-text mb-3">10 June 2020</div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="Question" />
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
                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="Times" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                    Minutes
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="Negative" />
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
                                    <div className="white-box animate slideIn" >
                                        <Link to="/MockTestStartTest">
                                            <h3 className="mt-head">SPEED KOTA  Foundation Test</h3>
                                        </Link>
                                        <div className="teacher-date-text">By Kamlesh Sharma</div>
                                        <div className="teacher-date-text mb-3">10 June 2020</div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="Question" />
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
                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="Times" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                    Minutes
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="Negative" />
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
                                    <div className="white-box animate slideIn" >
                                        <Link to="/MockTestStartTest">
                                            <h3 className="mt-head">SPEED KOTA  Foundation Test</h3>
                                        </Link>
                                        <div className="teacher-date-text">By Kamlesh Sharma</div>
                                        <div className="teacher-date-text mb-3">10 June 2020</div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="Question" />
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
                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="Times" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                    Minutes
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="Negative" />
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
                                    <div className="white-box animate slideIn" >
                                        <Link to="/MockTestStartTest">
                                            <h3 className="mt-head">SPEED KOTA  Foundation Test</h3>
                                        </Link>
                                        <div className="teacher-date-text">By Kamlesh Sharma</div>
                                        <div className="teacher-date-text mb-3">10 June 2020</div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="Question" />
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
                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="Times" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                        Minutes
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="Negative" />
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
                                    <div className="white-box animate slideIn" >
                                        <Link to="/MockTestStartTest">
                                            <h3 className="mt-head">SPEED KOTA  Foundation Test</h3>
                                        </Link>
                                        <div className="teacher-date-text">By Kamlesh Sharma</div>
                                        <div className="teacher-date-text mb-3">10 June 2020</div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="Question" />
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
                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="Times" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                    Minutes
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="Negative" />
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
                                    <div className="white-box animate slideIn" >
                                        <Link to="/MockTestStartTest">
                                            <h3 className="mt-head">SPEED KOTA  Foundation Test</h3>
                                        </Link>
                                        <div className="teacher-date-text">By Kamlesh Sharma</div>
                                        <div className="teacher-date-text mb-3">10 June 2020</div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="Question" />
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
                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="Timestime" />
                                                    <div className="media-body">
                                                        <div className="mt-0">60 </div>
                                                        Minutes
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="media mb-3">
                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="Negativenegative" />
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
                            <nav >
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled"> <span className="page-link">Previous</span> </li>
                                    <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item" > <span className="page-link"> 2 <span className="sr-only">(current)</span> </span> </li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"> <a className="page-link" href="#">Next</a> </li>
                                </ul>
                            </nav>
                        </div>
                    </section>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default MockTestList;