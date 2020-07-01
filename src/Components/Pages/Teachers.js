import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import getTeachers from '../../Core/Services/TeacherService'

class Teachers extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            teachers: [],
            search: null,
            errorMessage: null,
        };
    }

    componentDidMount() {
        document.title = "Igyanam - Teachers";
        window.scrollTo(0, 0);
        this._isMounted = true;

        getTeachers.getAllTeachers()
            .then(response => response.json())
            .then(data => {
                if (this._isMounted) {
                    this.setState({ teachers: data });
                }
            })
            .catch(error => {
                this.setState({ errorMessage: error });
                console.error('There was an error!', error);
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({ search: keyword })
    }

    render() {
        const { teachers } = this.state;
        const teachersList = teachers.filter((obj) => {
            if (this.state.search == null)
                return obj
            else if (obj.fullname.toLowerCase().includes(this.state.search.toLowerCase()) || obj.property.qualification.toLowerCase().includes(this.state.search.toLowerCase())) {
                return obj
            }
        }).map((val) => (
            < div className="row" key={val._id} >
                <div className="col-lg-12" >
                    <div className="white-box-no-animate animate slideIn" >
                        <div className="teacher-block">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="media mb-3">
                                        <div className="t-avatar-img-main mr-4">
                                            <img src={val.profileimage} className="rounded-circle img-fluid" alt="Avtar" />
                                        </div>
                                        <div className="media-body mt-auto mb-auto">
                                            <Link to="/TeacherProfile" className="t-name">{val.property.fullname}</Link>
                                            <div className="">{val.property.qualification}</div>
                                            <div className="t-mock-test">Mock Test (90)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8" >
                                    <div className="mt-tags" >
                                        {val.property.subject.map((subject, index) => (
                                            <a href="#" key={index} >{subject === null ? '' : subject}</a>
                                        ))}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    {val.property.headline === null ? '' : val.property.headline}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        ))
        console.log(teachers)
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
                                            <input name="search" className="form-control" onChange={(e) => this.searchSpace(e)} placeholder="Search Teacher" type="search" />
                                            {/* <input name="search" className="form-control" value="" placeholder="Search Teacher" type="search" /> */}
                                            <span className="mt-btn">
                                                <button type="submit" ><i className="customicons-search-icon"></i></button>
                                            </span>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {teachersList}
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

export default Teachers;






