import "../../../HandleMessage/HandleError.css";

export const HandlePhotoVideo = e => {
    let fileExtension;
    let fileName;

    let UploadFieldID = "photoVideo";
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

        document.querySelector(".myPostTop").appendChild(err);

        document.querySelector(".closeMessageError").addEventListener("click", (e) => {
            document.querySelector(".err").style.display = "none";
            document.querySelector(".myPostTop").removeChild(err);
            err.remove();
            span.remove();
            p.remove();
            fileName.value = "";
        });

        return false;
    }
    else{
        for(let i = 0; i < fileName.files.length; i++){
            let preview;
            let contentPreview = document.querySelector(".contentPreview");

            fileExtension = fileName.files[i].name.slice(fileName.files[i].name.indexOf("."));

            if(fileExtension === ".PNG" || fileExtension === ".jpg" || fileExtension === ".jpeg"){
                preview = new Image();

                document.querySelectorAll(".contentPreview").forEach(e => {
                    if(e.childElementCount >= 3){
                        let err = document.createElement("div");
                        let span = document.createElement("span");
                        let p = document.createElement("p");
                        let msg = "Não pode adicionar mais de 2 ITEMS!";

                        err.setAttribute("class", "err");

                        span.setAttribute("class", "closeMessageError");
                        span.innerText = "X";
                        
                        p.innerText = msg;

                        err.appendChild(p);
                        err.appendChild(span);

                        document.querySelector(".myPostTop").appendChild(err);

                        document.querySelector(".closeMessageError").addEventListener("click", (e) => {
                            document.querySelector(".err").style.display = "none";
                            document.querySelector(".myPostTop").removeChild(err);
                            err.remove();
                            span.remove();
                            p.remove();
                            fileName.value = "";
                        });

                        return;
                    }
                    else{
                        preview.src = URL.createObjectURL(file);
                        preview.setAttribute("class", "photoPreview");
                        preview.setAttribute("draggable", "false");

                        contentPreview.appendChild(preview);
                    }
                });
            }

            if(fileExtension === ".mp4"){
                preview = document.createElement("video");

                document.querySelectorAll(".contentPreview").forEach(e => {
                    if(e.childElementCount >= 3){
                        let err = document.createElement("div");
                        let span = document.createElement("span");
                        let p = document.createElement("p");
                        let msg = "Não pode adicionar mais de 2 ITEMS!";

                        err.setAttribute("class", "err");

                        span.setAttribute("class", "closeMessageError");
                        span.innerText = "X";
                        
                        p.innerText = msg;

                        err.appendChild(p);
                        err.appendChild(span);

                        document.querySelector(".myPostTop").appendChild(err);

                        document.querySelector(".closeMessageError").addEventListener("click", (e) => {
                            document.querySelector(".err").style.display = "none";
                            document.querySelector(".myPostTop").removeChild(err);
                            err.remove();
                            span.remove();
                            p.remove();
                            fileName.value = "";
                        });

                        return;
                    }
                    else{
                        preview.src = URL.createObjectURL(file);
                        preview.setAttribute("class", "videoPreview");
                        preview.setAttribute("draggable", "false");
                        preview.controls = true;
                        preview.autoplay = false;

                        contentPreview.appendChild(preview);
                    }
                });
            }
            
            document.querySelector(".contentPreview button").addEventListener("click", e => {
                contentPreview.childNodes.forEach(e => {
                    if(e.contains(preview)){
                        window.URL.revokeObjectURL(preview.src);
                        contentPreview.removeChild(preview);

                        fileName.value = "";
                    }
                });
            });
        }
    }
}