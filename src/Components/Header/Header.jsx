import React, { useState } from "react";
import Search from "../Search/Search";
import "./Header.css";

const Header = ({searchText, changeText}) => {

    return (
        <header>
            <div>
                <h2>Проект по Реакт</h2>
            </div>
            <Search text={searchText} foo={changeText}/>
        </header>
    )
}

export default Header;