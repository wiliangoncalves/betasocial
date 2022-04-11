import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

import "./HandleEmoji.css";

export default function HandleEmoji(props){
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (e, emojiObject) => {
        setChosenEmoji(emojiObject);

        document.querySelector(".textArea").innerHTML = chosenEmoji.emoji;

        e.preventDefault();
    };

    const HandleEmojiClosed = e => {
        document.getElementById("EmojiContainer").style.display = "none";
    }

    return (
        <div id="EmojiContainer">
            <h2 onClick={HandleEmojiClosed}>Fechar X</h2>

            {chosenEmoji ? ( <span>Você escolheu: {chosenEmoji.emoji}</span>) : (<span>Nenhum emoji selecionado!</span>)}

            <Picker onEmojiClick={onEmojiClick} />
        </div>
    );
}