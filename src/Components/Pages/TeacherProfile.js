import React, { Component } from 'react';
import { avatarimg, quesimg, marksimg, timeimg, negativeimg, userIcon } from './Image';
import Header from './Header';
import Footer from './Footer';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TeacherService from '../../Core/Services/Teacher/BsTeacherGetList';
import ReactHtmlParser from 'react-html-parser';

class TeacherProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teacherProfile: [],
            property: null
        }
    }

    componentDidMount() {
        document.title = "Igyanam - Teachers Profile";
        window.scrollTo(0, 0);
        TeacherService.getByIdTeachers(this.props.match.params.id)
            .then(data => {
                this.setState({ teacherProfile: data, property: data.property });
                console.log(this.state.teacherProfile)
            })
    }

    render() {
        const { teacherProfile, property } = this.state;
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
                                                <div className="col-lg-4 col-sm-6 d-flex" >
                                                    <div className="white-box animate slideIn" > <a href="#">
                                                        <h3 className="mt-head">SPEED KOTA  Foundation Test</h3>
                                                    </a>
                                                        <div className="teacher-date-text mb-3">10 June 2020</div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={quesimg} width="40" height="40" className="mr-3" alt="quesimg" />
                                                                    <div className="media-body">
                                                                        <div className="mt-0">50 </div>
                                                                            Questions
                                                                        </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={marksimg} width="40" height="40" className="mr-3" alt="marksimg" />
                                                                    <div className="media-body">
                                                                        <div className="mt-0">200  </div>
                                                                        Marks
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={timeimg} width="40" height="40" className="mr-3" alt="timeimg" />
                                                                    <div className="media-body">
                                                                        <div className="mt-0">60 </div>
                                                                        Minutes
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="media mb-3">
                                                                    <img src={negativeimg} width="40" height="40" className="mr-3" alt="negativeimg" />
                                                                    <div className="media-body">
                                                                        <div className="mt-0">1 </div>
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