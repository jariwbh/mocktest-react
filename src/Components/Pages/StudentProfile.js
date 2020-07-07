import React, { Component } from 'react'
import { avatarimg, quesimg, marksimg, timeimg, negativeimg } from './Image';
import Header from './Header';
import Footer from './Footer';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export class StudentProfile extends Component {

    constructor(props) {
        super(props);
    }

    handleFormSubmit = (event) =>{
            console.log('button press');
    }
    render() {
        return (
            <React.Fragment>
                {/* <Header /> */}
                <main className="flex-shrink-0">
                    <section className="common-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                <h2 className="mb-3">Change Password</h2>
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12 d-flex" >
                                        <div className="white-box-no-animate p-20">
                                            <div className="form-group">
                                            <label >Old Password</label>
                                            <input type="password" className="form-control"></input>
                                            </div>
                                            <div className="form-group">
                                            <label>New Password</label>
                                            <input type="password" className="form-control" ></input>
                                            </div>
                                            <div className="form-group">
                                            <label >Confirm New Password</label>
                                            <input type="password" className="form-control"></input>
                                            </div>
                                            <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Change Password</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                <h2 className="mb-3">Edit Profile</h2>
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12 d-flex" >
                                        <div className="white-box-no-animate p-20">
                                            <div className="form-group">
                                            <label >Full Name</label>
                                            <input type="text" className="form-control"></input>
                                            </div>
                                            <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control"></input>
                                            </div>
                                            <div className="form-group">
                                            <label >Mobile</label>
                                            <input type="text" className="form-control" ></input>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Update</button>
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
        )
    }
}

export default StudentProfile;
