import React, {useState} from "react";

import Profile from "../Profile/Profile";

import Cooper from "./cooper.jpg";

export const handleUploadAvatar = (e) => {

    let fileExtension;
    let fileName;

    let UploadFieldID = "uploadAvatar";
    let MaxSizeInBytes = 21097152;
    fileName = document.getElementById(UploadFieldID);
    const [file] = fileName.files;

    if(fileName.files && fileName.files.length === 1 && fileName.files[0].size > MaxSizeInBytes){
        let err = document.createElement("div");
        let span = document.createElement("span");
        let p = document.createElement("p");
        let msg = "O arquivo não pode ser maior que " + parseInt(MaxSizeInBytes/1024/1024) + "MB";

        err.setAttribute("class", "err");

        span.setAttribute("class", "closeMessageError");
        span.innerText = "X";
        
        p.innerText = msg;

        err.appendChild(p);
        err.appendChild(span);

        document.querySelector("#profile").appendChild(err);

        document.querySelector(".closeMessageError").addEventListener("click", (e) => {
            document.querySelector(".err").style.display = "none";
            document.querySelector("#profile").removeChild(err);
            err.remove();
            span.remove();
            p.remove();
            fileName.value = "";
        });

        return false;
    }
    else{
        for(let i = 0; i < fileName.files.length; i++){
            fileExtension = fileName.files[i].name.slice(fileName.files[i].name.indexOf("."));

            if(fileExtension === ".PNG" || fileExtension === ".png" || fileExtension === ".jpg" || fileExtension === ".jpeg"){
                let nome = fileExtension;
                let myBlob = file;
                
                // console.log(myBlob);

                // let randomName = Math.floor(Math.random() * 99999999);
                // var fileContent = document.getElementById("img").src;
                // let bb = new Blob([file ], { type: 'image/bmp' });
                // let a = document.createElement('a');
                // a.download = `${randomName}.jpg`;
                // a.href = window.URL.createObjectURL(bb);
                // a.click();

                document.querySelectorAll("#img").forEach(e => {
                    e.src = URL.createObjectURL(file);
                    e.setAttribute("custom-type", nome);

                })

                document.querySelector(".imageType").innerHTML = fileExtension;
            }
            else{
                let err = document.createElement("div");
                let span = document.createElement("span");
                let p = document.createElement("p");
                let msg = "Por favor adicione uma IMAGEM!";

                err.setAttribute("class", "err");

                span.setAttribute("class", "closeMessageError");
                span.innerText = "X";
                
                p.innerText = msg;
        
                err.appendChild(p);
                err.appendChild(span);
        
                document.querySelector("#profile").appendChild(err);

                document.querySelector(".closeMessageError").addEventListener("click", (e) => {
                    document.querySelector(".err").style.display = "none";
                    document.querySelector("#profile").removeChild(err);
                    err.remove();
                    span.remove();
                    p.remove();
                    fileName.value = "";
                });
            }

        }
    }
};

export default function Avatar(props){

    return(
        <div>
            <img id="img" src={Cooper} draggable="false" alt="avatar"/>
            <span className="imageType" style={{display: "none"}}></span>
        </div>
    );
};
