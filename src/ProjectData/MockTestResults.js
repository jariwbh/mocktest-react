import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';

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
                <main class="flex-shrink-0">
                    <section class="common-block">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12" >
                                    <div class="white-box-no-animate p-20 animate slideIn" >
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <h2> SPEED KOTA  Foundation Test</h2>
                                                <div class="mb-4">10 June 2020 05:12 PM   </div>
                                                <div class="mt-username" >
                                                    Amol Patel
					                        </div>
                                                <table class="table table-bordered mb-5">
                                                    <thead>
                                                        <tr>
                                                            <th colspan="2" class="text-center"><span class="customicons-trophy-icon mr-1"></span> Rank 1</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td width="50%">Questions Attempted	</td>
                                                            <td>25 / 37</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-success">Correct Answers	</td>
                                                            <td>18 <a href="#" class="text-success ml-3">View</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-danger">Incorrect Answers</td>
                                                            <td>6 <a href="#" class="text-danger ml-3">View</a></td>
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
                                                <div><a href="#" class="btn btn-success btn-lg xs-mrb30"><span class="customicons-answersheet-icon"></span> Answer Sheet</a> <a href="#" class="btn btn-primary btn-lg xs-mrb30 ml-1"><span class="customicons-printer-icon"></span> Print</a></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="white-box-no-animate p-20 animate slideIn" >
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <table class="table table-bordered mb-5">
                                                    <thead>
                                                        <tr>
                                                            <th colspan="2" class="text-center"><span class="customicons-trophy-icon mr-1"></span> 2nd Roshan Patel</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td colspan="2" class="text-center">Marks 100 / 145 in 57min. 0sec.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table class="table table-bordered mb-5">
                                                    <thead>
                                                        <tr>
                                                            <th colspan="2" class="text-center"><span class="customicons-trophy-icon mr-1"></span> 3rd Nikunj Savani</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td colspan="2" class="text-center">Marks 100 / 145 in 57min. 0sec.</td>
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