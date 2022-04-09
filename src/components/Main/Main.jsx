import React from "react";

import "./Main.css";

import UserPost from "./UserPost/UserPost";
import Aside from "../Aside/Aside";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";


export default function Main(){
    return(
        <main>
            <Header/>

            <Aside />

            <UserPost />

            <Nav />
         
        </main>
    );
}