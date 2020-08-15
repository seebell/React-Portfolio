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
                <p>
                   </p>

                </div>

            </div>
            <Row>
                <Column4>
                    <SkillCard
                    heading="Languages, Environment, Frameworks"
                    bullet1="JavaScript"
                    bullet2="HTML/CSS"
                    bullet3="React"
                    bullet4="Node"
                    bullet5="Jquery"
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