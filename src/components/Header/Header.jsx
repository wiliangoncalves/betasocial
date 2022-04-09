import React, {useState} from "react";

import "./Header.css";

import Me from "../Me/Me";

import SearchBar from "./SearchBar/SearchBar";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Header(){
    const [message, SetMessage] = useState("");
    
    return(
        <header id="header">
            <div className="headerTop">

                <SearchBar />

                {/* <div className="searchBar">
                    <a href="/"> <img src={Logo} alt="Logo" /> </a>

                    <div className="searchContainer">
                        <input type="text" placeholder="Procurar" autoComplete="off" />
                        <a href="/search"><AiOutlineSearch size={22} className="searchGlass" color="blue"/></a>
                    </div>
                </div> */}

                <div className="buttons">
                    <a href="/login" className="login">login</a>
                    <a href="/register" className="register">cadastro</a>
                </div>
            </div>
        </header>
    );
}