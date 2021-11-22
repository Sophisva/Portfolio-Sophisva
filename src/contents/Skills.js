// import React, { Component } from "react";

// class Skills extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             'myskill': ['HARD SKILLS', 'SOFTSKILLS']
//         } 
//     }

//     render() {
//         return(
//             <div className="condiv skills">
//                 <h1 className="subtopic">My Skills</h1>
//                 <ul>
//                     {this.state.myskill.map((value) => {
//                         return <li>{value}</li>
//                     }
//                     )}
//                 </ul>
//             </div>
//         )
//     }
// }

// export default Skills;

import React, { Component } from "react";
import Cardskill from "../components/Cardskill";

class Skills extends Component {
    
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">My Skills</h1>
                <Cardskill topic="Hard Skills"  
                first="- Have basic knowledge of database design and be able to analyze systems for use in database design"
                second="- Understand the system development life cycle (SDLC)"
                third="- Able to write and read flowchart and dataflow diagram"
                fourth="- knowladge computer language as follows C, Java, JavaScript, html, php, SQL"
                fifth="- Have experience Node js, IONIC III framwork"
                sixth="- Can use Microsoft office Word (expert) Excel (expert) PowerPoint (standard)"
                seveneth="- Editing work by Adobe photoshop"
                eighth="- Troubleshoot basic computer problems"
                />
                <Cardskill topic="Soft Skills" 
                first="- Enthusiastic and patient"
                second="- Teamwork"
                third="- Adaptable-adapt myself well with different cultures"
                fourth="- Work well in under pressure"
                />
            </div>
        )
    }
}

export default Skills;