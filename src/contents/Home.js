import React,{ Component } from "react";
import Social from '../components/Social'
import ReactTypingEffect from "react-typing-effect";

class Home extends Component{
    render() {
        return(
        <div className="condiv home">
            <img src= 'https://scontent.fbkk19-1.fna.fbcdn.net/v/t1.6435-9/90807735_2951843264874459_9039688388822695936_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGWCuT_but8AS3OdYojdH0cfNP1iAwGbAV80_WIDAZsBUHIWGiixQui0cp739mY3idEawJ-6EwgqovEHxDkUExw&_nc_ohc=uKZljhitHTAAX9pKc_-&_nc_ht=scontent.fbkk19-1.fna&oh=c6f7200539a356d77ab68e3f105779a2&oe=61BEADEC' alt="profile"  className="profilepic" />
            <ReactTypingEffect text={['I am Sophisva','PROGRAMMER']} speed={80} eraseDelay={200} className="typingeffect"/>
            <Social />
        </div>
        )   
    }
}

export default Home;