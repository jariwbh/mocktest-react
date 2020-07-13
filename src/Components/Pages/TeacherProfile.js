import React, { Component } from 'react';
import { avatarimg, quesimg, marksimg, timeimg, negativeimg, userIcon } from './Image';
import Header from './Header';
import Footer from './Footer';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TeacherService from '../../Core/Services/Teacher/BsTeacherGetList';
import ReactHtmlParser from 'react-html-parser';
import MockTestService from '../../Core/Services/MockTest/BsMockTest';
import * as moment from 'moment';
import { Link } from 'react-router-dom';

class TeacherProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teacherProfile: [],
            property: null,
            teacherMockTest: null,
            teacherId: this.props.match.params.id,
        }
    }

    componentDidMount() {
        document.title = "Igyanam - Teachers Profile";
        window.scrollTo(0, 0);
        //teacherId = ;
        const { teacherId } = this.state;
        TeacherService.getByIdTeachers(teacherId)
            .then(data => {
                this.setState({ teacherProfile: data, property: data.property });
                console.log(this.state.teacherProfile)
            })

        const TeacherMockTestBody = {
            "search": [
                {
                    "searchfield": "addedby",
                    "searchvalue": teacherId,
                    "criteria": "eq",
                    "datatype": "ObjectId"
                }
            ]
        }

        MockTestService.getByTeacherIdMockTest(TeacherMockTestBody)
            .then(data => {
                if (data != null) {
                    this.setState({ teacherMockTest: data });
                    console.log(this.state.teacherMockTest);
                }
                else {
                    console.log('fetching error failed. Try later!')
                }
            })
    }

    render() {
        const { teacherProfile, property, teacherMockTest } = this.state;
        return (
            <React.Fragment>
                <Header />
                <main className="flex-shrink-0" >
                    <section className="common-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12" >
                                    <div className="white-box-no-animate mtd-topbar animate slideIn" >
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="media mb-20">
                                                    <div className="tp-avatar-img-main mr-4">
                                                        {teacherProfile.profileimage != null ? <img src={teacherProfile.profileimage} className="rounded-circle img-fluid" alt="" /> :
                                                            <img src={userIcon} className="rounded-circle img-fluid" alt="" />}
                                                    </div>
                                                    <div className="media-body mt-auto mb-auto">
                                                        <div className="tp-name ">{
                                                            (property != null ? property.fullname : null)
                                                        }</div>
                                                        <div className="tp-degree">{(property != null ? property.qualification : null)}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="mt-tags">
                                                    {
                                                        (property != null ?
                                                            (property.subject != null ? property.subject.map((sub, i) => (
                                                                <a href="#" key={i} >{sub === null ? '' : sub}</a>
                                                            )) : null)
                                                            : null)
                                                    }
                                                    {/* {
                                                        (property.subject != null ? property.subject.map((sub, i) => (
                                                            <a href="#" key={i} >{sub === null ? '' : sub}</a>
                                                        )) : null)} */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Tabs className="white-box-no-animate tp-tab animate slideIn nav nav-pills" defaultActiveKey="home" id="pills-tab" role="tablist">
                                        <Tab className="nav-link" eventKey="home" data-toggle="pill" title="About Me" role="tab" aria-controls="pills-aboutme" aria-selected="true">
                                            <div className="tab-pane fade show active white-box-no-animate p-20" id="pills-aboutme" role="tabpanel" aria-labelledby="pills-aboutme-tab">
                                                {ReactHtmlParser((property != null ? property.aboutme : null))}
                                            </div>
                                        </Tab>

                                        <Tab className="nav-link" eventKey="MockTest" title="MockTest" data-toggle="pill" role="tab" aria-controls="pills-mocktest" aria-selected="false">
                                            <div className="row">
                                                {teacherMockTest === null ? '' :
                                                    teacherMockTest.slice(0, 6).map(obj => (
                                                        <div className="col-lg-4 col-sm-6 d-flex" key={obj._id} >
                                                            <div className="white-box animate slideIn" >
                                                                <Link to={'/MockTestStartTest/' + obj._id}>
                                                                    <h3 className="mt-head">{obj.title}</h3>
                                                                </Link>
                                                                <div className="teacher-date-text mb-3">  {moment(obj.createdAt).format("D MMMM YYYY")}</div>
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <div className="media mb-3">
                                                                            <img src={quesimg} width="40" height="40" className="mr-3" alt="quesimg" />
                                                                            <div className="media-body">
                                                                                <div className="mt-0">{obj.questions.length} </div>
                                                                            Questions
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="media mb-3">
                                                                            <img src={marksimg} width="40" height="40" className="mr-3" alt="marksimg" />
                                                                            <div className="media-body">
                                                                                <div className="mt-0">{obj.totalmarks}  </div>
                                                                        Marks
                                                                    </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="media mb-3">
                                                                            <img src={timeimg} width="40" height="40" className="mr-3" alt="timeimg" />
                                                                            <div className="media-body">
                                                                                <div className="mt-0">{obj.time} </div>
                                                                        Minutes
                                                                    </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="media mb-3">
                                                                            <img src={negativeimg} width="40" height="40" className="mr-3" alt="negativeimg" />
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
                                                                {/* <div className="mt-tags"><a href="#" >NEET</a> <a href="#" >Maths</a> </div> */}
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default TeacherProfile;