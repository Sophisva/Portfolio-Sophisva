import React,{ Component} from "react";

import Social from "../components/Social";

class Contact extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">Contact</h1>
                <h3>Email  :  sophisva.ph@gmail.com</h3>
                <h3>Tel  :  092 812 6960</h3>
                <h3>Line  :  so.sn135</h3>
                <h3>Instagram  : so_sppsb</h3>
                <Social/>
            </div>
        )
    }
}

export default Contact;