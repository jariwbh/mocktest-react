import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import AttemptedMockTestUI from '../Dashboard/AttemptedMockTestUI';
import { getUserId } from '../../Core/Auth'
import axios from '../../axiosInst'

class Dashboard extends Component {
    _isMounted = false;

    constructor() {
        super();


        this.state = {
            examresults: null,
            loading: true,
            errorMessage: ''
        }
    }

    componentDidMount() {
        this._isMounted = true;

        document.title = "Igyanam Dashboard";
        const userId = getUserId()
        const request = {
            "search": [
                { "searchfield": "studentid", "searchvalue": userId, "datatype": "ObjectId", "criteria": "eq" }
            ]
        }

        axios.post('examresults/filter', request)
            .then((response) => {
                if (this._isMounted) {
                    this.setState({ loading: false, error: response.data.message, examresults: response.data })
                }
            }, (error) => {
                this.setState({ loading: false, errorMessage: error })
                console.log('Dashboard Error:', error);
            });

    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { loading, examresults } = this.state

        return (
            <React.Fragment>
                <Header />
                <main className="flex-shrink-0">
                    <section className="common-block">
                        <div className="container">
                            {!loading &&
                                <React.Fragment>
                                    <h2 className="mb-3"> Attempted Mock Test</h2>
                                    <div className="row">
                                        {examresults && examresults.map(examresult =>
                                            <AttemptedMockTestUI key={examresult._id}
                                                id={examresult._id}
                                                title={examresult.examid.title}
                                                createdAt={examresult.examid.createdAt}
                                                attemptedquestions={examresult.attemptedquestions}
                                                unattemptedquestions={examresult.unattemptedquestions}
                                                totalquestions={examresult.attemptedquestions + examresult.unattemptedquestions}
                                                percentage={examresult.percentage} />
                                        )}
                                    </div>
                                    {/* <h2 className="mb-3"> Recent Mock Tests</h2>
                                    <div className="row">
                                        <MockTestUI />
                                        <MockTestUI />
                                        <MockTestUI />
                                    </div> */}
                                </React.Fragment>
                            }
                            {loading &&
                                <div colSpan="4" className="text-center">
                                    <span className="spinner-border spinner-border-lg align-center"></span>
                                </div>
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