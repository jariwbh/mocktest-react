import React from 'react'

export default function MockTestUI() {
    return (
        <div className="col-lg-4 col-sm-6 d-flex" >
            <div className="white-box animate slideIn" > <a href="#">
                <h3 className="mt-head">SPEED KOTA  Foundation Test</h3>
            </a>
                <div className="teacher-date-text">By Kamlesh Sharma</div>
                <div className="teacher-date-text mb-3">10 June 2020</div>
                <div className="row">
                    <div className="col-6">
                        <div className="media mb-3">
                            <img src="images/question-icon.svg" width="40" height="40" className="mr-3" alt="" />
                            <div className="media-body">
                                <div className="mt-0">50 </div>
                                                        Questions
                                                    </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="media mb-3">
                            <img src="images/marks-icon.svg" width="40" height="40" className="mr-3" alt="" />
                            <div className="media-body">
                                <div className="mt-0">200  </div>
                                                            Marks
                                                        </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="media mb-3">
                            <img src="images/time-icon.svg" width="40" height="40" className="mr-3" alt="" />
                            <div className="media-body">
                                <div className="mt-0">60 </div>
                                                            Minutes
                                                        </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="media mb-3">
                            <img src="images/negative-icon.svg" width="40" height="40" className="mr-3" alt="" />
                            <div className="media-body">
                                <div className="mt-0">1 </div>
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
