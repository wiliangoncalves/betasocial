import React, {useState} from "react";

import "./SearchHeader.css";

import Avatar from "../avatar/Avatar";

import Logo from "../../../img/Logo.png";

// import DefaultAvatar from "../img/defaultAvatar.png";
// import Avatar from "../img/cooper.jpg";

// HeaderMe Icons
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";

export default function SearchHeader(){
    const token = sessionStorage.getItem("access_token");

    window.onload = fetch("http://192.168.0.109:3080/profile", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            mode: "cors",
            body: JSON.stringify({token})
        })
        .then(res => res.json())
        .then(res => {
            document.querySelector(".meAvatarHeader > img").src = res.avatar;
        })
        .catch(err => {console.log("Erro no catch do Profile.jsx", err)});
    return(
        <div className="headerMe">
            <a href="/me"> <img src={Logo} alt="Logo" /> </a>

            <div className="headerMeIcons">
                <a href="/search"><AiOutlineSearch size={30} color="#2d3436" className="headerMeSearchIcon" /></a>
                <a href="/chat"><AiFillMessage size={30} color="#2d3436" className="headerMeChatIcon" /></a>

                <a href="/profile" className="meAvatarHeader"> <img style={{width: "64px", height: "60px"}} src="" id="avatar" alt="Avatar" /> </a>
            </div>
        </div>
    );
}