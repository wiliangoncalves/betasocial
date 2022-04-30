import React, { useEffect, useState } from "react";

import "./Auth.css";

export default function Auth({children, props}) {
    const token = window.sessionStorage.getItem("access_token");
    
    const [pass, setPass] = useState(false);
    const [show, setShow] = useState("none");

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
            return res.auth === true ? setPass(true) : setShow("block");
        })
        .catch(err => console.log("Erro no Auth.jsx catch", err));
        
    });
    
    if(pass){
        return (children)
    }

    return(
        <div style={{display: `${show}`}} id="auth">
            <h1>Você precisa se autenticar!</h1>

            <a href="/">Login</a>
        </div>
    );
};