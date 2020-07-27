import React from 'react'
import ReactHtmlParser from 'react-html-parser';

function AnswerUI(props) {
    const answeredType = getGnsweredType(props.question)
    return (
        <React.Fragment>
            <div className="white-box-no-animate p-20 animate slideIn">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex mb-2">
                            <div className="mr-auto justify-content-start font-weight-bold">{ReactHtmlParser(props.question.question)}</div>
                            <div className="justify-content-end"><span className="badge badge-mt-custom" style={{ background: answeredType }}> Marks - {props.question.mark} </span></div>
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

function getGnsweredType(question) {
    if (!question.questionanswered){
        return "black"
    }
    if (question.questionanswered.answerid.length === 0) {
        return "black"
    }
    if (JSON.stringify(question.solutions) === JSON.stringify(question.questionanswered.answerid)) {
        return "green"
    }
    return "red"
}

// function getCheckedAnswer(currentOption, options) {
//     return options.indexOf(currentOption) > -1
// }

function getCheckedAnswer(currentOption, question) {
    if (!question.questionanswered){
        return false;
    }
    return question.questionanswered.answerid.indexOf(currentOption) > -1
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
                            checked={getCheckedAnswer(optionval.option, questionitem.question)}

                        />
                        :
                        <input
                            className="form-check-input"
                            type="radio"
                            name={`radioOption_${ind}`}
                            checked={getCheckedAnswer(optionval.option, questionitem.question)}

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
                Correct Answer :
                {questionitem.question.solutions.map((sol, index) => (
                <a href="#" key={index} >{sol === null ? '' : sol}</a>
            ))}
            </div>

            <div className="t-mock-test">explanation : {ReactHtmlParser(questionitem.question.explanation)} </div>
        </React.Fragment>
    );
}

export default AnswerUI
