import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import AttemptedMockTestUI from '../Dashboard/AttemptedMockTestUI';
import MockTestUI from '../Dashboard/MockTestUI';
import { getUserId, getUser } from '../../Core/Auth';
import axios from '../../axiosInst';

class Dashboard extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        document.title = this.props.title;

        this.state = {
            examResults: [],
            mockTests: [],
            loadingExamResults: true,
            loadingMockTests: true,
            errorExamResults: '',
            errorMockTests: ''
        }
    }

    componentDidMount() {
        this._isMounted = true;
        const userId = getUserId()
        const request = {
            "search": [
                { "searchfield": "studentid", "searchvalue": userId, "datatype": "ObjectId", "criteria": "eq" }
            ]
        }

        axios.post('examresults/filter', request)
            .then((response) => {
                if (this._isMounted) {
                    this.setState({ loadingExamResults: false, errorExamResults: response.data.message, examResults: response.data })
                }
            }, (error) => {
                this.setState({ loadingExamResults: false, errorExamResults: error.toString() })
                console.log('Dashboard Exam Result Error:', error);
            });

        const mockTestBody = {
            "search": [{ "fieldname": "status", "fieldvalue": "publish", "criteria": "eq", "datatype": "text" }],
            "limit": 3,
            "sort": { "createdAt": 1 }
        }

        axios.post('exams/filter', mockTestBody)
            .then((response) => {
                if (this._isMounted) {
                    this.setState({ loadingMockTests: false, errorMockTests: response.data.message, mockTests: response.data })
                }
            }, (error) => {
                this.setState({ loadingMockTests: false, errorMockTests: error.toString() })
                console.log('Dashboard Mock Test Error:', error);
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { examResults, mockTests, loadingExamResults, loadingMockTests, errorExamResults, errorMockTests } = this.state
        const user = getUser();

        return (
            <React.Fragment>
                <Header />
                <main className="flex-shrink-0">
                    <section className="common-block">
                        <div className="container">
                            <div colSpan="4" className="text-center">
                                <h2 className="text-danger">Welcome {user.user.fullname}!</h2>
                            </div>
                            {!loadingExamResults && !errorExamResults && examResults && examResults.length > 0 &&
                                <React.Fragment>
                                    <h2 className="mb-3"> Attempted Mock Test</h2>
                                    <div className="row">
                                        {examResults.map(examResult =>
                                            <AttemptedMockTestUI key={examResult._id}
                                                examResult={examResult} />
                                        )}
                                    </div>

                                </React.Fragment>
                            }
                            {loadingExamResults &&
                                <div colSpan="4" className="text-center">
                                    <span className="spinner-border spinner-border-lg align-center"></span>
                                </div>
                            }
                            {!loadingExamResults && !errorExamResults && (!examResults || examResults.length === 0) &&
                                <div className="text-center">No data - you have not appeared for any exam.!</div>
                            }
                            {!loadingExamResults && errorExamResults &&
                                <div className="text-center text-danger">There are error to load your exam!: {errorExamResults}</div>
                            }
                            {!loadingMockTests && !errorMockTests && mockTests && mockTests.length > 0 &&
                                <React.Fragment>
                                    <h2 className="mb-3"> Popular Mock Tests</h2>
                                    <div className="row">
                                        {mockTests.map(mockTest =>
                                            <MockTestUI key={mockTest._id}
                                                mockTest={mockTest} />
                                        )}
                                    </div>
                                </React.Fragment>
                            }
                            {loadingMockTests &&
                                <div colSpan="4" className="text-center">
                                    <span className="spinner-border spinner-border-lg align-center"></span>
                                </div>
                            }
                            {!loadingMockTests && !errorMockTests && (!mockTests || mockTests.length === 0) &&
                                <div className="text-center">No data - There are not any Popular Mock Tests!</div>
                            }
                            {!loadingMockTests && errorMockTests &&
                                <div className="text-center text-danger">There are error to load Popular Mock Test!: {errorMockTests}</div>
                            }
                        </div>
                    </section>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Dashboard;