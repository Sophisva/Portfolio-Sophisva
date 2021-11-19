import React,{ Component } from "react";
import Widecard from '../components/Widecard';

class Education extends Component{
    render(){
        return(
            <div className="condiv">
              <h1 className="subtopic">My Education</h1>
              {/* <img src="http://www.soc.ku.ac.th/logo/kulogo.png"/> */}
              <Widecard title="Computer Science" where="Kasetsart University" from="2016" to="2020" />
              <Widecard title="Science - Math" where="U-Thong School" from="2012" to="2016" />
            </div>
        )
    }
}

export default Education;