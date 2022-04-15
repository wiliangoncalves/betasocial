import React, { useEffect, useState } from "react";

import "./Profile.css";

// HeaderMe Icons
import SearchHeader from "../SearchHeader/SearchHeader";

import Avatar from "../img/cooper.jpg";
import DefaultAvatar from "../img/defaultAvatar.png";

export default function Profile(props){
    const [username, setUsername] = useState("");
    const [profile, setProfile] = useState("");
    const token = window.sessionStorage.getItem("access_token");

    useEffect(() => {
        fetch("https://tariqa.herokuapp.com/profile", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            mode: "cors",
            body: JSON.stringify({token})
        })
        .then(res => res.json())
        .then(res => {
            setUsername(res.username);
            setProfile(res.profile);
        })
        .catch(err => {console.log("Erro no catch do Profile.jsx", err)});
    });

    return(
        <div id="profile">
            <SearchHeader />

            <div className="mainProfile">
                <label htmlFor="uploadAvatar">
                    <img src={DefaultAvatar} alt="User avatar" />
                    <input type="file" id="uploadAvatar" />
                </label>

                <div className="profileUserName">
                    <span className="pUsername">{username}</span>
                    <span className="pProfile">@{profile}</span>
                </div>

                <button className="btnEditProfile">Edit Profile {props.user}</button>
            </div>
        </div>
    );
}