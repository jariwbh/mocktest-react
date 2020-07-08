import React, { Component } from 'react'
import { logo, negativeimg, timeimg, marksimg, quesimg, avatarimg } from './Image'
import { Link } from 'react-router-dom';

class MockTestStartTest extends Component {

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
                <header>
                    <nav className="navbar navbar-expand navbar-dark p-0">
                        <div id="header" className="header-inner fixed-top">
                            <div className="container">
                                <Link to="/" className="navbar-brand"><img className="img-fluid" src={logo} alt="logo" /></Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item"> <span className="badge alert-danger badge-time">54:45</span></li>
                                        <li className="nav-item"> <Link to="/MockTestResults" className="btn btn-primary btn-lg">Submit</Link> </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </nav>
                </header>
                <main className="flex-shrink-0">
                    <section className="common-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12" >
                                    <div className="white-box-no-animate mtd-topbar animate slideIn" >
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="media mb-20">
                                                    <div className="avatar-img-main mr-3">
                                                        <img src={avatarimg} className="rounded-circle img-fluid" alt="Avtar" />
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="mt-0"><a href="#">Kamlesh Sharma</a> </div>
                                                            M.sc
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-3">
                                                        <div className="media mb-20">
                                                            <img src={quesimg} width="40" height="40" className="mr-3" alt="Question" />
                                                            <div className="media-body">
                                                                <div className="mt-0">50 </div>
                                                                        Questions
                                                                    </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3">
                                                        <div className="media mb-20">
                                                            <img src={marksimg} width="40" height="40" className="mr-3" alt="Marks" />
                                                            <div className="media-body">
                                                                <div className="mt-0">200  </div>
                                                                            Marks
                                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3">
                                                        <div className="media mb-20">
                                                            <img src={timeimg} width="40" height="40" className="mr-3" alt="times" />
                                                            <div className="media-body">
                                                                <div className="mt-0">60 </div>
                                                                                    Minutes
                                                                                </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3">
                                                        <div className="media mb-20">
                                                            <img src={negativeimg} width="40" height="40" className="mr-3" alt="Negative" />
                                                            <div className="media-body">
                                                                <div className="mt-0">1 </div>
                                                                                    Negative
                                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="white-box-no-animate p-20 animate slideIn" >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h2 className="mb-5"> SPEED KOTA  Foundation Test</h2>
                                                <div>
                                                    <Link to="/MockTestDetails" className="btn btn-primary btn-lg xs-mrb30"> Start Test </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }
}

export default MockTestStartTest;
