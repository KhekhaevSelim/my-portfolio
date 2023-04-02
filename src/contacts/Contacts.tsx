import React from 'react';
import c from "./Contacts.module.css"
const Contacts = () => {
    return (
        <div className={c.main}>
            <div className={c.container}>
                <p className={c.title}>Контакты</p>
                <form action="/" method="post" className={c.form}>
                   <label className={c.label}> почта: <input placeholder={"введите email"} className={c.input} type="text" name="fname"/></label>
                    <label className={c.label}> ФИО: <input placeholder={"введите ФИО"} className={c.input} type="text" name="lname"/></label>
                    <label className={c.label}> Сообщение: <textarea placeholder={"введите сообщение"} className={c.textArea}></textarea></label>
                    <input type="submit" value="Submit" className={c.button}/>
                </form>
            </div>
        </div>
    );
};

export default Contacts;