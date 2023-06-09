import React from 'react';
import s from "./Projects.module.css"
import Project from "./project/Project";
import taskManager from "../assets/taskManager2.bmp"
import searchBooks from "../assets/searchBooks2.bmp"
import onlineShop from "../assets/online-shop.bmp"
type ProjectsPropsType = {
    rotate : boolean
}
const Projects = (props : ProjectsPropsType) => {

    const projects = [
        { img : taskManager, path : "/taskManager" },
        { img : searchBooks, path: "/searchBooks"},
        { img : onlineShop, path: "/onlineShop"}
    ]
    return (
        <div className={s.main} id={"projects"}>
            <div className={s.container}>
            <h2 className={s.title}>Мои проекты</h2>
                <div className={s.projects}>
                    {projects.map(el=> {
                        return (
                            <Project rotate={props.rotate} img={el.img} path={el.path}/>
                        )
                    })}

                </div>
            </div>

        </div>
    );
};

export default Projects;