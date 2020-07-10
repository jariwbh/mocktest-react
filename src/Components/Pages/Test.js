import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Accordion from 'react-bootstrap/Accordion'
import NavLink from 'react-bootstrap/NavLink'
import Card from 'react-bootstrap/Card'

class Faqs extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        document.title = "Igyanam - FAQs";
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <main className="flex-shrink-0">
                    <section className="common-block">
                        <div className="container">
                            <h2 className="mb-3"> FAQs</h2>
                            <Accordion defaultActiveKey="1">
                                <div className="white-box p-0 mb-3">
                                    <div className="card-header faq-header" id="headingThree">
                                        <h2 className="mb-0">
                                            <a className="btn btn-link collapsed animate slideIn" href="#collapseThree" data-toggle="collapse" aria-expanded="false" aria-controls="collapseThree">
                                                Collapsible Group Item #3
                                        </a>
                                        </h2>
                                    </div>
                                    <div id="collapseOne" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div className="card-body">
                                            3. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                    </div>
                                </div>
                                <div className="white-box p-0 mb-3">
                                    <Card>
                                        <Card.Header className="faq-header">
                                            <h2 className="mb-0">
                                                <Accordion.Toggle as={NavLink} id="collapseOne" className="btn btn-link collapsed animate slideIn" data-toggle="collapse" aria-expanded="false" aria-controls="collapseThree" eventKey="1">
                                                    Collapsible Group Item #1
                                                </Accordion.Toggle>
                                            </h2>
                                        </Card.Header>
                                        <Accordion.Collapse className="collapse animate slideIn" aria-labelledby="headingThree" eventKey="1">
                                            <Card.Body>
                                                1. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </div>
                                <div className="white-box p-0 mb-3">
                                    <Card>
                                        <Card.Header className="faq-header">
                                            <h2 className="mb-0">
                                                <Accordion.Toggle as={NavLink} id="collapseTwo" className="btn btn-link collapsed animate slideIn" data-toggle="collapse" aria-expanded="false" aria-controls="collapseThree" eventKey="2">
                                                    Collapsible Group Item #2
                                                </Accordion.Toggle>
                                            </h2>
                                        </Card.Header>
                                        <Accordion.Collapse className="collapse animate slideIn" aria-labelledby="headingThree" eventKey="2">
                                            <Card.Body>
                                                2. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </div>
                                <div className="white-box p-0 mb-3">
                                    <Card>
                                        <Card.Header className="faq-header">
                                            <h2 className="mb-0">
                                                <Accordion.Toggle as={NavLink} id="collapseThree" className="btn btn-link collapsed animate slideIn" data-toggle="collapse" aria-expanded="false" aria-controls="collapseThree" eventKey="3">
                                                    Collapsible Group Item #3
                                                </Accordion.Toggle>
                                            </h2>
                                        </Card.Header>
                                        <Accordion.Collapse className="collapse" aria-labelledby="headingThree" eventKey="3">
                                            <Card.Body>
                                                3. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </div>
                            </Accordion>
                        </div>
                    </section>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Faqs;