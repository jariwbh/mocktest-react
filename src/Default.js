import React, { Component } from "react";
import TeacherProfile from "./Components/TeacherProfile";
//import Header from "./Header";
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Contactus from './Components/Contactus';
import Faqs from "./Components/Faqs";
import TermOfService from "./Components/TermsofService";
import PrivacyPolice from "./Components/PrivacyPolicy";
//import Footer from "./Footer";
import ForgetPassword from "./Components/ForgetPassword";
import Teachers from "./Components/Teachers";
import MockTestDetails from "./Components/MockTestDetails";
import MockTestList from './Components/MockTestList';
import MockTestResults from "./Components/MockTestResults";
import MockTestStartTest from "./Components/MockTestStartTest";
import Home from './Components/Home';
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
