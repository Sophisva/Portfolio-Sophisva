import React,{ Component } from "react";
import Social from '../components/Social'
import ReactTypingEffect from "react-typing-effect";
import Profile from '../img/img.jpg';

class Home extends Component{
    render() {
        return(
        <div className="condiv home">
            <ReactTypingEffect text={['Welcome to my website']} speed={100} eraseDelay={200} className="typingeffect"/>
            <img src={Profile}  alt="profile"  className="profilepic" />
            <h3>Hi, I'm Sophisva Phaensomboorn</h3>
                <p>I am looking to the position with a company that allows me to use as well as develop my 
                    Programming skill and I can lern many new jobs are always ready to listen provide feedback 
                    to correct and improve myself for the better. </p>
            {/* <Social /> */}
        </div>
        )   
    }
}

export default Home;