import React, { Component } from 'react';
import { avatarimg, quesimg, marksimg, timeimg, negativeimg, logo, userIcon } from './Image';
import { Link } from 'react-router-dom';
import MockTestService from '../../Core/Services/MockTest/BsMockTest';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import $ from 'jquery'; 
import swal from 'sweetalert';

class MockTestDetails extends Component {
    _isMounted = false;
    answers=[];
    examObject={};
    starttime = new Date();
    IsTimerStart = true;
    constructor() {
        super();
        this.state = {
            mockTestData: [],
            addedby: [],
            property: [],
            mockTestArray: null,
            index: 0,
            disabledNext: false,
            disabledPrev: true,
            minutes: 0,
            seconds: 0,
            userDetails:'',
            questionanswers:[]          

        };
    }
     get_Diff_minutes() {
         let maintDate = new Date();
         let dt1 =  new Date(new Date(maintDate.getFullYear(),maintDate.getMonth(),maintDate.getDate()).getTime() + this.state.mockTestData.time*60000);            
         let dt2 = new Date(new Date(maintDate.getFullYear(),maintDate.getMonth(),maintDate.getDate()).getTime() + this.state.minutes*60000 + this.state.seconds * 1000);
         let difference = dt1.getTime() - dt2.getTime(); // This will give difference in milliseconds
         let resultInMinutes = Math.round(difference / 60000);
         let resultInSeconds = Math.round(difference / 1000);

         return resultInMinutes;
        
        //return new Date(dt.getTime() + minutes*60000);
    }

