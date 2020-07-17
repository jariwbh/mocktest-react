import React from 'react'
import { userIcon } from '../../Pages/Image';

function TeacherUI(props) {
    return (
        <div className="col-lg-4 col-sm-6 d-flex" key={props._id} >
            <div className="white-box animate slideIn" >
                <div className="media mb-3">
                    <div className="t-avatar-img-main mr-4">
                        <a href="#" >  {props.profileimage != null ? <img src={props.profileimage} className="rounded-circle img-fluid" alt="" /> :
                            <img src={userIcon} className="rounded-circle img-fluid" alt="" />}</a>
                    </div>
                    <div className="media-body mt-auto mb-auto">
                        <a className="t-name" href="#">{props.fullname} </a>
                        <div className="">{props.qualification === null ? '' : props.qualification}</div>
                        <div className="t-mock-test">Mock Test (90)</div>
                    </div>
                </div>
                <div className="mt-tags mb-3">
                    {props.subject}
                    {/* {props.subject.map((sub, i) => (
                        <a href="#" key={i} >{sub === null ? '' : sub}</a>
                    ))} */}
                </div>
            </div>
        </div>
    );
};

export default TeacherUI;