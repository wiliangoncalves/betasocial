import React from "react";

import "./HandleSuccess.css";

export default function HandleSuccess(props){
    return(
        <div id="handleSuccess" style={{display: "none"}}>
            <p>{props.message}</p>
            <span className="closeMessageSuccess">X</span>
        </div>
    );
}