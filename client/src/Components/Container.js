  
import React from "react"

function Container(props){
    return(
        <body>
            <div className="container">
                {props.children}
            </div> 
        </body>
        
    )
}

export default Container