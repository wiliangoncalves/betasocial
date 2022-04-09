import React from "react";

import "./HandleError.css";

export default function HandleError(props){
    return(
        <div style={{display: "none"}} id="handleError">
            <p>{props.message}</p>
            {/* <p>Por favor, preencha os dados corretamente!</p> */}
            <span className="closeMessageError">X</span>
        </div>
    );
}