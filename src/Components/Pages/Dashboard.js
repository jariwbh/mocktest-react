import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import AttemptedMockTestUI from '../Dashboard/AttemptedMockTestUI';
import axios from '../../axiosInst'

class Dashboard extends Component {

    constructor() {
        super();


        this.state = {
            examresults: null,
            loading: true,
            errorMessage: ''
        }
    }

    componentDidMount() {
        document.title = "Igyanam";

        const request = {
            "search": [
                { "searchfield": "studentid", "searchvalue": "5e940ab9df559b3e68fd6612", "datatype": "ObjectId", "criteria": "eq" }
            ]
        }

        axios.post('examresults/filter', request)
            .then((response) => {
                this.setState({ loading: false, error: response.data.message, examresults: response.data })
                console.log('Dashboard Response:', response.data);
            }, (error) => {
                this.setState({ loading: false, errorMessage: error })
                console.log('Dashboard Error:', error);
            });

    }
    render() {
        const { loading, examresults } = this.state
        console.log('Dashboard Render: isLoading', loading);
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
                                            <AttemptedMockTestUI key={examresult.examid._id}
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