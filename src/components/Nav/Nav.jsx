import React from "react";

import "./Nav.css";

import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoNewspaperSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosPaper } from "react-icons/io";

import { BsChatDotsFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";

export default function Nav(){
    return(
        <nav className="NavIconsContainer">

            <div className="IconsContainer">

            <p>Menu</p>
                <a href="/"><AiFillHome size={22} className="homeIcon"/>
                    <span className="homeSpan">Home</span>
                </a>

                <a href="/groups"><BsFillPeopleFill size={22} className="groupsIcon"/>
                    <span className="groupsSpan">Groups</span>
                </a>
                
                <a href="/news"><IoNewspaperSharp size={22} className="newsIcon" />
                    <span className="newsSpan">News</span>
                </a>

                <a href="/about"><IoIosPaper size={22} className="aboutIcon" />
                    <span className="aboutSpan">About</span>
                </a>
                
                <a href="/profile"><BsFillPersonFill size={22} className="meIcon" />
                    <span className="profileSpan">Profile</span>
                </a>

            </div>

            <div className="Explore">
                <p>Explore</p>

                <a href="/chat">
                    <BsChatDotsFill size={22} className="chatIcon" />
                    <span className="chatSpan">Beta Chat</span>
                </a>

                <a href="/apps">
                    <MdDashboard size={22} className="appsIcon" />
                    <span className="appsSpan">Apps</span>
                </a>
            </div>
        </nav>
    );
}