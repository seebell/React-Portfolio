import React from "react";
import "./style.css";


function PortfolioCard(props){
    return(
                <div className= "sibel-stock">
                    <a href={props.imgLink} target="blank">      
                    <img alt="icon"  className= "imgSz rounded mx-auto d-block"  alt="clip of app" 
                    src={props.src} 
                    />
                    </a>
                    <div className="sibel-photo-bar"> 
                        <a className="stronger" href={props.href} rel="noopener noreferrer" target="_blank">
                       {props.text}
                        </a>
                        <br/>
                        <a href={props.hrefRepo} rel="noopener noreferrer" target="_blank">
                            Repo Link
                        </a>
                    </div>
                </div>

    )
}

export default PortfolioCard 