import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';

class MockTestResults extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        document.title = "Igyanam";
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <main className="flex-shrink-0">
                    <section className="common-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12" >
                                    <div className="white-box-no-animate p-20 animate slideIn" >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h2> SPEED KOTA  Foundation Test</h2>
                                                <div className="mb-4">10 June 2020 05:12 PM   </div>
                                                <div className="mt-username" >
                                                    Amol Patel
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
                                                            <td>25 / 37</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-success">Correct Answers	</td>
                                                            <td>18 <a href="#" className="text-success ml-3">View</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-danger">Incorrect Answers</td>
                                                            <td>6 <a href="#" className="text-danger ml-3">View</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td >Duration</td>
                                                            <td>0min. 52sec.</td>
                                                        </tr>
                                                        <tr>
                                                            <td >Marks</td>
                                                            <td>12.00 / 145</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div><a href="#" className="btn btn-success btn-lg xs-mrb30"><span className="customicons-answersheet-icon"></span> Answer Sheet</a> <a href="#" className="btn btn-primary btn-lg xs-mrb30 ml-1"><span className="customicons-printer-icon"></span> Print</a></div>
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
                        </div>
                    </section>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default MockTestResults;