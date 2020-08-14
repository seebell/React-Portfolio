import React from "react";
import Container from "../Components/Container";
import Jumbotron from "../Components/Jumbotron";
import Column4 from "../Components/Column4";


function Contact(){
    return(
           <Container>
               <br/>
               <Jumbotron text="Contact Me"/>
            <br/>
            <div id="contactLinks" className="row">
            
            <div className="col-lg-9">
            <br/>
            <div className="row">
            <div className="col-lg">
        
                <Row>
                    <Column4>
                    <a href="https://www.linkedin.com/in/sibel-cidem-b7487a197/"></a>
                    </Column4>
                    <Column4>
                    <a href="https://github.com/seebell"></a>
                    </Column4>
                    <Column4>
                    <a href="#"></a>
                    </Column4>
                </Row>
                <Row>
                    <Column4>
                    <a href="https://www.linkedin.com/in/sibel-cidem-b7487a197/" 
                    target="_blank" rel="noopener noreferrer">Find me on LinkedIn</a> 
                    </Column4>
                    <Column4>
                    <a href="https://github.com/seebell" 
                    target="_blank" rel="noopener noreferrer">Find me on GitHub</a>
                    </Column4>
                    <Column4>
                    <a href="#"></a>
                   
                    </Column4>
                </Row>
                <br/>
                <br/>
                <br/>
                <Row>
                    <p>For any questions; email me at <a href="mailto:sibelcidem@gmail.com">sibelcidem@gmail.com</a></p>
                </Row>
        
                                                            
            </div> 
            </div>  
            </div>
        </div>

        </Container> 
      
    )
}

export default Contact