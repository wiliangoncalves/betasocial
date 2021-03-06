import React, {useEffect} from "react";

import { useNavigate } from "react-router-dom";

import "./Me.css";

import DefaultAvatar from "./img/defaultAvatar.png";

import SearchHeader from "./SearchHeader/SearchHeader";
import Aside from "../Aside/Aside";
import UserPost from "../Main/UserPost/UserPost";
import Nav from "../Nav/Nav";

// postMe Icons
import { BsCardImage } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { FaPoll } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";

export default function Me(){
    let navigate = useNavigate();

    const token = window.sessionStorage.getItem("access_token");

    useEffect(() => {
        fetch("https://tariqa.herokuapp.com/me", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            mode: 'cors',
            body: JSON.stringify({token})
        })
        .then(res => res.json())
        .then(res => {
            if(res.auth === true){   
            }
        })
        .catch(err => {if(err){console.log("Erro no catch do Me.jsx", err);}});
    });

    const handlePost = e => {
        navigate("/mypost");
    }

    // document.getElementById("avatar").src = window.localStorage.getItem('avatar');

    return(
        <div id="me" >
            <SearchHeader />

            <div className="postMe" id="postMe" onClick={handlePost}>
                <div className="postMeTop">
                    <a href="#"> <img src={DefaultAvatar} id="avatar" alt="meAvatar" className="meAvatar" /></a>
                    <select>
                        <option value="0">selecionar postagem</option>
                        <option value="1">postar na timeline</option>
                        <option value="2">postar no grupo</option>
                    </select>
                </div>

                <textarea placeholder="O que está pensando hoje?" rows="4" cols="50">
                    
                </textarea>

                <div className="postMeIcons">
                    <label htmlFor="photoVideo">
                        <BsCardImage size={20} color="green" />
                        <span>Photo/Video</span>
                        <input type="file"  id="photoVideo" style={{display: "none"}} />
                    </label>

                    <label htmlFor="emojiPost">
                        <BsEmojiSmile size={20} color="#f6b83c" />
                        <span>Emoji</span>
                        <input type="file"  id="emojiPost" style={{display: "none"}} />
                    </label>

                    <label htmlFor="pollPost">
                        <FaPoll size={20} color="#f87e3a" />
                        <span>Add a poll</span>
                        <input type="file" id="pollPost" style={{display: "none"}} />
                    </label>

                    <label htmlFor="visiblePost">
                        <MdVisibility size={20} color="green" />
                        <span>Visibility</span>
                        <input type="file" id="visiblePost" style={{display: "none"}}/>
                    </label>

                    <label htmlFor="warningPost">
                        <IoIosWarning size={20} color="red" />
                        <span>Warning</span>
                        <input type="file" id="warningPost" style={{display: "none"}}/>
                    </label>
                </div>
            </div>

            <UserPost />

            <Nav />

            <Aside />
        </div>
    );
}