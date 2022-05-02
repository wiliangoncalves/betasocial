import React, { useEffect, useState } from "react";

import {MdDateRange} from "react-icons/md";

import "./Profile.css";

// HeaderMe Icons
import SearchHeader from "../SearchHeader/SearchHeader";

import {Widget} from "@uploadcare/react-widget";

import Avatar from "../avatar/Avatar";

import UserPost from "../../Main/UserPost/UserPost";

let user;

fetch("http://192.168.0.109:3080/profile", {
        method: "GET",
        headers: {
            "Content-Type": "Application/json"
        },
        mode: "cors"
    })
    .then(res => res.json())
    .then(res => {
        user = res.users;
    })
    .catch(err => console.log("Erro no catch do GET do profile.jsx", err));

export default function Profile(props){
    const [dbUser, setDbUsername] = useState("");
    const [dbProfile, setDbProfile] = useState("");
    const [dbAvatar, setDbAvatar] = useState("");
    const [dbProfileAbout, setDbProfileAbout] = useState("");
    const [dbFollowers, setDbFollowers] = useState(0);
    const [dbFollowing, setDbFollowing] = useState(0);
    const [dbBetas, setDbBetas] = useState(0);
    const [dbMemberDateYear, setDbMemberDateYear] = useState("");
    const [dbMemberDateMonth, setDbMemberMonth] = useState("");
    const [dbMemberDateDay, setDbMemberDay] = useState("");

    const [followers, setFollowers] = useState(0);
    const [following, setFollowing] = useState(0);
    const [betas, setBetas] = useState(0);

    const [newUser, setNewUser] = useState("");
    const [newAvatar, setNewAvatar] = useState("");
    const [newProfile, setNewProfile] = useState("");
    const [newProfileAbout, setNewProfileAbout] = useState("");
    const token = window.sessionStorage.getItem("access_token");

    const [userMessage, setUserMessage] = useState("");
    const [profileMessage, setProfileMessage] = useState("");

    const userErrorMessage = document.querySelector(".userErrorMessage");
    const profileErrorMessage = document.querySelector(".profileErrorMessage");  

    // Get database username and profile of the CURRENT USER!.
    useEffect(() => {
        fetch("http://192.168.0.109:3080/profile", {
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
            setDbAvatar(res.avatar);
            setDbProfileAbout(res.about);
            setDbFollowers(res.followers);
            setDbFollowing(res.following);
            setDbBetas(res.betas);
            setDbMemberDateYear(res.year);
            setDbMemberMonth(res.month);
            setDbMemberDay(res.day);
        })
        .catch(err => {console.log("Erro no catch do Profile.jsx", err)});
    });

    // Handle new username.
    const handleNewUser = element => {

       if(user.find(e => {return element.target.value.trim() === e.user})){
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
        if(user.find(e => {return element.target.value.trim() === e.profile})){
            console.log("Já existe no banco!");
 
            setProfileMessage("Nome de Perfil já está sendo usado!");
            profileErrorMessage.style.display = "block";
 
            setNewProfile(dbProfile);
 
            return;
        }else{
            setNewProfile(element.target.value);
            profileErrorMessage.style.display = "none";
 
            return;
        }
    }
    
    //Handle avatar change
    const handleUploadAvatar = element => {
        document.querySelectorAll("#avatar").forEach(e => {
            e.src = element.originalUrl;
        });
        setNewAvatar(element.originalUrl);
    }

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

    // Handle About.
    const handleAbout = event => {
        const aboutInput = event.target.value.trim();

        setNewProfileAbout(aboutInput);
    }

    // Handle apply changes.
    const handleApplyProfile = e => {
        fetch("http://192.168.0.109:3080/addprofile", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            mode: "cors",
            body: JSON.stringify({token, newUser, newProfile ,dbUser, dbProfile, newAvatar, dbAvatar, newProfileAbout, dbProfileAbout})
        })
        .then(res => res.json())
        .then(res => {

            if(newAvatar.length <= 0){
                setNewAvatar(dbAvatar);
                
            }
            setNewAvatar(res.avatar);
            document.location.reload();
        })
        .catch(err => {console.log("Erro no catch do Profile.jsx", err)});

        e.preventDefault();
    };

    return(
        <div id="profile">
            <SearchHeader />

            <div className="mainProfile">    
                <Avatar />
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

                    <label htmlFor="uploadAvatar">
                        <Avatar />
                        <div style={{marginTop: "-30px"}}>
                            <Widget tabs="file facebook instagram gphotos camera gdrive" locale="pt" imagesOnly publicKey="af473fee2421b8b78b43"  onChange={handleUploadAvatar} />
                        </div>
                    </label>

                    <p>User : {dbUser}</p>
                    <input type="text" id="newUser" onChange={handleNewUser} autoComplete="off" />
                    <p className="userErrorMessage" style={{display: "none"}}>{userMessage}</p>

                    <p>Profile : @{dbProfile}</p>
                    <input type="text" id="newProfile" onChange={handleNewProfile} autoComplete="off" />
                    <p className="profileErrorMessage" style={{display: "none"}}>{profileMessage}</p>

                    <p style={{marginBottom: "-15px"}}>About:</p>
                    <textarea placeholder="Fale sobre você." id="profileAbout" className="editBios" onChange={handleAbout}>

                    </textarea>

                    <div className="editButtonContainer">
                        <button onClick={() => document.location.reload()}>Cancel</button>
                        <button onClick={handleApplyProfile} type="submit">Apply</button>
                    </div>
                </div>

                {/* <p className="joinedDate"><MdDateRange size={20} />joined date<br/>2022/05/02</p> */}

                <button className="btnEditProfile" onClick={handleEditProfile}>Edit Profile {props.user}</button>

                <div className="profileInfo">
                    <div>{dbBetas} <p>Betas</p></div>
                    <div>{dbFollowers} <p>Followers</p></div>
                    <div>{dbFollowing} <p>Following</p></div>
                </div>

            </div>

            <div className="profileAbout">
                <span>About:</span>
                <p>{dbProfileAbout}</p>
                <p className="joinedDate"><MdDateRange size={20} />Member Since<br/>{dbMemberDateYear}/{dbMemberDateMonth}/{dbMemberDateDay}</p>
            </div>

            {/* <div className="profileFollowing">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta unde neque dolorem numquam quos mollitia ipsa nostrum perferendis, hic ratione aperiam, delectus eum dolorum tenetur magnam veniam perspiciatis? Molestiae, id!</p>
            </div> */}

            {/* <div className="profileInfo">
                <div>{followers} <p>Betas</p></div>
                <div>{followers} <p>Followers</p></div>
                <div>{following} <p>Following</p></div>
            </div>

            <div className="profileAbout">
                <span>About</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam voluptatum eius molestiae asperiores nostrum cupiditate et nulla numquam! Amet quia quo minima provident in possimus eum nam error cupiditate autem.</p>
            </div> */}
        </div>
    );
}