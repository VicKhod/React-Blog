import React, {useState} from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";


export default () => {
    const [searchText, changeText] = useState("float");


    return <>
        <Header searchText={searchText} changeText={changeText}/>
        {searchText && <div>You are searching for {searchText}</div>}
        <Main search={searchText}/>
        <Footer/>
    </>
}
