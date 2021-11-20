import React,{ Component } from "react";
import Social from '../components/Social'
import ReactTypingEffect from "react-typing-effect";
import Profile from '../img/img.jpg';

class Home extends Component{
    render() {
        return(
        <div className="condiv home">
            <img src={Profile}  alt="profile"  className="profilepic" />
            <ReactTypingEffect text={['I am Sophisva','PROGRAMMER']} speed={80} eraseDelay={200} className="typingeffect"/>
            <Social />
        </div>
        )   
    }
}

export default Home;