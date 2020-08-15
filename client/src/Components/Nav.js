  
import React from "react";
import { Link } from "react-router-dom";


function Nav(){
    return(
        <div className="row">

        <div className="col-lg">

            <nav className="navbar navbar-dark bg-dark">

                <h2> <Link to="/">Sibel Cidem</Link></h2>

                <ul className="nav nav-tabs">
                    <li>
                        <Link className="nav-link" to="/home">About Me</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link className="nav-link inactive" to="/contact">Contact Me</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.linkedin.com/in/sibel-cidem-b7487a197/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    
                </ul>

            </nav>

        </div>
    </div>
    )
}

export default Nav