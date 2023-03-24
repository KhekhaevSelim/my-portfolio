import React from 'react';
import m from "./Main.module.css"
const  Main = () => {
    return (
        <div className={m.main}>
            <div className={m.container}>

                <div className={m.text}>
                    <span>Всем привет</span>
                    <h1>Я Хехаев Селим</h1>
                    <p>Фронт-енд разработчик</p>
                </div>
                <div className={m.photo}></div>

            </div>

        </div>
    );
};

export default Main;