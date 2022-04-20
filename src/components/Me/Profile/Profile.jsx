import React, { useEffect, useState } from "react";

import "./Profile.css";

// HeaderMe Icons
import SearchHeader from "../SearchHeader/SearchHeader";

import Avatar from "../img/cooper.jpg";
import DefaultAvatar from "../img/defaultAvatar.png";

export default function Profile(props){
    const [dbUser, setDbUsername] = useState("");
    const [dbProfile, setDbProfile] = useState("");

    const [newUser, setNewUser] = useState("");
    const [newProfile, setNewProfile] = useState("");
    const token = window.sessionStorage.getItem("access_token");

    const [userMessage, setUserMessage] = useState("");
    const [profileMessage, setProfileMessage] = useState("");

    const userErrorMessage = document.querySelector(".userErrorMessage");
    const profileErrorMessage = document.querySelector(".profileErrorMessage");

    // Get database username and profile.
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
            setDbUsername(res.user);
            setDbProfile(res.profile);
        })
        .catch(err => {console.log("Erro no catch do Profile.jsx", err)});
    });

    // Handle new username.
    const handleNewUser = e => {
        let userInputName = e.target.value.trim();
        setNewUser(userInputName);

        fetch("https://tariqa.herokuapp.com/profile", {
            method: "GET",
            headers: {
                "Content-Type": "Application/json"
            },
            mode: "cors"
        })
        .then(res => res.json())
        .then(res => {
            res.users.forEach(e => {
                if(e.user === userInputName){
                    setUserMessage("Nome de usuário já está sendo usado!");
                    userErrorMessage.style.display = "block";

                    setNewUser(dbUser);
                    setNewProfile(dbProfile);

                    return;
                }else{
                    userErrorMessage.style.display = "none";

                    return;
                }
            })
        })
        .catch(err => console.log("Erro no catch do fetch GET do Profile", err));

        e.preventDefault();
    }

    // Handle new profile.
    const handleNewProfile = e => {
        let userInputProfile = e.target.value.trim();
        setNewProfile(userInputProfile);

        fetch("https://tariqa.herokuapp.com/profile", {
            method: "GET",
            headers: {
                "Content-Type": "Application/json"
            },
            mode: "cors"
        })
        .then(res => res.json())
        .then(res => {
            res.users.forEach(e => {
                if(e.profile === userInputProfile){
                    setProfileMessage("Nome de Perfil já está sendo usado!");
                    profileErrorMessage.style.display = "block";

                    setNewUser(dbUser);
                    setNewProfile(dbProfile);

                    return;
                }else{
                    profileErrorMessage.style.display = "none";
                    return;
                }
            })
        })
        .catch(err => console.log("Erro no catch do fetch GET do Profile", err));

        e.preventDefault();
    }

    // Handle apply changes.
    const handleApplyProfile = e => {
        fetch("https://tariqa.herokuapp.com/addprofile", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            mode: "cors",
            body: JSON.stringify({token, newUser, newProfile})
        })
        .then(res => res.json())
        .then(res => {
            if(res.user === ''){
                return;
            }else{
                setDbUsername(res.user);
            }

            if(res.profile === ''){
                return;
            }else{
                setDbProfile(res.profile);
            }

        })
        .catch(err => {console.log("Erro no catch do Profile.jsx", err)});

        e.preventDefault();
    };

    // Handle profile apply.
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
                    <span className="pUsername">{dbUser}</span>
                    <span className="pProfile">@{dbProfile}</span>
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

                    <p>User : {dbUser}</p>
                    <input type="text" id="newUser" onChange={handleNewUser} autoComplete="off" />
                    <p className="userErrorMessage" style={{display: "none"}}>{userMessage}</p>

                    <p>Profile : @{dbProfile}</p>
                    <input type="text" id="newProfile" onChange={handleNewProfile} autoComplete="off" />
                    <p className="profileErrorMessage" style={{display: "none"}}>{profileMessage}</p>

                    <textarea placeholder="Fale sobre você." className="editBios">

                    </textarea>

                    <div className="editButtonContainer">
                        <button>Cancel</button>
                        <button onClick={handleApplyProfile} type="submit">Apply</button>
                    </div>
                </div>

                <button className="btnEditProfile" onClick={handleEditProfile}>Edit Profile {props.user}</button>
            </div>
        </div>
    );
}