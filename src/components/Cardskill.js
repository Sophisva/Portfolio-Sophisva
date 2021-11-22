import React, { Component } from "react";

class Cardskill extends Component{
    render(){
        return(
            <div  className="widecard">
                <div className="wide-con">
                    <h3>{this.props.title}</h3>
                    <h4 className="secondtext">{this.props.topic}</h4>
                    <h5 className="secondtext">{this.props.first}</h5>
                    <h5 className="secondtext">{this.props.second}</h5>
                    <h5 className="secondtext">{this.props.third}</h5>
                    <h5 className="secondtext">{this.props.fourth}</h5>
                    <h5 className="secondtext">{this.props.fifth}</h5>
                    <h5 className="secondtext">{this.props.sixth}</h5>
                    <h5 className="secondtext">{this.props.seveneth}</h5>
                    <h5 className="secondtext">{this.props.eighth}</h5>
                </div>
            </div>
        )
    }
}

export default Cardskill;