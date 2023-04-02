import React from 'react';
import s from "./Skill.module.css"


type SkillPropsType = {
    icon : string
    title : string
    description : string
}
const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.main}>
           <img className={s.icon} src={props.icon} alt=""/>
            <h3 className={s.title}>{props.title}</h3>
            <div className={s.description}>{props.description}</div>
        </div>
    );
};

export default Skill;