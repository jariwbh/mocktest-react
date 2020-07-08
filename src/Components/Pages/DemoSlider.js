import React ,{Component}from 'react';
import { avatarimg, quesimg, marksimg, timeimg, negativeimg, logo } from './Image';
import { Link } from 'react-router-dom';

class DemoSlider extends Component
{
    constructor(props) {
        super(props);
      }
      state = {
        profiles : [
                        {
                                "name":"John",
                                "Question":"1. Which vitamin helps in blood clotting?",
                                "Options":[
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
                            "Question":"2. Which vitamin helps in blood clotting?",
                            "Options":[
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
                        "Question":"3. Which vitamin helps in blood clotting?",
                        "Options":[
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
                    "Question":"4. Which vitamin helps in blood clotting?",
                    "Options":[
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
        index: 0,
        disabledNext: false,
        disabledPrev: true        
      };

      togglePrev(e) {
        let index = this.state.index - 1;
        let disabledPrev = (index === 0);
    
        this.setState({ index: index, disabledPrev: disabledPrev, disabledNext: false })
      }
    
       toggleNext(e) {
         let index = this.state.index + 1;
         let disabledNext = index === (this.state.profiles.length - 1);
    
         this.setState({ index: index, disabledNext: disabledNext, disabledPrev: false })
       }
    
      render()
      {
        const { index, disabledNext, disabledPrev } = this.state
        const profile = this.state.profiles ? this.state.profiles[index] : null;
        console.log('profile',profile);      
      
        if (profile) {
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
                                            <Profile {...profile} />                                            
                                            <div className="mb-5">
                                                <a href="#">Deselect </a>
                                            </div>
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
  
  function Profile(props) {
      const QestionOption = props.Options.map((val) => (
        <div className="form-check mb-3">
                                                <input className="form-check-input" type="radio" name="exampleRadios" value="option1" />
                                                <label className="form-check-label" htmlFor="exampleRadios1">
                                                    {val.Option}
                                            </label>
                                            </div>
    ));
    return (
      <div>
         <div className="d-flex mb-2">
           <div className="mr-auto justify-content-start font-weight-bold" >
            {props.Question}
            {QestionOption}
            </div>
           </div>
      </div>
    );
  }
export default DemoSlider;