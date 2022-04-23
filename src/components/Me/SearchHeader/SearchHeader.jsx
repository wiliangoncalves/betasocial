import React from "react";

import "./SearchHeader.css";

import Avatar from "../avatar/Avatar";

import Logo from "../../../img/Logo.png";

// import DefaultAvatar from "../img/defaultAvatar.png";
// import Avatar from "../img/cooper.jpg";


// HeaderMe Icons
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";

export default function SearchHeader(){
    return(
        <div className="headerMe">
            <a href="/me"> <img src={Logo} alt="Logo" /> </a>

            <div className="headerMeIcons">
                <a href="/search"><AiOutlineSearch size={30} color="#2d3436" className="headerMeSearchIcon" /></a>
                <a href="/chat"><AiFillMessage size={30} color="#2d3436" className="headerMeChatIcon" /></a>

                <a href="/profile" className="meAvatarHeader"> <Avatar /> </a>
            </div>
        </div>
    );
}