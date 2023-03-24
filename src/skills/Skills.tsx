import React from 'react';
import s from "./Skills.module.css"
import Skill from "./skill/Skill";
const Skills = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
            <h2 className={s.title}>Мои скиллы</h2>
                <div className={s.skills}>
                    <Skill title={"react"} description={"разработка SPA"} icon={"icon"}/>
                    <Skill title={"js"} description={"native dev"} icon={"icon"}/>
                    <Skill title={"css"} description={"css module, styled"} icon={"icon"}/>

                </div>
            </div>

        </div>
    );
};

export default Skills;