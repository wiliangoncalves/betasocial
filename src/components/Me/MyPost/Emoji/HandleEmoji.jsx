import React from 'react';
import Picker from 'emoji-picker-react';

import "./HandleEmoji.css";

export default function HandleEmoji(props){
    const onEmojiClick = (e, emojiObject) => {
        document.querySelector(".textArea").value += emojiObject.emoji;

        e.preventDefault();
    };

    const HandleEmojiClosed = e => {
        document.getElementById("EmojiContainer").style.display = "none";
    }

    return (
        <div id="EmojiContainer">
            <h2 onClick={HandleEmojiClosed}>Fechar X</h2>

            <Picker onEmojiClick={onEmojiClick} />
        </div>
    );
}