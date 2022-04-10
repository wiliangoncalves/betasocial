export const HandleTextArea = e => {
    if(e.target.value.length > 0){  
        document.querySelector(".btnPostTop").style.backgroundColor = "rgb(91, 181, 241)";
        document.querySelector(".btnPostTop").disabled = false;

        document.querySelector(".btn-post").style.backgroundColor = "rgb(91, 181, 241)";
        document.querySelector(".btn-post").disabled = false;

        document.querySelector(".textArea").innerHTML = e.target.value;
    }else{
        document.querySelector(".btnPostTop").style.backgroundColor = "gray";
        document.querySelector(".btnPostTop").disabled = true;
        
        document.querySelector(".btn-post").style.backgroundColor = "gray";
        document.querySelector(".btn-post").disabled = true;
        e.preventDefault();
    }
}