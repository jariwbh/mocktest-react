import React, { Component } from "react";
import TeacherProfile from "./TeacherProfile";
import Signin from './Signin';
import Signup from './Signup';
import Logout from './Logout';
import Contactus from './Contactus';
import Faqs from "./Faqs";
import TermOfService from "./TermsofService";
import PrivacyPolice from "./PrivacyPolicy";
import ForgetPassword from "./ForgetPassword/ForgetPassword";
import Teachers from "./Teachers";
import MockTestDetails from "./MockTestDetails";
import MockTestList from './MockTestList';
import MockTestResults from "./MockTestResults";
import MockTestStartTest from "./MockTestStartTest";
import Home from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import Test from "./Test";
import Demo from "./Demo"
import DemoSlider from "./DemoSlider"
import Dashboard from "./Dashboard";
import StudentProfile from "./StudentProfile";
import { ProtectedRoute } from "./ProtectedRoute";
import ForgetPassVerifyMobile from "./ForgetPassword/ForgetPassVerifyMobile";
import NewPassword from "./ForgetPassword/NewPassword";
import AnswerSheet from "./AnswerSheet";
import ClientService from '../../Core/Services/Client/ClientServices'
import { headerset, getheader } from "../../Core/CustomerHeader";

class Default extends Component {

    constructor() {
        //console.log('const')
        super();
        this.state = {
            customerDetails: [],
            tabTitle: null,
        }
        this.getdata();
    }

    getdata() {
        //console.log('getdata')
        // const TOKEN_KEY = 'header'
        // const localdata = localStorage.getItem(TOKEN_KEY);
        //if (localdata == null) {
        //console.log('header')
        ClientService.getClientDetails()
            .then(data => {
                //console.log(data)
                this.setState({ customerDetails: data, tabTitle: data.branchname })
                headerset(this.state.customerDetails)
            })
        // }
        // else {
        //     this.state.tabTitle = getheader()
        // }
    }

    render() {
        //console.log('render')
        const { tabTitle } = this.state;
        //console.log('tabTitle', tabTitle)
        //console.log('branchname', tabTitle.branchname)
        if (tabTitle != null) {
            return (
                <React.Fragment>
                    <Switch>
                        <Route strict exact path="/"
                            render={props => (
                                <Home {...props} component={Home} title={`${tabTitle != null ? tabTitle : tabTitle.branchname}`} />
                            )}
                        />

                        <Route exact path="/Teachers"
                            render={props => (
                                <Teachers {...props} component={Teachers} title={`${tabTitle != null ? tabTitle : tabTitle.branchname} - Teachers`} />
                            )}
                        />

                        <Route exact path="/Faqs"
                            render={props => (
                                <Faqs {...props} component={Faqs} title={`${tabTitle != null ? tabTitle : tabTitle.branchname} - Faqs`} />
                            )}
                        />

                        <Route exact path="/Contactus"
                            render={props => (
                                <Contactus {...props} component={Contactus} title={`${tabTitle != null ? tabTitle : tabTitle.branchname} - Contact Us`} />
                            )}
                        />

                        <Route exact path="/Signup"
                            render={props => (
                                <Signup {...props} component={Signup} title={`${tabTitle} - Sign Up`} />
                            )}
                        />

                        <Route exact path="/Signin"
                            render={props => (
                                <Signin {...props} component={Signin} title={`${tabTitle} - Sign In`} />
                            )}
                        />

                        <Route exact path="/TermsofService"
                            render={props => (
                                <TermOfService
                                    {...props} component={TermOfService} title={`${tabTitle} - Terms of Service`} />
                            )}
                        />

                        <Route exact path="/PrivacyPolicy"
                            render={props => (
                                <PrivacyPolice
                                    {...props} component={PrivacyPolice} title={`${tabTitle} - Privacy Policy`} />
                            )}
                        />

                        <Route exact path="/MockTestDetails/:id"
                            render={props => (
                                <MockTestDetails {...props} component={MockTestDetails} title={`${tabTitle} - MockTest`} />
                            )}
                        />

                        <Route exact path="/MockTestList"
                            render={props => (
                                <MockTestList {...props} component={MockTestList} title={`${tabTitle} - MockTest`} />
                            )}
                        />

                        <Route exact path="/ForgetPassword"
                            render={props => (
                                <ForgetPassword {...props} component={ForgetPassword} title={`${tabTitle} - Forget Password`} />
                            )}
                        />

                        <Route exact path="/TeacherProfile/:id"
                            render={props => (
                                <TeacherProfile {...props} component={TeacherProfile} title={`${tabTitle} - Teachers Profile`} />
                            )}
                        />

                        <Route exact path="/ForgetPassVerifyMobile/:id"
                            render={props => (
                                <ForgetPassVerifyMobile {...props} component={ForgetPassVerifyMobile} title={`${tabTitle} - Forget Password`} />
                            )}
                        />

                        <Route exact path="/NewPassword/:id"
                            render={props => (
                                <NewPassword {...props} component={NewPassword} title={`${tabTitle} - Forget Password`} />
                            )}
                        />

                        <Route exact path="/Test" component={Test} />
                        <Route exact path="/Demo" component={Demo} />
                        <Route exact path="/DemoSlider/:id" component={DemoSlider} />
                        <Route exact path="/Logout" component={Logout} />

                        {/*-------ProtectedRoute--------*/}
                        <ProtectedRoute path="/Dashboard" component={Dashboard} title={`${tabTitle} - Dashboard`} />

                        <ProtectedRoute exact path="/StudentProfile" component={StudentProfile} title={`${tabTitle} - Student Profile`} />

                        <ProtectedRoute exact path="/MockTestStartTest/:id" component={MockTestStartTest} title={`${tabTitle} - MockTest`} />

                        <ProtectedRoute exact path="/MockTestResults/:id" component={MockTestResults} title={`${tabTitle} - MockTest Result`} />

                        <ProtectedRoute exact path="/AnswerSheet/:id" component={AnswerSheet} title={`${tabTitle} - Answer Sheet`} />

                    </Switch>
                </React.Fragment>
            );
        }
        else {
            return (
                <span></span>
            );
        }
    }
}

export default Default;
