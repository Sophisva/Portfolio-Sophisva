import React,{ Component } from "react";
import Profile from '../img/img.jpg';


class About extends Component{
    render() {
        return(
            <div className="condiv about">
                <h1 className="subjtopic">About Me</h1>
                <img src={Profile} alt="profile"  className="profilepic" />
                <h3>Hi, I'm Sophisva Phaensomboorn</h3>
                <p>I am looking to the position with a company that allows me to use as well as develop my Programming skill and I can lern many new jobs are always ready to listen provide feedback to correct and improve myself for the better. </p>
            </div>
        )
    
    }
}

export default About;