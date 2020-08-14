import React, { Component } from "react";
var style = {
    fontSize: "12px",
    left: "0",
    bottom: "0",
    height: "45px",
    width: "100%",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
   
};

class Footer extends Component{
    render(){
        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
};

export default Footer