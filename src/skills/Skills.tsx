import React from 'react';
import s from "./Skills.module.css"
import Skill from "./skill/Skill";
import react from "../assets/react.svg"
import js from "../assets/js.webp"
import css from "../assets/css.svg"
import html from "../assets/html.svg"
import ts from "../assets/ts.png"
import storyBook from "../assets/storybook.svg"
import unit from "../assets/unit.png"
import figma from "../assets/figma.svg"
import rest from "../assets/rest.png"
import material from "../assets/material ui.svg"
import styled from "../assets/styled.png"
import jest from "../assets/jest.png"
import redux from "../assets/redux.svg"

const Skills = () => {
    const skills = [
        { title : "React", description : "Разработка SPA, LP, утилитных веб-приложений", icon : react },
        { title : "Redux", description : "Организация BLL уровня с соблюдением FLUX концепции", icon : redux },
        { title : "JavaScript", description : "Разработка веб-сайтов на нативном языке", icon : js },
        { title : "TypeScript", description : "Типизация входных данных, оптимизация поиска багов", icon : ts },
        { title : "CSS", description : "Создание современного адаптивного дизайна и стилей", icon : css },
        { title : "Material UI", description : "Быстрая и адаптивная стилизация компонент", icon : material },
        { title : "Styled components", description : "Кастомная стилизация уникальных компонент", icon : styled },
        { title : "HTML", description : "Семантическая вёрстка, помощь в SEO продвижении", icon : html },
        { title : "StoryBook", description : "Тестирование поведения компонент, совместная работа с дизайнером", icon : storyBook },
        { title : "Unit test", description : "Тестирование отдельных узлов программы", icon : unit },
        { title : "Jest test", description : "Тестирование и контроль визуальных изменений", icon : jest },
        { title : "Figma", description : "вёрстка пользовательского интерфейса по макету дизайнера", icon : figma },
        { title : "Rest API", description : "Организация DAL уровня в соответствии со стандартами REST API", icon : rest },


    ]
    return (
        <div className={s.main}>
            <div className={s.container}>
            <p className={s.title}>Мои навыки</p>
                <div className={s.skills}>
                    {skills.map(el=> {
                        return (
                            <Skill title={el.title} description={el.description} icon={el.icon}/>
                        )
                    })}
                </div>
            </div>

        </div>
    );
};

export default Skills;