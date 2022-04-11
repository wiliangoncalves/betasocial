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
            let removePreview = document.createElement("span");
            let containerPreview = document.createElement("div");
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

                        containerPreview.setAttribute("class", "containerPreview");

                        removePreview.setAttribute("class", "removePreviewItem");
                        removePreview.innerHTML = "X";

                        containerPreview.appendChild(removePreview);
                        containerPreview.appendChild(preview);
                        
                        contentPreview.appendChild(containerPreview);
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

                        
                        removePreview.setAttribute("class", "removePreviewItem");
                        removePreview.innerHTML = "X";
                        
                        containerPreview.setAttribute("class", "containerPreview");

                        containerPreview.appendChild(removePreview);
                        containerPreview.appendChild(preview);
                        
                        contentPreview.appendChild(containerPreview);
                    }
                });
            }
            
            document.querySelector(".removePreviewItem").addEventListener("click", e => {
                contentPreview.childNodes.forEach(e => {
                    if(e.contains(preview)){
                        window.URL.revokeObjectURL(preview.src);
                        contentPreview.removeChild(containerPreview);

                        fileName.value = "";
                    }
                });
            });
        }
    }
}