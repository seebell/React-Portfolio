import React from "react";

function Jumbotron(props){
    return(
    <div id="sibel-jumbotron" className="jumbotron jumbotron-fluid rounded">
        <h1 id="sibel-jumbo" className="display-4">{props.text}</h1>
        {props.subElement}
    </div>
  
    )
}

export default Jumbotron;