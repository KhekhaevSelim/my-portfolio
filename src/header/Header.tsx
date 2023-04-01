import h from "./Header.module.css"
import React from 'react';
import Nav from "../nav/Nav";

type HeaderPropsType = {
    rotate : boolean,
    setRotate : (rotate:boolean)=> void
}

const Header = (props : HeaderPropsType) => {
    return (
        <div className={h.header}>
         <Nav rotate={props.rotate} setRotate={props.setRotate}/>
        </div>
    );
};

export default Header;