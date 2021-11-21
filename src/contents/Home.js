import React,{ Component } from "react";
import Social from '../components/Social'
import ReactTypingEffect from "react-typing-effect";
import Profile from '../img/img.jpg';

class Home extends Component{
    render() {
        return(
        <div className="condiv home">
            <img src={Profile}  alt="profile"  className="profilepic" />
            <h1>Welcome to portfolio website of</h1>
            <h1>Sophisva Phaensomboorn</h1>
            {/* <ReactTypingEffect text={['Welcome to portfolio website of']} speed={100} eraseDelay={200} className="typingeffect"/>
            <ReactTypingEffect text={['Sophisva Phaensomboorn']} speed={100} eraseDelay={300} className="typingeffect"/> */}
            <Social />
        </div>
        )   
    }
}

export default Home;