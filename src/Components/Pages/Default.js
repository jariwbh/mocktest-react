import React, { Component } from "react";
import TeacherProfile from "./TeacherProfile";
import Signin from './Signin';
import Signup from './Signup';
import Logout from './Logout';
import Contactus from './Contactus';
import Faqs from "./Faqs";
import TermOfService from "./TermsofService";
import PrivacyPolice from "./PrivacyPolicy";
import ForgetPassword from "./ForgetPassword";
import Teachers from "./Teachers";
import MockTestDetails from "./MockTestDetails";
import MockTestList from './MockTestList';
import MockTestResults from "./MockTestResults";
import MockTestStartTest from "./MockTestStartTest";
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import Test from "./Test";
import Dashboard from "./Dashboard";
import StudentProfile from "./StudentProfile";

import {ProtectedRoute} from "./ProtectedRoute";

class Default extends Component {
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
                <Switch>
                    <Route strict exact path="/" component={Home} />
                    {/* <Route exact path="/Teachers" component={Teachers} /> */}
                    <Route exact path="/Faqs" component={Faqs} />
                    <Route exact path="/Contactus" component={Contactus} />
                    <Route exact path="/Signup" component={Signup} />
                    <Route exact path="/Signin" component={Signin} />
                    <Route exact path="/Logout" component={Logout} />
                    <Route exact path="/TermsofService" component={TermOfService} />
                    <Route exact path="/PrivacyPolicy" component={PrivacyPolice} />
                    <Route exact path="/MockTestDetails" component={MockTestDetails} />
                    <Route exact path="/MockTestResults" component={MockTestResults} />
                    <Route exact path="/MockTestList" component={MockTestList} />
                    <Route exact path="/MockTestStartTest" component={MockTestStartTest} />
                    <Route exact path="/ForgetPassword" component={ForgetPassword} />
                    <Route exact path="/TeacherProfile" component={TeacherProfile} />
                    <Route exact path="/DashBoard" component={Dashboard} />
                    <Route exact path="/StudentProfile" component={StudentProfile} />
                    <Route exact path="/Test" component={Test} />

                    <ProtectedRoute path="/Teachers" component={Teachers} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Default;
