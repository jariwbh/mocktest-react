import React ,{Component}from 'react';
import { avatarimg, quesimg, marksimg, timeimg, negativeimg, logo } from './Image';
import { Link } from 'react-router-dom';
import MockTestService from '../../Core/Services/MockTest/BsMockTest';
import * as moment from 'moment';
import ReactHtmlParser from 'react-html-parser';

class DemoSlider extends Component
{
    _isMounted = false;
     answers = [];
    constructor(props) {
        super(props);
      }
      state = {
        mocktestarray : [
                        {
                            "name":"John",
                            "question":"<p>Whats come between 9 and 15 ?&nbsp;&nbsp;&nbsp;&nbsp;<br></p>",
                            "options":[
                                    {
                                        "Option":"a. Vitamin A2"
                                    },
                                    {
                                        "Option":"a. Vitamin A2"
                                    },
                                    {
                                        "Option":"a. Vitamin A2"
                                    },
                                    {
                                        "Option":"a. Vitamin A2"
                                    }
                            ],
                            "Marks":"4"
                        },
                        {
                            "name":"Kitty",
                            "question":"<p>Exapansion of ROM is</p>",
                            "options":[
                                {
                                    "Option":"b. Vitamin A2"
                                },
                                {
                                    "Option":"b. Vitamin A2"
                                },
                                {
                                    "Option":"b. Vitamin A2"
                                },
                                {
                                    "Option":"b. Vitamin A2"
                                }
                            ],
                            "Marks":"4"
                        },
                        {
                            "name":"Ji",
                            "question":"<p>The red cells are formed in the</p>",
                            "options":[
                                {
                                    "Option":"c. Vitamin A2"
                                },
                                {
                                    "Option":"c. Vitamin A2"
                                },
                                {
                                    "Option":"c. Vitamin A2"
                                },
                                {
                                    "Option":"c. Vitamin A2"
                                }
                            ],
                            "Marks":"4"
                        },
                        {
                            "name":"Mattis",
                            "question":"<p>Writing A to Z (from the black board )&nbsp;&nbsp;&nbsp;&nbsp;</p>",
                            "options":[
                                {
                                    "Option":"d. Vitamin A2"
                                },
                                {
                                    "Option":"d. Vitamin A2"
                                },
                                {
                                    "Option":"d. Vitamin A2"
                                },
                                {
                                    "Option":"d. Vitamin A2"
                                }
                            ],
                            "Marks":"4"
                        }
                    ],
        mockTestArray:null,
        index: 0,
        disabledNext: false,
        disabledPrev: true        
      };
      componentDidMount() {
        document.title = "Igyanam";
        window.scrollTo(0, 0);
        this._isMounted = true;
        this.receivedData();
    }
      receivedData() {
        this._isMounted = true;        
        MockTestService.getByIdMockTest("5e1421df74c98ba991c8929b")
            .then(data => {
                if (data.questions != null) {
                    if (this._isMounted === true) {
                        this.setState({ mockTestArray: data.questions });
                    }
                }
                else {
                    console.log('fetching error failed. Try later!')
                }
            })
    }

      togglePrev(e) {
        let index = this.state.index - 1;
        let disabledPrev = (index === 0);
    
        this.setState({ index: index, disabledPrev: disabledPrev, disabledNext: false })
      }
    
       toggleNext(e) {
         let index = this.state.index + 1;
         //this.state.mocktestarray[index]
         let disabledNext = index === (this.state.mocktestarray.length - 2);
    
         this.setState({ index: index, disabledNext: disabledNext, disabledPrev: false })
       }
    
      render()
      {
        const { index, disabledNext, disabledPrev,mockTestArray } = this.state
        const mocktestobj = this.state.mocktestarray ? this.state.mocktestarray[index] : null;
        const mockTest = mockTestArray ? mockTestArray[index] : null;
        console.log('mocktestobj',mocktestobj); 
        console.log('mockTest',mockTest);      
      
        if (mockTest) {
            return (          
            <React.Fragment>
            <header>
                <nav className="navbar navbar-expand navbar-dark p-0">
                    <div id="header" className="header-inner fixed-top">
                        <div className="container">
                            <Link to="/" className="navbar-brand"><img className="img-fluid" src={logo} alt="logo" /></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item"> <span className="badge alert-danger badge-time">54:45</span></li>
                                    <li className="nav-item"> <Link to="/MockTestResults" className="btn btn-primary btn-lg">Submit</Link> </li>
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
                                                    <img src={avatarimg} className="rounded-circle img-fluid" alt="Avtar" />
                                                </div>
                                                <div className="media-body">
                                                    <div className="mt-0"><a href="#">Kamlesh Sharma</a> </div>
                                                M.sc
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-3">
                                                    <div className="media mb-20">
                                                        <img src={quesimg} width="40" height="40" className="mr-3" alt="Question" />
                                                        <div className="media-body">
                                                            <div className="mt-0">50 </div>
                                                        Questions
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3">
                                                    <div className="media mb-20">
                                                        <img src={marksimg} width="40" height="40" className="mr-3" alt="Marks" />
                                                        <div className="media-body">
                                                            <div className="mt-0">200  </div>
                                                        Marks
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3">
                                                    <div className="media mb-20">
                                                        <img src={timeimg} width="40" height="40" className="mr-3" alt="Times" />
                                                        <div className="media-body">
                                                            <div className="mt-0">60 </div>
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
                                            <h2> SPEED KOTA  Foundation Test</h2>
                                            <div className="mb-3"><span className="mr-4" >10 June 2020</span>   <span className="mt-price">Free</span> </div>
                                            <div className="mt-tags mb-4"><a href="#"  >NEET</a> <a href="#" >Maths</a> </div>
                                            <MockTest {...mockTest} />                                
                                            <div>
                                                <Prev toggle={(e) => this.togglePrev(e)} active={disabledPrev} />
                                                <Next toggle={(e) => this.toggleNext(e)} active={disabledNext} />
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
            return <span>error</span>
          }
      }
      
}
function Prev(props) {
    return (
      <button onClick={props.toggle} disabled={props.active} className="btn btn-primary btn-lg xs-mrb30">Previous</button>
    //   <a href="#" className="btn btn-primary btn-lg xs-mrb30" onClick={props.toggle} disabled={props.active}>Previous</a>
    );
  }
  
  function Next(props) {
    return (
      <button onClick={props.toggle} disabled={props.active} className="btn btn-primary btn-lg xs-mrb30 ml-1">Next</button>
    //   <a href="#" className="btn btn-primary btn-lg xs-mrb30 ml-1" onClick={props.toggle} disabled={props.active}>Next</a>
    );
  }
  
  function MockTest(props) {
      let OptionList = null;
      if(props != null)
      {
        OptionList = props.options.map((optionval, index) => (
                                            <div className="form-check mb-3">
                                                <input className="form-check-input" type="radio" name="radioOption" value={optionval.option} />
                                               
                                                   <label className="form-check-label" htmlFor="radioOption">
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
                <div className="mr-auto justify-content-start font-weight-bold" >
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
                <a href="#">Deselect </a>
             </div>
      </div>
    );
  }
export default DemoSlider;