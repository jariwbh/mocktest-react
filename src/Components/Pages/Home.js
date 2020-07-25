import React, { Component } from 'react';
import { quesimg, marksimg, timeimg, negativeimg, homeimg } from './Image';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import TeacherService from '../../Core/Services/Teacher/BsTeacherGetList';
import MockTestService from '../../Core/Services/MockTest/BsMockTest';
import * as moment from 'moment';
import TeacherUI from '../UI/Teacher/TeacherUI';
import Button from 'react-bootstrap/Button';
import { getheader } from "../../Core/CustomerHeader";
import MockTestCardUI from '../UI/MockTestCard/MockTestCardUI';

class Home extends Component {
    _isMounted = false;
    constructor() {
        super();
        this.state = {
            teachers: [],
            errorMessage: null,
            mockTest: [],
            startno: 0,
            endno: 6,
            buttonVisible: true,
            tabTitle: getheader()
        };
    }

    componentDidMount() {
        document.title = this.props.title
        window.scrollTo(0, 0);
        this._isMounted = true;
        const TeacherBody = { "search": [] }
        TeacherService.getAllTeachers(TeacherBody)
            .then(data => {
                if (data != null) {
                    if (this._isMounted) {
                        this.setState({ teachers: data });
                    }
                }
                else {
                    console.log('fetching error failed. Try later!')
                }
            })

        const MockTestBody = {
            "search": [{ "fieldname": "status", "fieldvalue": "publish", "criteria": "eq", "datatype": "text" }],
            "limit": 3,
            "sort": { "createdAt": 1 }
        }

        MockTestService.getAllMockTest(MockTestBody)
            .then(data => {
                if (data != null) {
                    if (this._isMounted === true) {
                        this.setState({ mockTest: data });
                    }
                }
                else {
                    console.log('fetching error failed. Try later!')
                }
            })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { teachers, mockTest, startno, endno, buttonVisible } = this.state;
        const getMoreTeachers = () => {
            const len = teachers.length;
            this.setState({ endno: this.state.endno + 6 });
            window.scrollTo(0, 0);
            if (endno >= len) {
                this.setState({ buttonVisible: false });
            }
        }

        return (
            <React.Fragment >
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
                                {mockTest.slice(0, 6).map(obj => (
                                    <MockTestCardUI key={obj._id}
                                        mockTest={obj} />
                                ))}
                            </div>
                            <h2 className="mb-3"> Teachers</h2>
                            <div className="row">
                                {teachers.slice(startno, endno).map((val, index) => (
                                    <TeacherUI
                                        key={val._id}
                                        profileimage={val.profileimage}
                                        fullname={val.property.fullname}
                                        qualification={val.property.qualification}
                                        subject={val.property.subject.map((sub, i) => (
                                            <a href="#" key={i} >{sub === null ? '' : sub}</a>
                                        ))}
                                    />
                                ))}
                            </div>
                            {buttonVisible &&
                                <Button className="light" name="View More" title="View More"
                                    onClick={getMoreTeachers}>
                                    View More
                                </Button>
                            }
                        </div>
                    </section>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;

