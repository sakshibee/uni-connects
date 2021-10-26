import React from "react";
import '../css/uni.css'
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";

function Uni() {
    return(
        <div className = "uni">
            <NavBar/>
            <div className= "uni_content">
                <Sidebar />
                <Feed />
                <Widget />
            </div>
        </div>
    )
}

export default Uni;