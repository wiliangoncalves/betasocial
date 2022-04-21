import React, {useState} from "react";

import "./Register.css";

import HandleError from "../../HandleMessage/HandleError";
import HandleSuccess from "../../HandleMessage/HandleSuccess";

export default function Register(){
    const [user, setUser] = useState("");
    const [profile, setProfile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const [message, setMessage] = useState("");

    const handleRegister = e => {
        fetch("http://192.168.0.109:3080/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            body: JSON.stringify({user, profile, email, password, repeatPassword})
        })
        .then(res => res.json())
        .then(res => {
            const handleError = document.getElementById("handleError");
            const handleSuccess = document.getElementById("handleSuccess");
            const closeMessageError = document.querySelector(".closeMessageError");
            const closeMessageSuccess = document.querySelector(".closeMessageSuccess");

            if(res.status === 400){
                handleError.style.display = "flex";
                setMessage(res.message);

                closeMessageError.addEventListener("click", (e) => {
                    handleError.style.display = "none";
                });
            }

            if(res.status === 200){
                handleSuccess.style.display = "flex";
                setMessage(res.message);

                closeMessageSuccess.addEventListener("click", (e) => {
                    handleSuccess.style.display = "none";
                });

                document.querySelectorAll(".formFields input").forEach(e => {
                    e.value = "";
                });

                setUser("");
                setProfile("");
                setEmail("");
                setPassword("");
                setRepeatPassword("");
            }
        })
        .catch(err => {
            if(err){console.log("Erro no Register.jsx handleRegister fetch!", err)}
        });

        e.preventDefault();
    }
    
    return(
        <div className="formRegister" id="Register">

            <HandleError message={message} />
            <HandleSuccess message={message} />

            <div className="registerContainer">
        
                <div className="registerIntro">
                    <a href="/">X</a>
                    <h2>Cadastro</h2>
                    <p>é rápido e fácil</p>
                </div>

                <hr/>

                <form>
                    <div className="formFields">
                        <input type="text" id="username" name="username" placeholder="nome de usuário" onChange={(e) => setUser(e.target.value)} autoComplete="off" autoFocus />

                        <input type="text" id="name" name="name" placeholder="Seu nome de perfil" onChange={(e) => setProfile(e.target.value)} autoComplete="off" />

                        <input type="email" id="email" name="email" autoComplete="off" placeholder="Email válido" onChange={(e) => setEmail(e.target.value)} />
                    
                        <input type="password" id="password" name="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} autoComplete="off" />

                        <input type="password" id="repeatpassword" name="repeatpassword" placeholder="Confirme sua senha" onChange={(e) => setRepeatPassword(e.target.value)} autoComplete="off" />
                    </div>

                    <button type="submit" onClick={handleRegister} >Criar Conta</button>
                </form>
            </div>
        </div>
    );
}