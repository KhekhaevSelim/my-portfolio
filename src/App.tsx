import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import RemoteWork from "./remoteWork/RemoteWork";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
  return (
    <div>
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <RemoteWork/>
        <Contacts/>
        <Footer/>

    </div>
  );
}

export default App;
