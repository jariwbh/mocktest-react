import React, { Component } from 'react';
import { avatarimg, quesimg, marksimg, timeimg, negativeimg, logo, userIcon } from './Image';
import { Link } from 'react-router-dom';
import MockTestService from '../../Core/Services/MockTest/BsMockTest';
import moment from 'moment';

class MockTestDetails extends Component {
    _isMounted = false;
    constructor() {
        super();
        this.state = {
            mockTest: [],
            addedby: [],
            property: []

        };
    }

    componentDidMount() {
        document.title = "Igyanam";
        window.scrollTo(0, 0);
        MockTestService.getByIdMockTest(this.props.match.params.id)
            .then(data => {
                this.setState({ mockTest: data, addedby: data.addedby, property: data.addedby.property });
                console.log(this.state.mockTest)
            }).catch(error => {
                console.log(error);
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { mockTest, addedby, property } = this.state;
        return (
            <React.Fragment>
                <header>
                    <nav className="navbar navbar-expand navbar-dark p-0">
                        <div id="header" className="header-inner fixed-top">
                            <div className="container">
                                <Link to="/" className="navbar-brand"><img className="img-fluid" src={logo} alt="logo" /></Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item"> <span className="badge alert-danger badge-time">54:45</span></li>
                                        <li className="nav-item"> <Link to="/MockTestResults" className="btn btn-primary btn-lg">Submit</Link> </li>
                                    </ul>
                                </div>
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
                                                        {addedby.profileimage != null ? <img src={this.state.addedby.profileimage} className="rounded-circle img-fluid" alt="" /> :
                                                            <img src={userIcon} className="rounded-circle img-fluid" alt="" />}
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="mt-0" style={{ color: '#E58309', textDecoration: 'none' }}> {property.fullname} </div>
                                                        m.sc
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-3">
                                                        <div className="media mb-20">
                                                            <img src={quesimg} width="40" height="40" className="mr-3" alt="Question" />
                                                            <div className="media-body">
                                                                {
                                                                    (mockTest.questions != null) ? mockTest.questions.length : 0
                                                                }
                                                                <div className="mt-0"></div>
                                                                        Questions
                                                                </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3">
                                                        <div className="media mb-20">
                                                            <img src={marksimg} width="40" height="40" className="mr-3" alt="Marks" />
                                                            <div className="media-body">
                                                                <div className="mt-0">{mockTest.totalmarks}  </div>
                                                                            Marks
                                                                </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3">
                                                        <div className="media mb-20">
                                                            <img src={timeimg} width="40" height="40" className="mr-3" alt="times" />
                                                            <div className="media-body">
                                                                <div className="mt-0">{mockTest.time} </div>
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
                                                <h2> {mockTest.title}</h2>
                                                <div className="mb-3"><span className="mr-4" >{moment(mockTest.startdatetime).format("D MMMM YYYY")}</span>   <span className="mt-price">Free</span> </div>
                                                {/* <div className="mt-tags mb-4"><a href="#"  >NEET</a> <a href="#" >Maths</a> </div> */}
                                                <div className="d-flex mb-2">
                                                    <div className="mr-auto justify-content-start font-weight-bold" >
                                                        1. Which vitamin helps in blood clotting?
						                        </div>
                                                    <div className="justify-content-end" ><span className="badge badge-mt-custom"> Marks - 4 </span></div>
                                                </div>
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" value="option1" />
                                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                                        a. Vitamin A2
						                        </label>
                                                </div>
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" value="option1" />
                                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                                        a. Vitamin A2
						                        </label>
                                                </div>
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" value="option1" />
                                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                                        a. Vitamin A2
						                        </label>
                                                </div>
                                                <div className="form-check mb-4">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" value="option2" />
                                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                                        a. Vitamin A2
						                        </label>
                                                </div>
                                                <div className="mb-5">
                                                    <a href="#">Deselect </a>
                                                </div>
                                                <div><a href="#" className="btn btn-primary btn-lg xs-mrb30">Previous</a> <a href="#" className="btn btn-primary btn-lg xs-mrb30 ml-1">Next</a></div>
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

export default MockTestDetails;
