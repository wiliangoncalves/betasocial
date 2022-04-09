import React from "react";

import "./Aside.css";

export default function Aside(){
    return(
        <div>
            <aside>
                <div className="videoContainer">
                    <h2>Beta News</h2>
                    <hr/>
                    <div>
                        <video width="100%" controls>
                            <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4" />
                        </video>
                        <p>Big Buck Bunny</p>

                    </div>

                    <div className="videoContainer">
                        <video width="100%" controls>
                            <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4" />
                        </video>
                        <p>Big Buck Bunny 2</p>
                    </div>

                    <div className="videoContainer">
                        <video width="100%" controls>
                            <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4" />
                        </video>
                        <p>Big Buck Bunny 2</p>
                    </div>

                    <div className="videoContainer">
                        <video width="100%" controls>
                            <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4" />
                        </video>
                        <p>Big Buck Bunny 2</p>
                    </div>

                    <div className="videoContainer">
                        <video width="100%" controls>
                            <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4" />
                        </video>
                        <p>Big Buck Bunny 2</p>
                    </div>
                </div>
            </aside>
        </div>
    );
};