    onSumbitClick()
    {
 
        swal({
            title: "Are you sure?",
            text: "Once Sumbit, you will not be able to recover this mock test!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                this.prepareRelustObjectonSumbit();
            }
          });
    }
    prepareRelustObjectonSumbit()
    {
                this.examObject.timetaken = this.get_Diff_minutes();
                this.IsTimerStart = false;
                //let timetaken = (this.state.mockTestData.time - (this.state.minutes +':'+ this.state.seconds));       
                let endtime = new Date();
                const allMockTestArray = this.state.mockTestArray;
                this.examObject.attemptedquestions = 0;                
                this.examObject.unattemptedquestions = this.state.mockTestArray.length - this.examObject.attemptedquestions;
            
                let correctanswers = 0;
                let incorrectanswers = 0;
                let totalpositivemarks = 0;
                let totalnegativemarks = 0;
                let totalmarks = 0;

                $.each(allMockTestArray, function () {
                    totalmarks += this.mark;
                });

                console.log('this.examObject = ',this.examObject.correctanswers);

                const tempAnswerobj = [...this.answers];
                $(tempAnswerobj).each(function (index,val){
                
                    let examibjOption = allMockTestArray.find(x=>x._id == val.questionid);

                    if(examibjOption && examibjOption.options)
                    {
                        if(examibjOption.questiontype == 'Multi Select')
                        {
                            let CorrectOptions =[];
                            examibjOption.options.forEach(x => {if (x.iscorrect == true) CorrectOptions.push(x)});

                            let isValidTotal = 0;

                            $.each(val.answerid, function (index,Optionval) {

                            let isCorrectOpt = CorrectOptions.find(x=>x.option == Optionval);

                            if(isCorrectOpt)
                            {
                                isValidTotal += 1;
                            }
                            });

                            if((val.answerid.length == CorrectOptions.length) && (isValidTotal == CorrectOptions.length))
                            {
                                correctanswers = correctanswers + 1;
                                totalpositivemarks = totalpositivemarks + examibjOption.mark;
                            }
                            else
                            {
                                incorrectanswers = incorrectanswers + 1;
                                totalnegativemarks = totalnegativemarks + examibjOption.negativemark;
                            }
                        }
                        else
                        {
                            var optionObj = examibjOption.options.find(x=>x.iscorrect == true);

                            if(optionObj.option == val.answerid[0])
                            {
                                correctanswers = correctanswers + 1;
                                totalpositivemarks = totalpositivemarks + examibjOption.mark;
                            }
                            else
                            {
                                incorrectanswers = incorrectanswers+1;
                                totalnegativemarks = totalnegativemarks + examibjOption.negativemark;
                            }
                        }
                    }

                });

                this.examObject.answers = [];

                if(this.answers)
                {
                    this.examObject.attemptedquestions = this.answers.length;
                    this.examObject.answers = this.answers;
                }
                this.examObject.examid = this.props.match.params.id;
                this.examObject.studentid= this.state.userDetails.user._id;               
                this.examObject.correctanswers = correctanswers;
                this.examObject.incorrectanswers = incorrectanswers;       
                this.examObject.totalpositivemarks = totalpositivemarks;
                this.examObject.totalnegativemarks = totalnegativemarks;
                this.examObject.markesobtained = totalpositivemarks - totalnegativemarks;
                this.examObject.totalmarks = totalmarks;
                this.examObject.percentage = ((this.examObject.markesobtained * 100)/totalmarks).toFixed(2);
                this.examObject.starttime = this.starttime;
                this.examObject.endtime = endtime;
                console.log('My JSON Object',JSON.stringify(this.examObject));

                this.addExamResult(this.examObject);
        

    }

    addExamResult(data)
    { 
        MockTestService.addExamResult(data)
        .then(data => {
            console.log(data);
            let resultID = data._id;
            this.props.history.push('/MockTestResults/'+resultID);            
        }).catch(error => {
            console.log(error);
        });

    }
    componentDidMount() {
        console.log('componentDidMount....');
        document.title = "Igyanam";
        window.scrollTo(0, 0);
        MockTestService.getByIdMockTest(this.props.match.params.id)
            .then(data => {
                this.setState({ mockTestData: data, addedby: data.addedby, property: data.addedby.property, mockTestArray: data.questions, minutes: data.time });
                if(data.questions.length == 1)
                {
                    this.setState({disabledNext : true})
                }
                console.log(this.state.mockTestData)
            }).catch(error => {
                console.log(error);
            });

    }

    examTimeOver()
    {
        swal("Time is over!", {
            buttons: false,
            timer: 5000,
          })
          .then(
            this.prepareRelustObjectonSumbit()
          );

       


       
    }
    startTimer()
    {
        const { seconds, minutes } = this.state
        console.log(minutes,seconds);
        if (seconds > 0) {
            this.setState(({ seconds }) => ({
                seconds: seconds - 1
            }))
        }
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(this.myInterval)
                this.examTimeOver();
            } else {
                this.setState(({ minutes }) => ({
                    minutes: minutes - 1,
                    seconds: 59
                }))
            }
        }
    }
    receivedData() {
        this.myInterval = setInterval(() => {
            if(this.IsTimerStart)
            {
                this.startTimer()
            }
            
        }, 1000)
    }

   
    togglePrev(e) {
        debugger;
        let index = this.state.index - 1;
        let disabledPrev = (index === 0);
        this.setState({ index: index, disabledPrev: disabledPrev, disabledNext: false,SubmitbuttonVisible: !this.state.disabledNext });
       
    }   

    toggleNext(e) {

        debugger;      

        let index = this.state.index + 1;
        //this.state.mocktestarray[index]
        let disabledNext = index === (this.state.mockTestArray.length - 1);

        this.setState({ index: index, disabledNext: disabledNext, disabledPrev: false,SubmitbuttonVisible: !this.state.disabledNext });
        this.unselecteOptionAll();
    }

    unselecteOptionAll()
    {
        $('input:radio[name=radioOption]').each(function () { $(this).prop('checked', false); });
        $('input:checkbox[name=checkboxOption]').each(function () { $(this).prop('checked', false); });
    }

    deselectClick(e){
        let qid = e.target.dataset.questionid;
        this.unselecteOptionAll();
        this.removeQuestionItemFromList(qid);

    }

    
    selecteOption()
    {
        var questionid = $(".divQuestion")[0].dataset.questionid;

        $(this.answers).each(function (index,val){
            if(val.questionid ==questionid){
               
                $("#male").prop("checked", true);
                return false; // This will stop the execution of jQuery each loop.
            }
        });
    }
    removeQuestionItemFromList(questionid)
    {
        const tempAnswerobj = [...this.answers];
        //First Remove item from list
        $(this.answers).each(function (index,val){
            if(val.questionid ==questionid){
                tempAnswerobj.splice(index,1);
                return false; // This will stop the execution of jQuery each loop.
            }
        });
        
        this.answers = tempAnswerobj;
    }

    removeQuestionItemFromList_checkbox(questionid,optionvalue)
    {
        const tempAnswerobj = [...this.answers];
        //First Remove item from list
        $(this.answers).each(function (index,val){
            if(val.questionid ==questionid){
                const index = val.answerid.indexOf(optionvalue);
                if (index > -1) {
                            val.answerid.splice(index, 1);
                }
                //tempAnswerobj.splice(index,1);
                return false; // This will stop the execution of jQuery each loop.
            }
        });
        
        this.answers = tempAnswerobj;
        this.setState({ questionanswers: this.answers });
    }
    addOptionToList(questionid,optId,optVal)
    {
        const tempAnswerobj = [...this.answers];
        //First Remove item from list
        $(this.answers).each(function (index,val){
            if(val.questionid ==questionid){
               val.answerid.push(optVal);
            }
        });
        
        this.answers = tempAnswerobj;
        this.setState({ questionanswers: this.answers });

    }

    checkboxbuttonClick(e)
    {
        let optVal = e.target.value;
        let optId = e.target.id;
        let qid = e.target.dataset.questionid;
        let itemindex = e.target.dataset.itemindex;
        let questiontype = e.target.dataset.questiontype;

       

        if (e.target.checked) {

            const tempAnswerobj = [...this.answers];        
            let item = tempAnswerobj.find(x=>x.questionid == qid);
            if(item)
            {
                this.addOptionToList(qid,optId,optVal);
            }
            else
            {
                let answeridarray=[];
                let answer={};
    
                answer.questionid =qid;
                answeridarray.push(optVal);
                answer.answerid = answeridarray;
                
                tempAnswerobj.push(answer);
                this.answers = tempAnswerobj;
                this.setState({ questionanswers: this.answers });
            }           
          } 
          else {
            this.removeQuestionItemFromList_checkbox(qid,optVal);
          }

       

    }
    

    radionbuttonClick(e){

            let optVal = e.target.value;
            let optId = e.target.id;
            let qid = e.target.dataset.questionid;
            let itemindex = e.target.dataset.itemindex;
            let questiontype = e.target.dataset.questiontype;
            this.removeQuestionItemFromList(qid);

            let answer={};
            let answeridarray=[];
            
            answer.questionid =qid;
            //answer.itemindex =itemindex;

            // let radioanswerobj={};

            // radioanswerobj.radioId=optId;
            // radioanswerobj.radioValue=optVal;

            answeridarray.push(optVal);
            answer.answerid = answeridarray;

            this.answers.push(answer);
            this.setState({ questionanswers: this.answers });
    }

    getSnapshotBeforeUpdateate(PrevProps,PreState)
    {
        console.log('getSnapshotBeforeUpdateate....');
        return {Message : 'Snapshot!!'}
    }   
    componentDidUpdatepdate(preProps,preState,snapsot){
        console.log('componentDidUpdatepdate....');
        console.log('snapsot1',snapsot);
    }
    componentWillMount() {
        console.log('componentWillMount....');
        if(this.IsTimerStart)
        {
            this.receivedData();
        }   
    }

    componentWillUnmount() {
        console.log('componentWillUnmount....');

        if(this.IsTimerStart)
        {
            clearInterval(this.receivedData)
        }   
        
        this._isMounted = false;
    }

    render() {
        this.state.userDetails = JSON.parse(localStorage.getItem('authuser'));
        console.log('render....');
        const { mockTestData, addedby, property, minutes, seconds} = this.state;
        const { index, disabledNext, disabledPrev, mockTestArray,questionanswers } = this.state
        const mocktestobj = this.state.mockTestArray ? this.state.mockTestArray[index] : null;
        const mockTest = mockTestArray ? mockTestArray[index] : null;
       let SubmitbuttonVisible = disabledNext;
        //console.log('mockTest', mockTest);
        if (mockTest) {
            mockTest.itemindex = index;
            
            if(questionanswers)
            {
                mockTest.questionanswers = questionanswers.find(x=>x.questionid == mockTest._id);
            }

            return (
                <React.Fragment>
                    <header>
                        <nav className="navbar navbar-expand navbar-dark p-0">
                            <div id="header" className="header-inner fixed-top">
                                <div className="container">
                                    <Link to="/Dashboard" className="navbar-brand"><img className="img-fluid" src={logo} alt="logo" /></Link>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item"> <span className="badge alert-danger badge-time">
                                                {minutes === 0 && seconds === 0
                                                    ? <span>Busted!</span>
                                                    : <>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</>
                                                }
                                            </span></li>
                                            <li className="nav-item">
                                                {/* <Link 
                                                        to="/MockTestResults" 
                                                        className="btn btn-primary btn-lg"
                                                        onClick={this.prepareRelustObjectonSumbit}
                                                >
                                                    Submit
                                                </Link> */}
                                                <a href="#" onClick={this.onSumbitClick.bind(this)} className="btn btn-primary btn-lg">Submit</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                    <main className="flex-shrink-0">
                        <section className="common-block">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12" >
                                        <div className="white-box-no-animate mtd-topbar animate slideIn" >
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="media mb-20">
                                                        <div className="avatar-img-main mr-3">
                                                            {addedby.profileimage != null ? <img src={this.state.addedby.profileimage} className="rounded-circle img-fluid" alt="" /> :
                                                                <img src={userIcon} className="rounded-circle img-fluid" alt="" />}
                                                        </div>
                                                        <div className="media-body">
                                                            <div className="mt-0" style={{ color: '#E58309', textDecoration: 'none' }}> {property.fullname} </div>
                                                        m.sc
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-3">
                                                            <div className="media mb-20">
                                                                <img src={quesimg} width="40" height="40" className="mr-3" alt="Question" />
                                                                <div className="media-body">
                                                                    {
                                                                        (mockTestData.questions != null) ? mockTestData.questions.length : 0
                                                                    }
                                                                    <div className="mt-0"></div>
                                                                        Questions
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3">
                                                            <div className="media mb-20">
                                                                <img src={marksimg} width="40" height="40" className="mr-3" alt="Marks" />
                                                                <div className="media-body">
                                                                    <div className="mt-0">{mockTestData.totalmarks}  </div>
                                                                            Marks
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3">
                                                            <div className="media mb-20">
                                                                <img src={timeimg} width="40" height="40" className="mr-3" alt="times" />
                                                                <div className="media-body">
                                                                    <div className="mt-0">{mockTestData.time} </div>
                                                                                    Minutes
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3">
                                                            <div className="media mb-20">
                                                                <img src={negativeimg} width="40" height="40" className="mr-3" alt="Negative" />
                                                                <div className="media-body">
                                                                    <div className="mt-0">1 </div>
                                                                                    Negative
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="white-box-no-animate p-20 animate slideIn" >
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h2> {mockTestData.title}</h2>
                                                    <div className="mb-3"><span className="mr-4" >{moment(mockTestData.startdatetime).format("D MMMM YYYY")}</span>   <span className="mt-price">Free</span> </div>
                                                    {/* <div className="mt-tags mb-4"><a href="#"  >NEET</a> <a href="#" >Maths</a> </div> */}
                                                    <MockTest 
                                                                {...mockTest} 
                                                                click={(e) => this.radionbuttonClick(e)}  
                                                                deselect={(e) => this.deselectClick(e)} 
                                                                chkclick={(e) => this.checkboxbuttonClick(e)} 
                                                                questionitem = {this.answers}

                                                    />
                                                    <div>
                                                        <Prev toggle={(e) => this.togglePrev(e)} active={disabledPrev} />
                                                        <Next toggle={(e) => this.toggleNext(e)} active={disabledNext} />
                                                        { 
                                                            SubmitbuttonVisible &&< SubmitResult toggle={(e) => this.onSumbitClick(e)}  />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </React.Fragment>
            );
        } else {
            return <span></span>
        }
    }
}

