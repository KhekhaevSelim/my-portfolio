import React from 'react';
import s from "./Project.module.css"

type ProjectPropsType = {
    img: string
    rotate : boolean

}
const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.main}>
                 <img className={s.project} src={props.img} alt=""/>
                 <button className={props.rotate ? s.buttonWithOpenMenu : s.buttonWithCloseMenu}>подробнее</button>
        </div>
    );
};

export default Project;