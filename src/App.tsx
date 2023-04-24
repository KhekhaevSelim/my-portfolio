import React from 'react';
import './App.module.css';
import FullPortfolio from "./fullPortfolio/FullPortfolio";
import {Route, Routes} from "react-router-dom";
import TaskManager from "./projects/taskManager/TaskManager";
import SearchBooks from "./projects/searchBooks/SearchBooks";
import OnlineShop from "./projects/onlineShop/OnlineShop";
function App() {

    return (
    <div style={{backgroundColor : "#111827"}}>
        <Routes>
        <Route path={"/"} element={<FullPortfolio/>}/>
        <Route path={"/taskManager"} element={<TaskManager/>}/>
        <Route path={"/searchBooks"} element={<SearchBooks/>}/>
        <Route path={"/onlineShop"} element={<OnlineShop/>}/>

        </Routes>
    </div>
  );
}

export default App;
