import React from 'react';
import s from "./Project.module.css"
import {Link, Navigate} from "react-router-dom";

type ProjectPropsType = {
    img: string
    rotate : boolean
    path : string

}
const Project = (props: ProjectPropsType) => {

    const showMore = (path : string) => {
        return <Navigate to={path}/>
    }
    return (
        <div className={s.main}>
                 <img className={s.project} src={props.img} alt=""/>
                 <button
                     className={props.rotate ? s.buttonWithOpenMenu : s.buttonWithCloseMenu}
                      onClick={()=>showMore(props.path)}
                 ><Link to={props.path} className={s.link}>подробнее</Link></button>
        </div>
    );
};

export default Project;