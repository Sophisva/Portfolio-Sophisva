import React,{ Component } from "react";

class Experinece extends Component{
    render(){
        return(
            <div className="condiv experience">
                <div>
                   <h1 className="subtopic">Mobile Application</h1> 
                   <h6> Name: KU.KPS Lost and Found Application</h6>
                   <h6> OS: Android</h6>
                   <h6> Framwork: IONIC III</h6>
                   <h6> Editor: Visual Studio Code</h6>
                   <h6> Database: MySQL</h6>
                   <h6> Note: Project Computer Sciences</h6>
                </div>
                <br/>
                <div>
                   <h1 className="subtopic">Web Application</h1>
                   <h6> Name: Resume</h6>
                   <h6> OS: Website</h6>
                   <h6> Framwork: React</h6>
                   <h6> Editor: Visual Studio Code</h6>
                </div>
                
            </div>

        )
    }
}

export default Experinece;