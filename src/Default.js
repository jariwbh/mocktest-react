import React, { Component } from "react";
import TeacherProfile from "./ProjectData/TeacherProfile";
//import Header from "./Header";
import Signin from './ProjectData/Signin';
import Signup from './ProjectData/Signup';
import Contactus from './ProjectData/Contactus';
import Faqs from "./ProjectData/Faqs";
import TermOfService from "./ProjectData/TermsofService";
import PrivacyPolice from "./ProjectData/PrivacyPolicy";
//import Footer from "./Footer";
import ForgetPassword from "./ProjectData/ForgetPassword";
import Teachers from "./ProjectData/Teachers";
import MockTestDetails from "./ProjectData/MockTestDetails";
import MockTestList from './ProjectData/MockTestList';
import MockTestResults from "./ProjectData/MockTestResults";
import MockTestStartTest from "./ProjectData/MockTestStartTest";
import Home from './ProjectData/Home';
import { Switch, Route } from 'react-router-dom';

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
                    <Route exact path="/Teachers" component={Teachers} />
                    <Route exact path="/Faqs" component={Faqs} />
                    <Route exact path="/Contactus" component={Contactus} />
                    <Route exact path="/Signup" component={Signup} />
                    <Route exact path="/Signin" component={Signin} />
                    <Route exact path="/TermsofService" component={TermOfService} />
                    <Route exact path="/PrivacyPolicy" component={PrivacyPolice} />
                    <Route exact path="/MockTestDetails" component={MockTestDetails} />
                    <Route exact path="/MockTestResults" component={MockTestResults} />
                    <Route exact path="/MockTestList" component={MockTestList} />
                    <Route exact path="/MockTestStartTest" component={MockTestStartTest} />
                    <Route exact path="/ForgetPassword" component={ForgetPassword} />
                    <Route exact path="/TeacherProfile" component={TeacherProfile} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Default;
