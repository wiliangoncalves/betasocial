import React, { useEffect } from "react";

import "./Profile.css";

// HeaderMe Icons
import SearchHeader from "../SearchHeader/SearchHeader";

import Avatar from "../img/cooper.jpg";

export default function Profile(){
    return(
        <div id="profile">
            <SearchHeader />

            <div className="mainProfile">
                <img src={Avatar} alt="User avatar" />

                <div className="profileUserName">
                    <span>Nome de usuário</span>
                    <span>@algo</span>
                </div>

                <button className="btnEditProfile">Edit Profile</button>
            </div>
        </div>
    );
}