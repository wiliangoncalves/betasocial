import React from "react";

import { AiOutlineSearch  } from "react-icons/ai";

import "./SearchBar.css";

import Logo from "../../../img/Logo.png";

export default function SearchBar(){
    return(
        <div className="searchBar">
            <a href="/"> <img src={Logo} alt="Logo" /> </a>

            <div className="searchContainer">
                <input type="text" placeholder="Procurar" autoComplete="off" />
                <a href="/search"><AiOutlineSearch size={22} className="searchGlass" color="blue"/></a>
            </div>
        </div>
    );
}