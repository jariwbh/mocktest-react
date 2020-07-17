import React from 'react'
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import *  as images from '../Pages/Image'

export default function MockTestUI(props) {
    const mockTest = props.mockTest;
    return (
        <div className="col-lg-4 col-sm-6 d-flex" >
            <div className="white-box animate slideIn" >
                <Link to={'/MockTestStartTest/' + mockTest._id}>
                    <h3 className="mt-head">{mockTest.title}</h3>
                </Link>
                <div className="teacher-date-text">By {mockTest.addedby.fullname}</div>
                <div className="teacher-date-text mb-3">{moment(mockTest.createdAt).format("D MMMM YYYY")}</div>
                <div className="row">
                    <div className="col-6">
                        <div className="media mb-3">
                            <img src={images.quesimg} width="40" height="40" className="mr-3" alt="" />
                            <div className="media-body">
                                <div className="mt-0">{mockTest.questions.length} </div>
                                Questions
                             </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="media mb-3">
                            <img src={images.marksimg} width="40" height="40" className="mr-3" alt="" />
                            <div className="media-body">
                                <div className="mt-0">{mockTest.totalmarks}  </div>
                                Marks
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="media mb-3">
                            <img src={images.timeimg} width="40" height="40" className="mr-3" alt="" />
                            <div className="media-body">
                                <div className="mt-0">{mockTest.time} </div>
                                Minutes
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="media mb-3">
                            <img src={images.negativeimg} width="40" height="40" className="mr-3" alt="" />
                            <div className="media-body">
                                <div className="mt-0">0 </div>
                                Negative
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-price mb-3">
                    Free
			                            </div>
                <div className="mt-tags"><a href="#" >NEET</a> <a href="#" >Maths</a> </div>
            </div>
        </div>
    )
}
