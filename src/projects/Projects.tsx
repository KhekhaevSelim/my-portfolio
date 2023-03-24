import React from 'react';
import s from "./Projects.module.css"
import Project from "./project/Project";
const Projects = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
            <h2 className={s.title}>Мои проекты</h2>
                <div className={s.projects}>
                   <Project/>
                   <Project/>


                </div>
            </div>

        </div>
    );
};

export default Projects;