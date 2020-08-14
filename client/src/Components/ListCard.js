import React from "react";

function ListCard(props){
    return(
        <div className="buffTop card">
            <div className="card-body">
                <h3 className="card-title">{props.heading}</h3>
                <h5>{props.subheading}</h5>
                <p className="card-text">{props.text}</p>
                <ul>
                    <li>{props.bullet1}</li>
                    <li>{props.bullet2}</li>
                    <li>{props.bullet3}</li>
                </ul>
            </div>
        </div>
    )
}

export default ListCard