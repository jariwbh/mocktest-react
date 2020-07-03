import React, { Component } from 'react';
import { quesimg, marksimg, timeimg, negativeimg } from './Image';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MockTestService from '../../Core/Services/MockTest/BsMockTest';
import * as moment from 'moment';

class MockTestList extends Component {
    _isMounted = false;
    constructor() {
        super();
        this.state = {
            visible: null,
            mockTest: [],
            search: null,
        };
    }

    componentDidMount() {
        document.title = "Igyanam";
        window.scrollTo(0, 0);
        this._isMounted = true;
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

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({ search: keyword })
    }

    render() {
        const { mockTest } = this.state;
        const mockTestList = mockTest.filter((obj) => {
            if (this.state.search == null)
                return obj
            else if (obj.title.toLowerCase().includes(this.state.search.toLowerCase())) {
                return obj
            }
        }).map((val) => (
            <div className="col-lg-4 col-sm-6 d-flex" key={val._id} >
                <div className="white-box animate slideIn" >
                    <Link to="/MockTestStartTest">
                        <h3 className="mt-head">{val.title}</h3>
                    </Link>
                    <div className="teacher-date-text">By Kamlesh Sharma</div>
                    <div className="teacher-date-text mb-3">{moment(val.createdAt).format("D MMMM YYYY")}</div>
                    <div className="row">
                        <div className="col-6">
                            <div className="media mb-3">
                                <img src={quesimg} width="40" height="40" className="mr-3" alt="Question" />
                                <div className="media-body">
                                    <div className="mt-0">{val.questions.length} </div>
                                                    Questions
                                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="media mb-3">
                                <img src={marksimg} width="40" height="40" className="mr-3" alt="Marks" />
                                <div className="media-body">
                                    <div className="mt-0">{val.totalmarks}  </div>
                                                    Marks
                                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="media mb-3">
                                <img src={timeimg} width="40" height="40" className="mr-3" alt="Times" />
                                <div className="media-body">
                                    <div className="mt-0">{val.time} </div>
                                                    Minutes
                                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="media mb-3">
                                <img src={negativeimg} width="40" height="40" className="mr-3" alt="Negative" />
                                <div className="media-body">
                                    <div className="mt-0">0 </div>
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
        ))
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
                                            <input name="search" className="form-control" onChange={(e) => this.searchSpace(e)} placeholder="Select Exams" type="search" />
                                            <span className="mt-btn">
                                                <button type="submit"><i className="customicons-search-icon"></i></button>
                                            </span>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {mockTestList}
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