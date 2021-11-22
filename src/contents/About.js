import React,{ Component } from "react";
import Profile from '../img/img.jpg';


class About extends Component{
    render() {
        return(
            <div className="condiv about">
                <h1 className="subjtopic">About Me</h1>
                <img src={Profile} alt="profile"  className="profilepic" />
                <h3 className="deteil">Name: Sophisva Phaensomboorn(So)</h3>
                <h3 className="deteil">Gender:  Male</h3>
                <h3 className="deteil">Date of birth: 26 March 1998</h3>
                <h3 className="deteil">Age:  23</h3>
                <h3 className="deteil">Nationality:  Thai</h3>
                <h3 className="deteil">Marital status:  Single</h3>
                <h3 className="deteil">Address: 135 M.7 Chorakhesamphan,U-thong, Suphanburi 72160 </h3>
                <h3 className="deteil">Note: I passed military conscription, academic year 2563 under 
                the 9th Infantry Brigade (Camp Surasi), Discharged on October 31, 2021</h3>
            </div>
        )
    
    }
}

export default About;