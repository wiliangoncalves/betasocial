import React, {useState} from "react";

const token = sessionStorage.getItem("access_token");

export default function Avatar(){
    const [avatar, setAvatar] = useState("");

    fetch("https://tariqa.herokuapp.com/profile", {
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
        <div>
            <img id="img" src={avatar} draggable="false" alt="avatar"/>
        </div>
    );
};