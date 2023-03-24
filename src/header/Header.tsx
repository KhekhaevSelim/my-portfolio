import h from "./Header.module.css"
import React from 'react';
import Nav from "../nav/Nav";

const Header = () => {
    return (
        <div className={h.header}>
         <Nav/>
        </div>
    );
};

export default Header;