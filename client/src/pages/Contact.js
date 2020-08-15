import React from "./node_modules/react";
import Container from "../Components/Container";
import Jumbotron from "../Components/Jumbotron";
import Row from "../Components/Row";
import Column4 from "../Components/Column4";
import Footer from "../Components/Footer";


function Contact() {
    return (
        <>
        <Container>
            <br />
            <Jumbotron text="Contact Me" />
            <br />
            <div id="contactLinks" className="row">

                <div className="col-lg-9">
                    <br />
                    <div className="row">
                        <div className="col-lg">


                            <Row>
                                <Column4>
                                    <a href="https://www.linkedin.com/in/sibel-cidem-b7487a197/"
                                        target="_blank" rel="noopener noreferrer" className="contactText">Find me on LinkedIn</a>
                                </Column4>
                                <Column4></Column4>
                                <Column4>
                                    <a href="https://github.com/seebell"
                                        target="_blank" rel="noopener noreferrer" className="contactText2">Find me on GitHub</a>
                                </Column4>

                            </Row>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row1">
                        <div className="col-lg-12">
                            <Row>

                                <p className="contactText">My phone number: +1 305-942-4137</p>

                            </Row>
                            <br>
                            </br>
                            <Row>
                                <p className="contactText">For any questions; email me at <a href="mailto:sibelcidem@gmail.com">sibelcidem@gmail.com</a></p>
                            </Row>


                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
        <Footer />
     </>
    )
}

export default Contact;