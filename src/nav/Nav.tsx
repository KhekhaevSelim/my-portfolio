import React, {useState, MouseEvent, useEffect, ReactComponentElement} from 'react';
import n from "./Nav.module.css"
import menu from "../assets/menu.png"
import close from "../assets/close.png"
import sendMe from "../assets/sendMe.png"

type NavPropsType = {
    rotate : boolean,
    setRotate : (rotate:boolean)=> void
}
const Nav = (props : NavPropsType) => {

        const showMenu = (e: MouseEvent<HTMLImageElement>) => {
            e.stopPropagation()
            props.setRotate(true)
        }
        const closeMenu = (e: MouseEvent<HTMLImageElement>) => {
            e.stopPropagation()
            props.setRotate(false)
        }
        const handleClick = (e : MouseEvent,elementId : string) => {
            e.preventDefault()
            props.setRotate(false)
            const element = document.getElementById(elementId)
            if (element) {
                window.scrollTo({
                    top: element.offsetTop,
                    behavior: 'smooth',
                })
            }
        }
        return (
            props.rotate ?
                <div className={n.showMenu}>
                    <div className={n.closeMenuContainer}>
                        <img src={close} className={n.closeMenu} onClick={closeMenu}/>
                    </div>
                    <div className={n.links}>
                        <a href="" onClick={(e)=>handleClick(e, "main")}>Главная</a>
                        <a href="" onClick={(e)=>handleClick(e, "skills")}>Скилы</a>
                        <a href="" onClick={(e)=>handleClick(e, "projects")}>Проекты</a>
                    </div>
                </div>
                :

                <div className={n.nav}>

                        <p className={n.developer}>React developer from IT-Incubator</p>

                    <img src={menu} className={n.openMenu} onClick={showMenu}/>
                </div>
        );
    }
    ;

    export default Nav;