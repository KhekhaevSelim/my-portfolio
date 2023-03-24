import React from 'react';
import n from "./Nav.module.css"
const Nav = () => {
    return (
        <div className={n.nav}>
            <a href="">Главная</a>
            <a href="">Скиллы</a>
            <a href="">Работы</a>
            <a href="">Контакты</a>
        </div>
    );
};

export default Nav;