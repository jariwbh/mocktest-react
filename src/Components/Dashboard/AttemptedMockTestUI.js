import React from 'react'
import { Link } from 'react-router-dom';
import * as moment from 'moment'
import * as images from '../Pages/Image'

function AttemptedMockTestUI(props) {
    return (
        <div className="col-lg-4 col-sm-6 d-flex" >
            <div className="white-box animate slideIn" >
                <div className="media">
                    <div className="dash-subject-icon mr-3">
                        <img src={images.math} alt="" />
                    </div>
                    <div className="media-body">
                        <div className="mt-price mt-0 mb-0">{props.title}</div>
                        <div className="mb-4"><span className="dash-price">Free</span> <span className="teacher-date-text mb-0 ml-3">{moment(props.createdAt).format("D MMMM YYYY h:mm A")}</span></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 mb-4">
                        <div className="progress mx-auto" data-value='72'>
                            <span className="progress-left">
                                <span className="progress-bar border-success"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar border-success"></span>
                            </span>
                            <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                <div className="h4 font-weight-bold">{props.percentage}%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mb-4 d-flex align-items-center">
                        <div>
                            <h3>{props.attemptedquestions} / {props.totalquestions}</h3>
                            <div className="dash-avg">20.5 avg</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        {/* <a href="#" className="btn btn-primary btn-block">Marksheet</a> */}
                        <Link to={`MockTestResults/${props.id}`} className="btn btn-primary btn-block">Marksheet</Link>
                    </div>
                    <div className="col-6">
                        <a href="#" className="btn btn-primary btn-block">Retake</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AttemptedMockTestUI;