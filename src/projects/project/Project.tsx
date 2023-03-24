import React from 'react';
import s from "./Project.module.css"
const Project = () => {
    return (
        <div className={s.main}>
            <div className={s.preview}>
            <button className={s.button}>preview</button>
            </div>
            <div className={s.description}>description</div>
        </div>
    );
};

export default Project;