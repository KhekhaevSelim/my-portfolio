import React, {useState} from 'react';
import Header from "../header/Header";
import Main from "../main/Main";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import RemoteWork from "../remoteWork/RemoteWork";
import WhatsApp from "../whatsUp/WhatsApp";

const FullPortfolio = () => {
    let [rotate, setRotate] = useState<boolean>(false)
    return (
        <div>
            <Header rotate={rotate} setRotate={setRotate}/>
            <Main rotate={rotate}/>
            <Skills/>
            <Projects rotate={rotate}/>
            <RemoteWork/>
            {/*<Contacts/>*/}
            {/*<Footer/>*/}
            <WhatsApp/>
        </div>
    );
};

export default FullPortfolio;