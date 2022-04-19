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

    const handleEditProfile = e => {
        let editProfileContainer = window.document.querySelector(".editProfileContainer");
        editProfileContainer.style.display = "flex";
        document.getElementById("root").setAttribute("class", "editProfileRoot");


        const textarea = document.querySelector(".editBios");

        textarea.addEventListener("input", function (e) {
            this.style.height = "auto";
            this.style.height = this.scrollHeight + "px";
        })
    }

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

                <div className="editProfileContainer">
                    <div className="editProfileHeader">
                        <h2>Edit Profile</h2>
                        <span onClick={() => {
                            document.getElementById("root").removeAttribute("class", "editProfileRoot");
                            document.querySelector(".editProfileContainer").style.display = "none";
                        }}>X</span>
                    </div>

                    <img src={Avatar} alt="avatar" draggable="false" />

                    <hr/>

                    <p>User : {username}</p>
                    <input type="text" />

                    <p>Profile : @{profile}</p>
                    <input type="text" />

                    <textarea placeholder="Fale sobre você." className="editBios">

                    </textarea>

                    <div className="editButtonContainer">
                        <button>Cancel</button>
                        <button>Apply</button>
                    </div>
                </div>

                <button className="btnEditProfile" onClick={handleEditProfile}>Edit Profile {props.user}</button>
            </div>
        </div>
    );
}