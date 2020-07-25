import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as moment from 'moment'
import Header from './Header';
import Footer from './Footer';
import axios from '../../axiosInst'

class MockTestResults extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        document.title = this.props.title;
        window.scrollTo(0, 0);
        this.state = {
            examresult: null,
            loading: true,
            errorMessage: ''
        }
    }

    componentDidMount() {
        this._isMounted = true;

        axios.get(`examresults/${this.props.computedMatch.params.id}`)
            .then((response) => {
                if (this._isMounted) {
                    this.setState({ loading: false, error: response.data.message, examresult: response.data })
                }
            }, (error) => {
                this.setState({ loading: false, errorMessage: error })
                console.log('MockTestResults Error:', error);
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { loading, examresult } = this.state
        return (
            <React.Fragment>
                <Header />
                <main className="flex-shrink-0">
                    <section className="common-block">
                        <div className="container">
                            {!loading &&
                                <React.Fragment>
                                    <div className="row">
                                        <div className="col-lg-12" >
                                            <div className="white-box-no-animate p-20 animate slideIn" >
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <h2> {examresult.examid.title}</h2>
                                                        <div className="mb-4">{moment(examresult.examid.createdAt).format("D MMMM YYYY h:mm A")}</div>
                                                        <div className="mt-username" >
                                                            {examresult.studentid.property.fullname}
                                                        </div>
                                                        <table className="table table-bordered mb-5">
                                                            <thead>
                                                                <tr>
                                                                    <th colSpan="2" className="text-center"><span className="customicons-trophy-icon mr-1"></span> Rank 1</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td width="50%">Questions Attempted	</td>
                                                                    <td>{examresult.attemptedquestions} / {examresult.attemptedquestions + examresult.unattemptedquestions}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-success">Correct Answers	</td>
                                                                    <td>{examresult.correctanswers} <Link to={`/AnswerSheet/${examresult._id}`} className="text-success ml-3">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-danger">Incorrect Answers</td>
                                                                    <td>{examresult.incorrectanswers} <Link to={`/AnswerSheet/${examresult._id}`} className="text-danger ml-3">View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td >Duration</td>
                                                                    <td>{examresult.timetaken}min</td>
                                                                    {/* <td>0min. 52sec.</td> */}
                                                                </tr>
                                                                <tr>
                                                                    <td >Marks</td>
                                                                    <td>{examresult.markesobtained} / {examresult.totalmarks}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <div>
                                                            <Link to={`/AnswerSheet/${examresult._id}`} className="btn btn-success btn-lg xs-mrb30">Answer Sheet</Link><span className="customicons-answersheet-icon"></span>

                                                            <a href="#" className="btn btn-primary btn-lg xs-mrb30 ml-1"><span className="customicons-printer-icon"></span> Print</a></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="white-box-no-animate p-20 animate slideIn" >
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <table className="table table-bordered mb-5">
                                                            <thead>
                                                                <tr>
                                                                    <th colSpan="2" className="text-center"><span className="customicons-trophy-icon mr-1"></span> 2nd Roshan Patel</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td colSpan="2" className="text-center">Marks 100 / 145 in 57min. 0sec.</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <table className="table table-bordered mb-5">
                                                            <thead>
                                                                <tr>
                                                                    <th colSpan="2" className="text-center"><span className="customicons-trophy-icon mr-1"></span> 3rd Nikunj Savani</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td colSpan="2" className="text-center">Marks 100 / 145 in 57min. 0sec.</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default MockTestResults;