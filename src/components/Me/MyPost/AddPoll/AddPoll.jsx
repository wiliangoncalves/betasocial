import React from "react";

import "./AddPoll.css";

export default function AddPoll(){
    let count = 2;

    const handlePlusChoice = () => {
        const chooseOption = document.querySelector('.chooseOption');

        const removeChoice = document.createElement('i');
        removeChoice.setAttribute("class", "removeChoice");
        removeChoice.innerText = 'X';
        

        const newChoiceRadio = document.createElement('input');
        newChoiceRadio.setAttribute('type', 'radio');
        newChoiceRadio.disabled = true;

        const newChoice = document.createElement('input');
        newChoice.setAttribute("type", "text");
        newChoice.setAttribute("class", "choices");
        newChoice.setAttribute("placeholder", "Choose"+ (count = count + 1));

        const breaks = document.createElement('br');

        chooseOption.appendChild(newChoiceRadio);
        chooseOption.appendChild(newChoice);
        chooseOption.appendChild(removeChoice);
        chooseOption.appendChild(breaks);

        removeChoice.addEventListener("click", () => {
            chooseOption.removeChild(newChoiceRadio);
            chooseOption.removeChild(newChoice);
            chooseOption.removeChild(removeChoice);
            chooseOption.removeChild(breaks);

            count = count - 1;
        })
    }

    return(
        <div className="AddPollContainer">
           <span className="closePoll" onClick={() => {
                document.querySelector('.AddPollContainer').style.display = 'none';
            }}>X</span> 
            <div className="chooseOption">
                <input type="radio" disabled />
                <input type="text" placeholder="Choose 1" className="choices" />

                <br/>

                <input type="radio" disabled />
                <input type="text" placeholder="Choose 2" className="choices" />

                <br/>
            </div>

            <div className="addChoicesBottom">
                <button onClick={handlePlusChoice}><i>+</i> Add a choice</button>
                <select>
                    <option value="0">1 day</option>
                    <option value="3">3 day</option>
                    <option value="7">7 day</option>
                </select>
            </div>
        </div>
    );
}