import React from "react";
import "./style.css";

import Container from "../Components/Container"
import Row from "../Components/Row"
import PortfolioCard from "../Components/PortfolioCard"
import Jumbotron from "../Components/Jumbotron";
import Column4 from "../Components/Column4";

import burger400Img from "../images/burger400.jpg"
import codingImg from "../images/coding.jpg";
import dayplannerImg from "../images/dayplanner.jpg";
import emptrackerImg from "../images/emptracker.jpg";
import notetakerImg from "../images/notetaker.jpg";
import pgImg from "../images/pg.jpg";
import pts400Img from "../images/pts400.jpg";
import qkImg from "../images/qk.jpg";
import readmeImg from "../images/readme.jpg";
import temp4Img from "../images/temp4.jpg";
import wdImg from "../images/wd.jpg";
import wt1Img from "../images/wt1.png";
import empdirImg from "../images/empdir.png";

function Portfolio(){
    
    return(
        
            <Container>
            <br/>
            <div className="sibel-container rounded">
              <Jumbotron text="Portfolio Gallery"/>  
            </div>
            <br/>
            <div className="sibel-container rounded">

            <Row>

                <Column4>
                <PortfolioCard
                src={pts400Img}
                href="https://pr0jectnum2.herokuapp.com/"
                imgLink="https://pr0jectnum2.herokuapp.com/"
                text="Post to Sold"
                hrefRepo="https://github.com/kimnana45/Project2"
                />
                </Column4>

                <Column4>
                <PortfolioCard
                src={qkImg}
                href="https://baspeirs.github.io/teamKaraokeApp/"
                imgLink="https://baspeirs.github.io/teamKaraokeApp/"
                text="Quickeoke"
                hrefRepo="https://github.com/baspeirs/teamKaraokeApp"
                />
                </Column4>

                <Column4>
                <PortfolioCard
                src={notetakerImg}
                href="https://enigmatic-bastion-04411.herokuapp.com/notes"
                imgLink="https://enigmatic-bastion-04411.herokuapp.com/notes"
                text="Note Taker"
                hrefRepo="https://github.com/seebell/Note-Taker"
                />
                </Column4>

            </Row>

            <Row>

                <Column4>
                <PortfolioCard
                src={wdImg}
                href="https://seebell.github.io/weatherdashboard/"
                imgLink="https://seebell.github.io/weatherdashboard/"
                text="Weather Dashboard"
                hrefRepo="https://github.com/seebell/weatherdashboard"
                />
                </Column4>

                <Column4>
                <PortfolioCard
                src={burger400Img}
                href="https://vast-river-63595.herokuapp.com/"
                imgLink="https://vast-river-63595.herokuapp.com/"
                text="Eat Da Burger!"
                hrefRepo="https://github.com/seebell/Eat-Da-Burger"
                />
                </Column4>
                <Column4>
                <PortfolioCard
                src={empdirImg} 
                href="https://seebell.github.io/Employee-Directory/"
                imgLink="https://seebell.github.io/Employee-Directory/"
                text="Employee Directory"
                hrefRepo="https://github.com/seebell/Employee-Directory"
                />
                </Column4>
            </Row>

            <Row>

                <Column4>
                <PortfolioCard
                src={wt1Img}
                href="https://powerful-mesa-89440.herokuapp.com/"
                imgLink="https://powerful-mesa-89440.herokuapp.com/"
                text="Workout Tracker"
                hrefRepo="https://github.com/seebell/workoutTracker"
                />
                </Column4>

                <Column4>
                <PortfolioCard
                src={emptrackerImg}
                href="https://github.com/seebell/Employee-Tracker"
                imgLink="https://github.com/seebell/Employee-Tracker"
                text="Employee Tracker"
                hrefRepo="https://github.com/seebell/Employee-Tracker"
                />
                </Column4>

                <Column4>
                <PortfolioCard
                src={readmeImg}
                href="https://github.com/seebell/readMeGenerator"
                imgLink="https://github.com/seebell/readMeGenerator"
                text="Read me Generator"
                hrefRepo="https://github.com/seebell/readMeGenerator"
                />
                </Column4>

            </Row>

            <Row>

                <Column4>
                <PortfolioCard
                src={codingImg} 
                href="https://seebell.github.io/codingquiz/"
                imgLink="https://seebell.github.io/codingquiz/"
                text="Coding Quiz"
                hrefRepo="https://github.com/seebell/codingquiz"
                />
                </Column4>

                <Column4>
                <PortfolioCard
                src={dayplannerImg}
                href="https://seebell.github.io/dayplanner/"
                imgLink="https://seebell.github.io/dayplanner/"
                text="Day planner"
                hrefRepo="https://github.com/seebell/Dayplanner"
                />
                </Column4>

                <Column4>
                <PortfolioCard
                src={pgImg}
                href="https://seebell.github.io/Password-Generator/"
                imgLink="https://seebell.github.io/Password-Generator/"
                text="Password Generator"
                hrefRepo="https://github.com/seebell/PasswordGenerator"
                />
                </Column4>

            </Row>
            
            <Row>

                <Column4>
                <PortfolioCard
                src={temp4Img} 
                href="https://github.com/seebell/Template-Engine-Employee"
                imgLink="https://github.com/seebell/Template-Engine-Employee"
                text="Team Generator"
                hrefRepo="https://github.com/seebell/Template-Engine-Employee"
                />
                </Column4>

            </Row>   
                           

            </div>
        
            </Container>    
        )
}

export default Portfolio