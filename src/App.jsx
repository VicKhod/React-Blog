import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Post from "./Components/Post/Post";



export default () => {
    const [searchText, changeText] = useState("");

    return <>
        <Header searchText={searchText} changeText={changeText}/>
        <Routes>
            <Route path="/" element={<Main search={searchText}/>}/>
            <Route path="/post/:id" element={<Post/>}/>
        </Routes>
        <Footer/>
    </>
}
