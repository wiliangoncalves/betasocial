import React from "react";

import "./MyPost.css";

import DefaultAvatar from "../../../img/avatars/defaultAvatar.png";

import { MdArrowBackIosNew } from "react-icons/md";

//postMe Icons
import { BsCardImage } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { FaPoll } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { MdVisibility } from "react-icons/md";
// import { MdVisibilityOff } from "react-icons/md";

// Post Options imports
import { HandlePhotoVideo } from "./PhotoVideo/PhotoVideo";
import { HandleTextArea } from "./TextArea/TextArea";
import HandleEmoji from "./Emoji/HandleEmoji";

export default function MyPost(){
    // let local = window.location.href;
    // if(local.includes("/mypost")){
    //     document.getElementById("postMe").style.margin = "20px 25.5% 30px auto;";
    // }

    return(
        <div className="myPostContainer">
            <div className="myPostTop">
                <a href="/me"><MdArrowBackIosNew size={25} /></a>
                <p>Minha Postagem</p>
                <button className="btnPostTop" type="submit" onClick={() => {
                    if(document.querySelector(".myPost textarea").value.length > 0){
                        alert("Deu boa!");
                    }
                }}>Postar</button>
            </div>

            <div className="postMe myPost" id="postMe">
                <div className="postMeTop">
                    <a href="/"> <img src={DefaultAvatar} alt="meAvatar" className="meAvatar" /> </a>
                    <select>
                        <option value="0">selecionar postagem</option>
                        <option value="1">postar na timeline</option>
                        <option value="2">postar no grupo</option>
                    </select>
                </div>

                <div className="preview">
                    <textarea onChange={HandleTextArea} placeholder="O que está pensando hoje?" rows="4" cols="50"className="textArea" maxLength="1000">
                        
                    </textarea>

                    <div className="contentPreview containerPreview">
                        <HandleEmoji />
                    </div>
                </div>

                <div className="postMeIcons myPostMeIcons">

                    <label htmlFor="photoVideo">
                        <BsCardImage size={20} color="green" />
                        <span>Photo/Video</span>
                        <input type="file"  id="photoVideo" accept="video/mp4,image/png, image/jpeg, image/jpg" onChange={HandlePhotoVideo} multiple style={{display: "none"}} data-max-size="32154" />
                    </label>

                    <label htmlFor="emojiPost"  onClick={() => {
                        document.getElementById("EmojiContainer").style.display = "block";
                    }} >
                        <BsEmojiSmile size={20} color="#f6b83c" />
                        <span>Emoji</span>
                        {/* <span id="emojiPost" style={{display: "none"}} ></span> */}
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
            <button className="btn-post" disabled>Postar</button>
        </div>
    );
}