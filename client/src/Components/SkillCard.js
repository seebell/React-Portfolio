import React from "react";

function SkillCard(props){
    return(
        <div className="buffTop buffBot skill card">
            <div className="card-body">
                <h3 className="card-title">{props.heading}</h3>
                <ul className="list-group">
                    <li className="skill list-group-item">{props.bullet1}</li>
                    <li className="skill list-group-item">{props.bullet2}</li>
                    <li className="skill list-group-item">{props.bullet3}</li>
                    <li className="skill list-group-item">{props.bullet4}</li>
                    <li className="skill list-group-item">{props.bullet5}</li>
                </ul>
            </div>
        </div>
    )
}

export default SkillCard