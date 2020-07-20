import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Accordion from 'react-bootstrap/Accordion';
import NavLink from 'react-bootstrap/NavLink';
import Card from 'react-bootstrap/Card';
import $ from 'jquery';
class Faqs extends Component {

    // constructor() {
    //     super();
    // }

    componentDidMount() {
        document.title = "Igyanam - FAQs";
        window.scrollTo(0, 0);
    }

    render() {
        $(document).ready(function () {
            $('#collapseOne').on('click', function () {
                $(this).toggleClass('collapsed');
            });
            $('#collapseTwo').on('click', function () {
                $(this).toggleClass('collapsed');
            });
            $('#collapseThree').on('click', function () {
                $(this).toggleClass('collapsed');
            });
            $(this).removeClass('collapsed');
        });
        return (
            < React.Fragment >
                <Header />
                <main className="flex-shrink-0">
                    <section className="common-block">
                        <div className="container">
                            <h2 className="mb-3"> FAQs</h2>
                            <Accordion defaultActiveKey="1">
                                <Card className="white-box p-0 mb-3" id="headingOne">
                                    <Card.Header className=" card-header faq-header">
                                        <h2 className="mb-0">
                                            <Accordion.Toggle as={NavLink}
                                                id="collapseOne"
                                                className="btn-link animate slideIn"
                                                data-toggle="collapse"
                                                aria-controls="collapseOne"
                                                eventKey="1">
                                                Collapsible Group Item #1
                                                </Accordion.Toggle>
                                        </h2>
                                    </Card.Header>
                                    <Accordion.Collapse id="collapseOne" aria-labelledby="headingOne" eventKey="1">
                                        <Card.Body>
                                            1. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className="white-box p-0 mb-3" id="headingTwo">
                                    <Card.Header className=" card-header faq-header">
                                        <h2 className="mb-0">
                                            <Accordion.Toggle as={NavLink}
                                                id="collapseTwo"
                                                className="btn-link collapsed animate slideIn"
                                                data-toggle="collapse"
                                                aria-controls="collapseTwo"
                                                eventKey="2">
                                                Collapsible Group Item #2
                                                </Accordion.Toggle>
                                        </h2>
                                    </Card.Header>
                                    <Accordion.Collapse id="collapseTwo" aria-labelledby="headingTwo" eventKey="2">
                                        <Card.Body>
                                            2. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className="white-box p-0 mb-3" id="headingThree">
                                    <Card.Header className=" card-header faq-header">
                                        <h2 className="mb-0">
                                            <Accordion.Toggle as={NavLink}
                                                id="collapseThree"
                                                className="btn-link collapsed animate slideIn"
                                                data-toggle="collapse"
                                                aria-controls="collapseThree"
                                                eventKey="3">
                                                Collapsible Group Item #3
                                                </Accordion.Toggle>
                                        </h2>
                                    </Card.Header>
                                    <Accordion.Collapse id="collapseThree" aria-labelledby="headingThree" eventKey="3">
                                        <Card.Body>
                                            3. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </section>
                </main>
                <Footer />
            </React.Fragment >
        );
    }
}

export default Faqs;