import React, { Component } from 'react'
import * as moment from 'moment'
import AnswerUI from '../Dashboard/AnswerUI'
import Header from './Header';
import Footer from './Footer';
import { logo, negativeimg, timeimg, marksimg, quesimg, avatarimg, userIcon } from './Image'
import axios from '../../axiosInst'

export default class AnswerSheet extends Component {
    _isMounted = false;
    _questions = [];

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

    getQuestionaAnswered(question, examresult) {
        return examresult.answers.find(answer => answer.questionid == question._id);
    }

    render() {
        const { loading, examresult } = this.state
        let mappedQuestions = examresult && examresult.examid.questions.map((question) => {
            return {
                ...question,
                questionanswered: this.getQuestionaAnswered(question, examresult)
            }
        });

        return (
            <React.Fragment>
                <Header />
                <React.Fragment>
                    <main className="flex-shrink-0">

                        <section className="common-block">
                            <div className="container">

                                <div className="row">
                                    <div className="col-lg-12">
                                        {!loading &&
                                            <React.Fragment>
                                                <div className="white-box-no-animate p-20 animate slideIn">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <h2> {examresult.examid.title}</h2>
                                                            <div className="mb-3"><span className="mr-4">{moment(examresult.examid.createdAt).format("D MMMM YYYY h:mm A")}</span> <span
                                                                className="mt-price">Free</span> </div>
                                                            <div className="mt-tags mb-4"><a href="#">NEET</a> <a href="#">Maths</a> </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="white-box-no-animate mtd-topbar animate slideIn" >
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="row">
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="media mb-20">
                                                                        <img src={quesimg} width="40" height="40" className="mr-3" alt="Question" />
                                                                        <div className="media-body">
                                                                            {examresult.examid.questions.length}
                                                                            <div className="mt-0"></div>
                                                                        Questions
                                                                </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="media mb-20">
                                                                        <img src={marksimg} width="40" height="40" className="mr-3" alt="Marks" />
                                                                        <div className="media-body">
                                                                            <div className="mt-0">{examresult.examid.totalmarks}  </div>
                                                                            Marks
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="media mb-20">
                                                                        <img src={negativeimg} width="40" height="40" className="mr-3" alt="Negative" />
                                                                        <div className="media-body">
                                                                            <div className="mt-0">{examresult.examid.totalnegativemarks} </div>
                                                                                    Negative
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="media mb-20">
                                                                        <img src={timeimg} width="40" height="40" className="mr-3" alt="times" />
                                                                        <div className="media-body">
                                                                            <div className="mt-0">{examresult.examid.time} </div>
                                                                                    Minutes
                                                                </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="white-box-no-animate mtd-topbar animate slideIn" >
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="row">
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="media mb-20">
                                                                        <img src={quesimg} width="40" height="40" className="mr-3" alt="Question" />
                                                                        <div className="media-body">
                                                                            {examresult.attemptedquestions}
                                                                            <div className="mt-0"></div>
                                                                Attempted Questions
                                                                </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="media mb-20">
                                                                        <img src={marksimg} width="40" height="40" className="mr-3" alt="Marks" />
                                                                        <div className="media-body">
                                                                            <div className="mt-0">{examresult.markesobtained}  </div>
                                                                            Marks Obtained
                                                                </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="media mb-20">
                                                                        <img src={negativeimg} width="40" height="40" className="mr-3" alt="Negative" />
                                                                        <div className="media-body">
                                                                            <div className="mt-0">{examresult.totalnegativemarks} </div>
                                                                                    Negative
                                                                </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="media mb-20">
                                                                        <img src={timeimg} width="40" height="40" className="mr-3" alt="times" />
                                                                        <div className="media-body">
                                                                            <div className="mt-0">{examresult.timetaken} </div>
                                                                                    Minutes Taken
                                                                </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {mappedQuestions && mappedQuestions.map(question =>
                                                    <AnswerUI key={question._id}
                                                        question={question} />
                                                )}
                                            </React.Fragment>
                                        }
                                        {loading &&
                                            <div colSpan="4" className="text-center">
                                                <span className="spinner-border spinner-border-lg align-center"></span>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </React.Fragment>

                <Footer />
            </React.Fragment>
        )
    }
}
