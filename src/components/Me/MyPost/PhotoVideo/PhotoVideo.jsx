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
            let previewPhoto;
            let previewVideo;

            let removePreviewPhoto = document.createElement("span");
            removePreviewPhoto.setAttribute("class", "removePreviewImg");
            removePreviewPhoto.innerHTML = "X";

            let removePreviewVideo = document.createElement("span");
            removePreviewVideo.setAttribute("class", "removePreviewVideo");
            removePreviewVideo.innerHTML = "X";

            let containerPreview = document.createElement("div");
            let contentPreview = document.querySelector(".contentPreview");

            fileExtension = fileName.files[i].name.slice(fileName.files[i].name.indexOf("."));

            if(fileExtension === ".PNG" || fileExtension === ".jpg" || fileExtension === ".jpeg"){
                previewPhoto = new Image();

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
                        previewPhoto.src = URL.createObjectURL(file);
                        previewPhoto.setAttribute("class", "photoPreview");
                        previewPhoto.setAttribute("draggable", "false");

                        containerPreview.setAttribute("class", "containerPreview");

                        containerPreview.appendChild(removePreviewPhoto);
                        containerPreview.appendChild(previewPhoto);
                        
                        contentPreview.appendChild(containerPreview);
                    }
                });
            }

            if(fileExtension === ".mp4"){
                previewVideo = document.createElement("video");

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
                        previewVideo.src = URL.createObjectURL(file);
                        previewVideo.setAttribute("class", "videoPreview");
                        previewVideo.setAttribute("draggable", "false");
                        previewVideo.controls = true;
                        previewVideo.autoplay = false;
                        
                        containerPreview.setAttribute("class", "containerPreview");

                        containerPreview.appendChild(removePreviewVideo);
                        containerPreview.appendChild(previewVideo);
                        
                        contentPreview.appendChild(containerPreview);
                    }
                });
            }

            removePreviewPhoto.addEventListener("click", e => {
                contentPreview.childNodes.forEach(e => {
                    if(e.contains(previewPhoto)){
                        window.URL.revokeObjectURL(previewPhoto.src);

                        containerPreview.removeChild(previewPhoto);
                        containerPreview.removeChild(removePreviewPhoto)

                        contentPreview.removeChild(containerPreview);

                        fileName.value = "";
                    }
                });
            });

            removePreviewVideo.addEventListener("click", e => {
                contentPreview.childNodes.forEach(e => {
                    if(e.contains(previewVideo)){
                        window.URL.revokeObjectURL(previewVideo.src);

                        containerPreview.removeChild(previewVideo);
                        containerPreview.remove(removePreviewVideo);

                        fileName.value = "";
                    }
                });
            });
        }
    }
}