import React, {useState} from "react";

const token = sessionStorage.getItem("access_token");

export default function Avatar(){
    const [avatar, setAvatar] = useState("");

    fetch("http://192.168.0.116:3080/profile", {
    method: "POST",
    headers: {
        "Content-Type": "Application/json"
    },
    mode: "cors",
    body: JSON.stringify({token})
    })
    .then(res => res.json())
    .then(res => {
        setAvatar(res.avatar);
    })
    .catch(err => {console.log("Erro no catch do Profile.jsx", err)});

    return(
        <div className="avatarComponent">
            <img id="avatar" src={avatar} draggable="false" alt="avatar" style={{marginTop: "2px"}} />
        </div>
    );
};