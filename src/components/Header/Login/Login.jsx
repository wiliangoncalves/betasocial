import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

import HandleError from "../../HandleMessage/HandleError";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const pass = useNavigate();
    const PORT = process.env.PORT;
    
    const handleLogin = (e) => {
        fetch(`https://betasocial.vercel.app/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            mode: 'cors',
            body: JSON.stringify({email, password})
        })
        .then(res => JSON.stringify(res))
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
                        <input type="email" id="email" name="email" autoComplete="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} autoFocus />
                    
                        <input type="password" id="password" name="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} autoComplete="off" />
                    </div>

                    <button type="submit" onClick={handleLogin} >Entrar</button>
                </form>
            </div>
        </div>
    );
}