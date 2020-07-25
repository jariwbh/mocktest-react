import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import MockTestService from '../../Core/Services/MockTest/BsMockTest';
import Pagination from "react-js-pagination";
import MockTestCardUI from '../UI/MockTestCard/MockTestCardUI';

class MockTestList extends Component {
    _isMounted = false;
    constructor() {
        super();
        this.state = {
            mockTest: [],
            search: null,
            offset: 0,
            perPage: 6,
            activePage: 1,
            totalPages: 0,
            loading: true
        };
    }

    receivedData() {
        this._isMounted = true;
        const MockTestBody = {
            "search": [{ "fieldname": "status", "fieldvalue": "publish", "criteria": "eq", "datatype": "text" }],
            "sort": { "createdAt": -1 }
        }
        MockTestService.getAllMockTest(MockTestBody)
            .then(data => {
                if (data != null) {
                    if (this._isMounted === true) {
                        this.setState({ loading: false, totalPages: data.length });
                        const slice = data.slice((this.state.activePage - 1) * this.state.perPage, this.state.activePage * this.state.perPage)
                        this.setState({ loading: false, mockTest: slice });
                    }
                }
                else {
                    console.log('fetching error failed. Try later!')
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
        //console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber, offset: pageNumber });
        this.receivedData();
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({ search: keyword })
    }

    render() {
        const { mockTest, loading } = this.state;
        //console.log(mockTest)
        const mockTestList = mockTest.filter((obj) => {
            if (this.state.search == null)
                return obj
            else if (obj.title.toLowerCase().includes(this.state.search.toLowerCase()) || obj.addedby.fullname.toLowerCase().includes(this.state.search.toLowerCase())) {
                return obj
            }
        }).map((val) => (
            <MockTestCardUI key={val._id}
                mockTest={val} />
        ))
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
                                            <input name="search" className="form-control" onChange={(e) => this.searchSpace(e)} placeholder="Select Exams" type="search" />
                                            <span className="mt-btn">
                                                <button type="submit"><i className="customicons-search-icon"></i></button>
                                            </span>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {!loading &&
                                <React.Fragment>
                                    <div className="row">
                                        {mockTestList}
                                    </div>
                                </React.Fragment>
                            }
                            {loading &&
                                <div colSpan="4" className="text-center">
                                    <span className="spinner-border spinner-border-lg align-center"></span>
                                </div>
                            }
                            <nav >
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
                <Footer />
            </React.Fragment>
        );
    }
}

export default MockTestList;