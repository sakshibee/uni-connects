import { Avatar } from "@material-ui/core";
import React from "react";
import "../css/UniBox.css"
function UniBox(){
    return(
        <div className = "unibox">
            <div className = "unibox_info">
                <Avatar />
                <h5>Username</h5>
            </div>

            <div className = "unibox_uni">
                <p>What is your question or link?</p>
            </div>
        </div>
    )
}

export default UniBox;