import React from 'react'
import { Link } from 'react-router-dom';
import * as moment from 'moment'
import * as images from '../Pages/Image'
import $ from 'jquery'; 

function AttemptedMockTestUI(props) {
    $(function () {

        $(".progress").each(function () {
            var value = $(this).attr('data-value');
            var left = $(this).find('.progress-left .progress-bar');
            var right = $(this).find('.progress-right .progress-bar');

            if (value > 0) {
                if (value <= 50) {
                    right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
                } else {
                    right.css('transform', 'rotate(180deg)')
                    left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
                }
            }
        })

        function percentageToDegrees(percentage) {
            return percentage / 100 * 360
        }
    }); 

    return (
        <div className="col-lg-4 col-sm-6 d-flex" >
            <div className="white-box animate slideIn" >
                <div className="media">
                    <div className="dash-subject-icon mr-3">
                        <img src={images.math} alt="" />
                    </div>
                    <div className="media-body">
                        <div className="mt-price mt-0 mb-0">{props.examResult.examid.title}</div>
                        <div className="teacher-date-text">By {props.examResult.examid.addedby.fullname}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 ml-2">
                        <div className="mb-4"><span className="dash-price">Free</span> <span className="teacher-date-text mb-0 ml-3">{moment(props.examResult.examid.createdAt).format("D MMMM YYYY h:mm A")}</span></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 mb-4">
                        <div className="progress mx-auto" data-value={props.examResult.percentage.toString()}>
                            <span className="progress-left">
                                <span className="progress-bar border-success"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar border-success"></span>
                            </span>
                            <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                <div className="h4 font-weight-bold">{props.examResult.percentage}%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mb-4 d-flex align-items-center">
                        <div>
                            <h3>{props.examResult.attemptedquestions} / {props.examResult.examid.questions.length}</h3>
                            
                            <div >
                                <div className="media mb-20">
                                    <img src={images.marksimg} width="40" height="40" className="mr-3" alt="Marks" />
                                    <h3 className="text-success mt-1">{props.examResult.correctanswers}</h3>
                                </div>
                                <div className="media mb-20">
                                    <img src={images.negativeimg} width="40" height="40" className="mr-3" alt="Marks" />
                                    <h3 className="text-danger mt-1">{props.examResult.incorrectanswers}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link to={`MockTestResults/${props.examResult._id}`} className="btn btn-primary btn-block">Marksheet</Link>
                    </div>
                    <div className="col-6">
                        <Link to={`MockTestStartTest/${props.examResult.examid._id}`} className="btn btn-primary btn-block">Retake</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AttemptedMockTestUI;