import React, { useEffect, useState } from "react";

import "./Profile.css";

// HeaderMe Icons
import SearchHeader from "../SearchHeader/SearchHeader";

import Avatar from "../img/cooper.jpg";
import DefaultAvatar from "../img/defaultAvatar.png";

export default function Profile(props){
    const [dbUser, setDbUsername] = useState("");
    const [dbProfile, setDbProfile] = useState("");

    const [dbAllUsers, setDbAllUsers] = useState("");

    const [newUser, setNewUser] = useState("");

    const [newProfile, setNewProfile] = useState("");
    const token = window.sessionStorage.getItem("access_token");

    const [userMessage, setUserMessage] = useState("");
    const [profileMessage, setProfileMessage] = useState("");

    const userErrorMessage = document.querySelector(".userErrorMessage");
    const profileErrorMessage = document.querySelector(".profileErrorMessage");

    // Get database username and profile of the CURRENT USER!.
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

    // GET USERS FROM DATABASE.
    useEffect(() => {
        fetch("https://tariqa.herokuapp.com/profile", {
            method: "GET",
            headers: {
                "Content-Type": "Application/json"
            },
            mode: "cors"
        })
        .then(res => res.json())
        .then(res => {
            setDbAllUsers(res.users);
        })
        .catch(err => console.log("Erro no catch do GET do profile.jsx", err));
    })

    // Handle new username.
    const handleNewUser = element => {

       if(dbAllUsers.find(e => {return element.target.value.trim() === e.user})){
           console.log("Já existe no banco!");

           setUserMessage("Nome de usuário já está sendo usado!");
           userErrorMessage.style.display = "block";

           setNewUser(dbUser);

           return;
       }else{
           setNewUser(element.target.value);
           userErrorMessage.style.display = "none";

           return;
       }
    }

    // Handle new profile.
    const handleNewProfile = element => {
        if(dbAllUsers.find(e => {return element.target.value.trim() === e.profile})){
            console.log("Já existe no banco!");
 
            setUserMessage("Nome de usuário já está sendo usado!");
            userErrorMessage.style.display = "block";
 
            setNewProfile(dbProfile);
 
            return;
        }else{
            setNewProfile(element.target.value);
            userErrorMessage.style.display = "none";
 
            return;
        }
    }

    // Handle apply changes.
    const handleApplyProfile = e => {
        fetch("https://tariqa.herokuapp.com/addprofile", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            mode: "cors",
            body: JSON.stringify({token, newUser, dbUser, dbProfile})
        })
        .then(res => res.json())
        .then(res => {
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