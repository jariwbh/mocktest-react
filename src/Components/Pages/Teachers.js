import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import TeacherService from '../../Core/Services/Teacher/BsTeacherGetList'
import { userIcon } from './Image';
import Pagination from "react-js-pagination";

class Teachers extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            teachers: [],
            search: null,
            errorMessage: null,
            offset: 0,
            perPage: 5,
            activePage: 1,
            totalPages: 0,
            loading: true,
        };
    }

    receivedData() {
        this._isMounted = true;
        const body = { "search": [] }
        TeacherService.getAllTeachers(body)
            .then(data => {
                if (this._isMounted) {
                    this.setState({ loading: false, totalPages: data.length });
                    const slice = data.slice((this.state.activePage - 1) * this.state.perPage, this.state.activePage * this.state.perPage)
                    this.setState({ loading: false, teachers: slice });
                }
            })
    }

    componentDidMount() {
        document.title = this.props.title;
        window.scrollTo(0, 0);
        this.receivedData();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handlePageChange(pageNumber) {
        window.scrollTo(0, 0);
        // console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber, offset: pageNumber });
        this.receivedData();
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({ search: keyword })
    }

    render() {
        const { teachers, loading } = this.state;
        const teachersList = teachers.filter((obj) => {
            if (this.state.search == null)
                return obj
            else if (obj.fullname.toLowerCase().includes(this.state.search.toLowerCase())) {
                return obj
            }
        }).map((val) => (
            <div className="row" key={val._id} >
                <div className="col-lg-12" >
                    <div className="white-box-no-animate animate slideIn" >
                        <div className="teacher-block">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="media mb-3">
                                        <div className="t-avatar-img-main mr-4">
                                            {val.profileimage != null ? <img src={val.profileimage} className="rounded-circle img-fluid" alt="" /> :
                                                <img src={userIcon} className="rounded-circle img-fluid" alt="" />}
                                        </div>
                                        <div className="media-body mt-auto mb-auto">
                                            <Link to={"/TeacherProfile/" + val._id} className="t-name">{val.property.fullname}</Link>
                                            <div className="">{val.property.qualification === null ? '' : val.property.qualification}</div>
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
            </div>
        ))
        //console.log(teachers)
        return (
            <React.Fragment>
                <Header />
                {!loading &&
                    <main className="flex-shrink-0">
                        <section className="common-block">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3">
                                        <div className="mt-search mb-5" >
                                            <form action="#" className="mt-form">
                                                <input name="search" className="form-control" onChange={(e) => this.searchSpace(e)} placeholder="Search Teacher" type="search" />
                                                <span className="mt-btn">
                                                    <button type="submit" ><i className="customicons-search-icon"></i></button>
                                                </span>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {teachersList}
                                <nav>
                                    <ul className="pagination justify-content-center">
                                        <Pagination
                                            prevPageText='Previous'
                                            nextPageText='Next'
                                            activePage={this.state.activePage}
                                            itemsCountPerPage={this.state.perPage}
                                            totalItemsCount={this.state.totalPages}
                                            pageRangeDisplayed={5}
                                            onChange={this.handlePageChange.bind(this)}
                                            itemClass="page-item"
                                            linkClass="page-link"
                                        />
                                    </ul>
                                </nav>
                            </div>
                        </section>
                    </main>
                }
                {loading &&
                    <div colSpan="4" className="text-center">
                        <span className="spinner-border spinner-border-lg align-center"></span>
                    </div>
                }
                <Footer />
            </React.Fragment>
        );
    }
}

export default Teachers;






