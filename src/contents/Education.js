import React,{ Component } from "react";
import Widecard from '../components/Widecard';

class Education extends Component{
    render(){
        return(
            <div className="condiv">
              <h1 className="subtopic">My Education</h1>
              <Widecard title="Computer Science" where="Kasetsart University(KU76)" from="2016" to="2020" logo="http://www.soc.ku.ac.th/logo/kulogo.png"/>
              <Widecard title="Science - Math" where="U-Thong School(UT55)" from="2012" to="2016" logo="https://upload.wikimedia.org/wikipedia/th/0/0c/%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%A3.png"/>
            </div>
        )
    }
}

export default Education;