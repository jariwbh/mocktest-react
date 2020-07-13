import React, { Component } from 'react'
import { logo, negativeimg, timeimg, marksimg, quesimg, avatarimg, userIcon } from './Image'
import { Link } from 'react-router-dom';
import MockTestService from '../../Core/Services/MockTest/BsMockTest';

class MockTestStartTest extends Component {
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
                                <Link to="/Dashboard" className="navbar-brand"><img className="img-fluid" src={logo} alt="logo" /></Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
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
                                                        {property.qualification}
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
                                                                <div className="mt-0">0 </div>
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
                                                <h2 className="mb-5"> {mockTest.title}</h2>
                                                <div>
                                                    <Link to={'/MockTestDetails/' + mockTest._id} className="btn btn-primary btn-lg xs-mrb30"> Start Test </Link>
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