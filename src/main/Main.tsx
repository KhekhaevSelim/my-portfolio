import React from 'react';
import m from "./Main.module.css"
import me from "../assets/me.png"
import github from "../assets/github.png"
import codewars from "../assets/codewars.png"
import whatsApp from "../assets/whatsApp.png"


type NavPropsType = {
    rotate : boolean
}
const  Main = (props : NavPropsType) => {
    const phone = 79380009485
    return (
        <div className={m.main}>
            <div className={m.container}>

                <div className={m.info}>
                    <div className={m.hello}>
                        <p>Всем привет</p>
                        <p>Я Хехаев Селим</p>
                        <p>Фронтенд разработчик</p>
                    </div>
                    <div className={m.icons}>
                        <a href="https://github.com/KhekhaevSelim" > <img src={github} alt="" className={m.github}/></a>
                        <a href="https://www.codewars.com/users/Selim1995" > <img src={codewars} alt="" className={m.codewars}/></a>
                        <a href={`https://api.whatsapp.com/send?phone=${phone}`}> <img src={whatsApp} alt="" className={m.whatsApp}/></a>
                    </div>
                    <button className={props.rotate ? m.btnWithOpenMenu : m.btnWithCloseMenu} >Резюме</button>

                </div>
                <div className={m.photoContainer}>
                    <img src={me} className={m.photo}/>
                </div>

            </div>

        </div>
    );
};

export default Main;