function Prev(props) {
    console.log('toggle',props.toggle);
    return (
      <button onClick={props.toggle} disabled={props.active} className="btn btn-primary btn-lg xs-mrb30">Previous</button>
    );
}

function Next(props) {
    return (
      <button onClick={props.toggle} disabled={props.active} className="btn btn-primary btn-lg xs-mrb30 ml-1">Next</button>    
    );
}


function SubmitResult(props) {
    return (
      <button onClick={props.toggle} disabled={props.active} className="btn btn-primary btn-lg xs-mrb30 ml-2">Submit</button>    
    );
}

function MockTest(props) {
    console.log('props.questionitem',props.questionitem);
    let currItem = props.questionitem.find(x=>x.questionid == props._id);
    let currOptVal = '';

    if(currItem)
    {
        //currOptVal = currItem.answerid[0];
        $(props.options).each(function (index,val){
            
            if(currItem.answerid.includes(val.option))
            {
                val.ischecked=true;
            }
        });

    }
    let OptionList = null;

    if (props != null) {
        
        OptionList = props.options.map((optionval, index) => (
                                             
                                            <div className="form-check mb-3 divOption">
                                                {
                                                    props.questiontype == 'Multi Select'?
                                                    <input 
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="checkboxOption"
                                                            value={optionval.option} 
                                                            id={optionval._id} 
                                                            onClick={props.chkclick} 
                                                            data-questionid = {props._id} 
                                                            data-itemindex = {props.itemindex} 
                                                            data-questiontype = {props.questiontype}  
                                                            data-mark = {props.mark}
                                                            //checked={optionval.ischecked} 
                                                            checked = {
                                                                (props.questionanswers)
                                                                ?
                                                                (
                                                                    (props.questionanswers.answerid.indexOf(optionval.option) > -1)
                                                                )
                                                                :false
                                                            }
                                                            
                                                    />
                                                    :
                                                    <input 
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="radioOption"
                                                            value={optionval.option} 
                                                            id={optionval._id} 
                                                            onClick={props.click} 
                                                            data-questionid = {props._id} 
                                                            data-itemindex = {props.itemindex} 
                                                            data-questiontype = {props.questiontype}
                                                            data-mark = {props.mark}
                                                            //checked={optionval.ischecked} 
                                                            checked = {
                                                                (props.questionanswers)
                                                                ?
                                                                (
                                                                    (props.questionanswers.answerid.indexOf(optionval.option) > -1)
                                                                )
                                                                :false
                                                            }
                                                            
                                                    />
                                                }
                                                 
                                               
                                                   <label className="form-check-label">
                                                    {
                                                      ReactHtmlParser(optionval.option +'. '+ optionval.value)
                                                    }
                                                </label>
                                            </div>
                         ));        
      }
   
    return (
      <div>
           <div className="d-flex mb-2">
                <div className="mr-auto justify-content-start font-weight-bold divQuestion" data-questionid={props._id}>
                    {
                        ReactHtmlParser(props.question)
                    }
                </div>
                <div className="justify-content-end" ><span className="badge badge-mt-custom">Marks - {props.mark}</span></div>
            </div>
            {
                OptionList
            }
            <div className="mb-5">
                <a href="#" onClick={props.deselect} data-questionid={props._id}>Deselect </a>
            </div>
        </div>
    );
}

export default MockTestDetails;
