import React from 'react';
import s from "./WhatsApp.module.css";
import sendMe from "../assets/sendMe.png"

const WhatsApp = () => {
    const phone = 79380009485

    return (

        <div className={s.stickyWhatsApp}>
            <a href={`https://api.whatsapp.com/send?phone=${phone}`}>
                <img src={sendMe} className={s.sendMeIcon}/>
            </a>
        </div>

    );
};

export default WhatsApp;