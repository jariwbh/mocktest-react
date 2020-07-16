import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';
import { avatarimg, quesimg, marksimg, timeimg, negativeimg, logo, userIcon } from '../Pages/Image'
import $ from 'jquery';

function AnswerUI(props) {
  const isCorrect =  isCorrectAns(props.question)
    return (
        <React.Fragment>
            <div class="white-box-no-animate p-20 animate slideIn">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="d-flex mb-2">
                            <div class="mr-auto justify-content-start font-weight-bold">{ReactHtmlParser(props.question.question)}</div>
                            <div class="justify-content-end"><span class="badge badge-mt-custom" style={{ background: isCorrect }}> Marks - {props.question.mark} </span></div>
                        </div>
                        <MockTest
                            click={(e) => this.radionbuttonClick(e)}
                            deselect={(e) => this.deselectClick(e)}
                            chkclick={(e) => this.checkboxbuttonClick(e)}
                            question={props.question}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

function isCorrectAns (question) {
    if (question.questionanswered.answerid.length === 0){
        return "black"
    }
    if (JSON.stringify(question.solutions) === JSON.stringify(question.questionanswered.answerid)){
        return "green" 
    }
    return "red" 
}

function getCheckedAnswer(currentOption, options) {
    return options.indexOf(currentOption) > -1
}

function MockTest(questionitem) {
    let OptionList = null;

    if (questionitem != null) {

        OptionList = questionitem.question.options.map((optionval, ind) => (

            <div className="form-check mb-3 divOption">
                {
                    questionitem.question.questiontype == 'Multi Select' ?
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name={`checkboxOption_${ind}`}
                            checked={getCheckedAnswer(optionval.option, questionitem.question.answers.answerid)}

                        />
                        :
                        <input
                            className="form-check-input"
                            type="radio"
                            name={`radioOption_${ind}`}
                            checked={getCheckedAnswer(optionval.option, questionitem.question.questionanswered.answerid)}

                        />
                }

                <label className="form-check-label">
                    {
                        ReactHtmlParser(optionval.option + '. ' + optionval.value)
                    }
                </label>             
            </div>
        ));
    }

    return (
        <React.Fragment>
            <div>
                {
                    OptionList
                }
            </div>
            
            <div className="mt-tags" >
            Solution Options :
                                        {questionitem.question.solutions.map((sol, index) => (
                                            <a href="#" key={index} >{sol === null ? '' : sol}</a>
                                        ))}
                                    </div> 
            {/* {questionitem.question.solutions.toString()}  */}
           
            <div className="t-mock-test">explanation : { ReactHtmlParser(questionitem.question.explanation)} </div>
        </React.Fragment>
    );
}

export default AnswerUI