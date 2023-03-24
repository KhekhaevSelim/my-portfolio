import React from 'react';
import f from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={f.main}>
            <div className={f.container}>
                <p className={f.text}>Селим Хехаев</p>
                <div className={f.block}>
                    <div className={f.icon}>s </div>
                    <div className={f.icon}>s </div>
                    <div className={f.icon}>s </div>
                    <div className={f.icon}>s </div>
                </div>
                <p className={f.text}>&copy; все права защищены 2023</p>
            </div>

        </div>
    );
};

export default Footer;