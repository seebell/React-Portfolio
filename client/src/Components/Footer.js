import React, { Component } from "react";

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