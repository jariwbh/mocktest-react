import React, { Component } from 'react';
import { avatarimg } from '../Image'
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

class Teachers extends Component {

    constructor() {
        super();
    }
    componentDidMount() {
        document.title = "Igyanam - Teachers";
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
                                            <input name="search" className="form-control" placeholder="Search Teacher" type="search" />
                                            {/* <input name="search" className="form-control" value="" placeholder="Search Teacher" type="search" /> */}
                                            <span className="mt-btn">
                                                <button type="submit"><i className="customicons-search-icon"></i></button>
                                            </span>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12" >
                                    <div className="white-box-no-animate animate slideIn" >
                                        <div className="teacher-block">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="media mb-3">
                                                        <div className="t-avatar-img-main mr-4">
                                                            <img src={avatarimg} className="rounded-circle img-fluid" alt="Avtar" />
                                                        </div>
                                                        <div className="media-body mt-auto mb-auto">
                                                            <Link to="/TeacherProfile" className="t-name">Kamlesh Sharma</Link>
                                                            <div className="">M.sc</div>
                                                            <div className="t-mock-test">Mock Test (90)</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="mt-tags"> <a href="#">NEET</a> <a href="#" >Maths</a> 
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                Over 12+ years of experience including 6 years in Web Application Engineering & Development. Presently working as Founder & Lead
                                                Engineer at ByteBundle Previously associated with MindTech Fusion Pvt Ltd, Delhi as Team Lead & Founding Member Technology...
					                        </div>
                                        </div>
                                    </div>
                                    <div className="teacher-block">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="media mb-3">
                                                    <div className="t-avatar-img-main mr-4">
                                                        <img src={avatarimg} className="rounded-circle img-fluid" alt="Avtar" />
                                                    </div>
                                                    <div className="media-body mt-auto mb-auto">
                                                        <Link to="/TeacherProfile" className="t-name">Kamlesh Sharma</Link>
                                                        <div className="">M.sc</div>
                                                        <div className="t-mock-test">Mock Test (90)</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="mt-tags"><a href="#" >NEET</a> <a href="#" >Maths</a> </div>
                                            </div>
                                            <div className="col-lg-12">
                                                Over 12+ years of experience including 6 years in Web Application Engineering & Development. Presently working as Founder & Lead
                                                Engineer at ByteBundle Previously associated with MindTech Fusion Pvt Ltd, Delhi as Team Lead & Founding Member Technology...
					                        </div>
                                        </div>
                                    </div>
                                    <div className="teacher-block">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="media mb-3">
                                                    <div className="t-avatar-img-main mr-4">
                                                        <img src={avatarimg} className="rounded-circle img-fluid" alt="Avatar" />
                                                    </div>
                                                    <div className="media-body mt-auto mb-auto">
                                                        <Link to="/TeacherProfile" className="t-name">Kamlesh Sharma</Link>
                                                        <div className="">M.sc</div>
                                                        <div className="t-mock-test">Mock Test (90)</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="mt-tags"><a href="#" >NEET</a> <a href="#" >Maths</a> </div>
                                            </div>
                                            <div className="col-lg-12">
                                                Over 12+ years of experience including 6 years in Web Application Engineering & Development. Presently working as Founder & Lead
                                                Engineer at ByteBundle Previously associated with MindTech Fusion Pvt Ltd, Delhi as Team Lead & Founding Member Technology...
					                        </div>
                                        </div>
                                    </div>
                                    <div className="teacher-block">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="media mb-3">
                                                    <div className="t-avatar-img-main mr-4">
                                                        <img src={avatarimg} className="rounded-circle img-fluid" alt="Avtar" />
                                                    </div>
                                                    <div className="media-body mt-auto mb-auto">
                                                        <Link to="/TeacherProfile" className="t-name">Kamlesh Sharma</Link>
                                                        <div className="">M.sc</div>
                                                        <div className="t-mock-test">Mock Test (90)</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="mt-tags"><a href="#" >NEET</a> <a href="#" >Maths</a>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                Over 12+ years of experience including 6 years in Web Application Engineering & Development. Presently working as Founder & Lead
                                                Engineer at ByteBundle Previously associated with MindTech Fusion Pvt Ltd, Delhi as Team Lead & Founding Member Technology...
					                        </div>
                                        </div>
                                    </div>
                                    <div className="teacher-block">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="media mb-3">
                                                    <div className="t-avatar-img-main mr-4">
                                                        <img src={avatarimg} className="rounded-circle img-fluid" alt="Avtar" />
                                                    </div>
                                                    <div className="media-body mt-auto mb-auto">
                                                        <Link to="/TeacherProfile" className="t-name">Kamlesh Sharma</Link>
                                                        <div className="">M.sc</div>
                                                        <div className="t-mock-test">Mock Test (90)</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="mt-tags"><a href="#" >NEET</a> <a href="#" >Maths</a> </div>
                                            </div>
                                            <div className="col-lg-12">
                                                Over 12+ years of experience including 6 years in Web Application Engineering & Development. Presently working as Founder & Lead
                                                Engineer at ByteBundle Previously associated with MindTech Fusion Pvt Ltd, Delhi as Team Lead & Founding Member Technology...
					                        </div>
                                        </div>
                                    </div>
                                    <div className="teacher-block">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="media mb-3">
                                                    <div className="t-avatar-img-main mr-4">
                                                        <img src={avatarimg} className="rounded-circle img-fluid" alt="Avtar" />
                                                    </div>
                                                    <div className="media-body mt-auto mb-auto">
                                                        <Link to="/TeacherProfile" className="t-name">Kamlesh Sharma</Link>
                                                        <div className="">M.sc</div>
                                                        <div className="t-mock-test">Mock Test (90)</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="mt-tags"><a href="#" >NEET</a> <a href="#" >Maths</a> </div>
                                            </div>
                                            <div className="col-lg-12">
                                                Over 12+ years of experience including 6 years in Web Application Engineering & Development. Presently working as Founder & Lead
                                                Engineer at ByteBundle Previously associated with MindTech Fusion Pvt Ltd, Delhi as Team Lead & Founding Member Technology...
					                        </div>
                                        </div>
                                    </div>
                                    <div className="teacher-block">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="media mb-3">
                                                    <div className="t-avatar-img-main mr-4">
                                                        <img src={avatarimg} className="rounded-circle img-fluid" alt="Avtar" />
                                                    </div>
                                                    <div className="media-body mt-auto mb-auto">
                                                        <Link to="/TeacherProfile" className="t-name">Kamlesh Sharma</Link>
                                                        <div className="">M.sc</div>
                                                        <div className="t-mock-test">Mock Test (90)</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="mt-tags"><a href="#" >NEET</a> <a href="#" >Maths</a> </div>
                                            </div>
                                            <div className="col-lg-12">
                                                Over 12+ years of experience including 6 years in Web Application Engineering & Development. Presently working as Founder & Lead
                                                Engineer at ByteBundle Previously associated with MindTech Fusion Pvt Ltd, Delhi as Team Lead & Founding Member Technology...
					                        </div>
                                        </div>
                                    </div>
                                    <div className="teacher-block">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="media mb-3">
                                                    <div className="t-avatar-img-main mr-4">
                                                        <img src={avatarimg} className="rounded-circle img-fluid" alt="Avtar" />
                                                    </div>
                                                    <div className="media-body mt-auto mb-auto">
                                                        <Link to="/TeacherProfile" className="t-name">Kamlesh Sharma</Link>
                                                        <div className="">M.sc</div>
                                                        <div className="t-mock-test">Mock Test (90)</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="mt-tags"><a href="#" >NEET</a> <a href="#" >Maths</a> </div>
                                            </div>
                                            <div className="col-lg-12">
                                                Over 12+ years of experience including 6 years in Web Application Engineering & Development. Presently working as Founder & Lead
                                                Engineer at ByteBundle Previously associated with MindTech Fusion Pvt Ltd, Delhi as Team Lead & Founding Member Technology...
					                        </div>
                                        </div>
                                    </div>
                                    <div className="teacher-block">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="media mb-3">
                                                    <div className="t-avatar-img-main mr-4">
                                                        <img src={avatarimg} className="rounded-circle img-fluid" alt="Avtar" />
                                                    </div>
                                                    <div className="media-body mt-auto mb-auto">
                                                        <Link to="/TeacherProfile" className="t-name">Kamlesh Sharma</Link>
                                                        <div className="">M.sc</div>
                                                        <div className="t-mock-test">Mock Test (90)</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="mt-tags"><a href="#" >NEET</a> <a href="#" >Maths</a> </div>
                                            </div>
                                            <div className="col-lg-12">
                                                Over 12+ years of experience including 6 years in Web Application Engineering & Development. Presently working as Founder & Lead
                                                Engineer at ByteBundle Previously associated with MindTech Fusion Pvt Ltd, Delhi as Team Lead & Founding Member Technology...
					                        </div>
                                        </div>
                                    </div>
                                    <div className="teacher-block">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="media mb-3">
                                                    <div className="t-avatar-img-main mr-4">
                                                        <img src={avatarimg} className="rounded-circle img-fluid" alt="Avtar" />
                                                    </div>
                                                    <div className="media-body mt-auto mb-auto">
                                                        <Link to="/TeacherProfile" className="t-name">Kamlesh Sharma</Link>
                                                        <div className="">M.sc</div>
                                                        <div className="t-mock-test">Mock Test (90)</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="mt-tags"><a href="#" >NEET</a> <a href="#" onclick="console.log('The link was clicked.'); return false">Maths</a> </div>
                                            </div>
                                            <div className="col-lg-12">
                                                Over 12+ years of experience including 6 years in Web Application Engineering & Development. Presently working as Founder & Lead
                                                Engineer at ByteBundle Previously associated with MindTech Fusion Pvt Ltd, Delhi as Team Lead & Founding Member Technology...
					                        </div>
                                        </div>
                                    </div>

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
            </React.Fragment >
        );
    }
}

export default Teachers;