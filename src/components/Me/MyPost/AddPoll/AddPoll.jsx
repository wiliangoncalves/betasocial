import React from "react";

import "./AddPoll.css";

export default function AddPoll(){
    return(
        <div className="AddPollContainer">
            <div className="chooseOption">
                <input type="radio" disabled />
                <input type="text" placeholder="Choose 1" />

                <br/>

                <input type="radio" disabled />
                <input type="text" placeholder="Choose 2" />
            </div>

            <button>Add a choice</button>
            <select>
                <option value="0">1 day</option>
                <option value="3">3 day</option>
                <option value="7">7 day</option>
            </select>
        </div>
    );
}