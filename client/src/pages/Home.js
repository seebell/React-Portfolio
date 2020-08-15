import React from "react";
import "./style.css";
import profilePic from "../images/sip5.png";
import Container from "../Components/Container";
import Row from "../Components/Row";
import Column4 from "../Components/Column4";
import SkillCard from "../Components/SkillCard";

function Home(){
    
    return(
        <Container>
            <br/>
            <br/>
            <div className="row">

                <div className="col">

                    <img className="sibel-photo" alt="profile" src={profilePic}/>

                    <h3> About Me</h3>
                <p>Solution-driven Full Stack Web Developer with 6 years of analytical experience; proven
                management, sales and coaching skills. Abilities of working under pressure, meeting deadlines
                and adapting new conditions quickly.

                   </p>

                   <p>
                                    <a href="https://seebell.github.io/assets/images/latestResume.pdf" target="_blank"
                                class="btn btn-outline-white linkcolor px-4 py-3">Click here to view my Resume</a> 
                                </p>

                </div>

            </div>
            <Row>
                <Column4>
                    <SkillCard
                    heading="Languages, Environment, Frameworks"
                    bullet1="JavaScript, Jquery"
                    bullet2="HTML/CSS"
                    bullet3="React"
                    bullet4="Node"
                    bullet5="Express/ES6"
            
                    />
                </Column4>

                <Column4>
                    <SkillCard
                    heading="Databases"
            
                    bullet1="MongoDB/Moongoose"
                    bullet2="MySQL/Sequelize"
                    />
                </Column4>

                <Column4>
                    <SkillCard
                      heading="Soft skills"
                      bullet1="Management and Coaching"
                      bullet2="Detail Oriented"
                      bullet3="Adaptable"
                      bullet4="Quick learner"
                      />
                </Column4>

            </Row>
            <br/>
            <br/>
            <br/>

        </Container>
      
    )
}

export default Home