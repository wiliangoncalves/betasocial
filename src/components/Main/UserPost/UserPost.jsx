import React from "react";

import JoaoFoto from "./joao.jpeg";
import TankianFoto from "./tankian.jpeg";
import MaxFoto from "./max.jpeg";
import BruceFoto from "./bruce.jpeg";
import StevFoto from "./stev.jpeg";
import CooperFoto from "./cooper.jpg";

import {BiWorld} from "react-icons/bi";
import {AiOutlineLike} from "react-icons/ai";
import {BiMessage} from "react-icons/bi";
import {BiRepost} from "react-icons/bi";
import {BiShare} from "react-icons/bi";

import "./UserPost.css";

export default function userPost(){
    const getDate = new Date().toLocaleDateString();
    const getHour = new Date().getHours();
    const postedDate = getDate;
    const postedHour = getHour;

    const cooper = {
        nome: "Mr.Cooper",
        arroba: "@Tariqaaa"
    }

    return(
        <div className="userPost">
            <div className="userPostInfo">

                <div className="userPostName">

                    <a href="#"><img src={CooperFoto} alt="foto do usuário" /></a>
                    <p className="userPostFullName">
                        <a href="#" title="oi">{cooper.nome}</a>
                        <a href="#" title="oi">{cooper.arroba}</a>
                    </p>

                </div>

                <span>{postedDate} at {postedHour}h . {<BiWorld size={17} />}</span>
            </div>

            <div className="userPostText">
                <p>
                    Sobre:
                </p>

                <p>
                    1. Programador web fullstack.
                </p>

                <p>
                    2. Usuário de linux, Debian 11 Bullseye.
                </p>

                <p>
                    3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic omnis illum enim, doloribus corporis adipisci odio voluptate, praesentium quis dolorem tenetur dolorum deserunt eius eos officiis commodi numquam, culpa nobis!.
                </p>

                <p>
                    4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vitae iste dicta incidunt suscipit nihil quos ipsam ipsa deserunt labore accusantium, consequuntur harum dolorem impedit. Officia, nisi. Hic, consequuntur molestias..
                </p>
            </div>


            <div className="UserIcons">
                <a href="#" className="likeA">
                    {<AiOutlineLike size={20} title="Like" />}
                    <p style={{paddingLeft: "10px"}}>Like</p>
                </a>

                <a href="#" className="commentA">
                    {<BiMessage size={20} title="Comment" />}
                    <p style={{paddingLeft: "10px"}}>Comment</p>
                </a>

                <a href="#" className="repostA">
                    {<BiRepost size={25} title="Repost" />}
                    <p style={{paddingLeft: "10px"}}>Repost</p>
                </a>

                <a href="#" className="shareA">
                    {<BiShare size={20} title="Share" />}
                    <p style={{paddingLeft: "10px"}}>Share</p>
                </a>
            </div>
        </div>
    );
};