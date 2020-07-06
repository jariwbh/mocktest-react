import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import TeacherService from '../../Core/Services/Teacher/BsTeacherGetList'
import { avatarimg } from './Image';



import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
//require("bootstrap/less/bootstrap.less");



class Test extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            perPage: 5,
            teachers: [],
            search: null,
            errorMessage: null,
            activePage: 1,
            totalPages:0
        };
      }
      receivedData() {
        document.title = "Igyanam - Teachers";
        window.scrollTo(0, 0);
        this._isMounted = true;
        const body = { "search": [] }
        TeacherService.getAllTeachers(body)
            .then(data => {
                if (data != null) {
                    if (this._isMounted) {
                        this.setState({totalPages:data.length});
                        //const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                        const slice = data.slice((this.state.activePage - 1)  * this.state.perPage, this.state.activePage * this.state.perPage)
                        this.setState({ teachers: slice });
                    }
                }
                else {
                    alert('fetching error failed. Try later!')
                }
            })
      }
      componentDidMount() {
        this.receivedData();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({ search: keyword })
    }
      handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber,offset : pageNumber});
        this.receivedData();
      }

    render() {
        const { teachers } = this.state;
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
                                            <img src={val.profileimage === null ? avatarimg : val.profileimage} className="rounded-circle img-fluid" alt="Avtar" />
                                        </div>
                                        <div className="media-body mt-auto mb-auto">
                                            <Link to="/TeacherProfile" className="t-name">{val.property.fullname}</Link>
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

        return (           
            <React.Fragment>
                 <Header />
                <h1>Hello</h1>
                {teachersList}
                {console.log(teachersList.length)}
                <div>
        <Pagination
          activePage={this.state.activePage}
          //activePage={0}
          itemsCountPerPage={this.state.perPage}
          totalItemsCount={this.state.totalPages}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
      <Footer />
            </React.Fragment>
        );
    }
}

export default Test;






