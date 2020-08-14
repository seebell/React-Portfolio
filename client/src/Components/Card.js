import React from "react";

function Card(props){
    return(
        <div className="buffTop card">
            <div className="card-body">
                <h3 className="card-title">{props.heading}</h3>
                <h5>{props.subheading}</h5>
                <p className="card-text ">{props.text}</p>
            </div>
        </div>
    )
}

export default Card