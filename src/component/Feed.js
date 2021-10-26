import React from "react";
import "../css/Feed.css"
import Post from "./Post";
import UniBox from "./UniBox";

function Feed(){
    return (
        <div className = "feed">
            <UniBox />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Feed;