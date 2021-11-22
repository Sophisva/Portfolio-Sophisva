import './App.css';
import React from 'react';
import Navbar from './components/Navbar';

//contents
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Experience from './contents/Experience';
import Contact from './contents/Contact';
  
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjEjrTjza1NFdKe49BTGCxaxiZM_02ubM",
  authDomain: "portfolio-e7593.firebaseapp.com",
  projectId: "portfolio-e7593",
  storageBucket: "portfolio-e7593.appspot.com",
  messagingSenderId: "806992522613",
  appId: "1:806992522613:web:d90937549450f10be8f73c",
  measurementId: "G-EV7HC74WS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <Router>
      <div className="App">
       <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/education">
          <Education />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
        <Route exact path="/experience">
          <Experience />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;
