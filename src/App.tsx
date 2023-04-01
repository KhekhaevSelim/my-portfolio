import React, {useState} from 'react';
import './App.module.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import RemoteWork from "./remoteWork/RemoteWork";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import WhatsApp from "./whatsUp/WhatsApp";

function App() {
    let [rotate, setRotate] = useState<boolean>(false)

    return (
    <div>
        <Header rotate={rotate} setRotate={setRotate}/>
        <Main rotate={rotate}/>
        <Skills/>
        <Projects/>
        <RemoteWork/>
        <Contacts/>
        <Footer/>
        <WhatsApp/>
    </div>
  );
}

export default App;
