import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

import HandleError from "../../HandleMessage/HandleError";

import SearchHeader from "../../Me/SearchHeader/SearchHeader";

import Profile from "../../Me/Profile/Profile";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tk, setTk] = useState("");
    const [message, setMessage] = useState("");
    const pass = useNavigate();
    
    const handleLogin = (e) => {
        fetch("http://192.168.0.109:3080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            mode: 'cors',
            body: JSON.stringify({email, password})
        })
        .then(res => res.json())
        .then(res => {
            let token = res.token;
           
            const handleError = document.getElementById("handleError");
            const closeMessageError = document.querySelector(".closeMessageError");

            if(res.status === 400){
                handleError.style.display = "flex";
                setMessage(res.message);

                closeMessageError.addEventListener("click", (e) => {
                    handleError.style.display = "none";
                });
            }

            if(res.auth){
                window.sessionStorage.setItem("access_token", token);

                window.onload = fetch("http://192.168.0.109:3080/profile", {
                    method: "POST",
                    headers: {
                        "Content-Type": "Application/json"
                    },
                    mode: "cors",
                    body: JSON.stringify({token})
                    })
                    .then(res => res.json())
                    .then(res => {
                        // document.querySelector("#avatar").src = res.avatar;
                    })
                    .catch(err => {console.log("Erro no catch do Login.jsx", err)});

                return pass("/me");
            }
        })
        .catch(err => console.log("Erro no catch do Login.jsx", err));

        e.preventDefault();
    }

    return(
        <div className="formLogin" id="Login">
            <HandleError message={message} />
            <div className="loginContainer">
        
                <div className="loginIntro">
                    <a href="/">X</a>
                    <h2>Login</h2>
                    <p>Logar na Beta Social</p>
                </div>

                <hr/>

                <form id="loginForm">
                    <div className="formFields">
                        <input type="email" id="email" name="email" autoComplete="off" placeholder="Email" onChange={(e) => setEmail(e.target.value)} autoFocus />
                    
                        <input type="password" id="password" name="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} autoComplete="off" />
                    </div>

                    <button type="submit" onClick={handleLogin} >Entrar</button>
                </form>
            </div>
        </div>
    );
}