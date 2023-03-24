import React from 'react';
import c from "./Contacts.module.css"
const Contacts = () => {
    return (
        <div className={c.main}>
            <div className={c.container}>
                <p className={c.title}>Контакты</p>
                <form action="/" method="post" className={c.form}>
                    First name: <input type="text" name="fname"/>
                    Last name: <input type="text" name="lname"/>
                    Message: <textarea></textarea>

                </form>
                <input type="submit" value="Submit" className={c.button}/>
            </div>
        </div>
    );
};

export default Contacts;