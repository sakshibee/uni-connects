import { Avatar } from "@material-ui/core";
import React from "react";
import ArrowUpwardOutlined from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlined from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlined from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlined from "@material-ui/icons/ChatBubbleOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";
import "../css/Post.css"


function Post() {
    return (
        <div className ="post">
            <div className = "post_info">
                <Avatar />
                <h5>Username</h5>
                <small>Timestamp</small>
            </div>

            <div className ="post_body">
                <div className="post_question">
                    <p>Question</p>
                    <button className = "post_btnAnswer"> Answer </button>
                </div>
                <div className = "post_answer">
                    <p></p>
                </div>
                <img 
                    src = "https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-77991111/77991111.jpg?imglength=866056"
                    alt= "" >
                </img>
            </div>

            <div className = "post_footer">
                <div className= "post_footerAction">

                    <ArrowUpwardOutlined />
                    <ArrowDownwardOutlined />
                </div>

                <RepeatOutlined />
                <ChatBubbleOutlined />

                <div className = "post_footerLeft">
                    <ShareOutlined />
                    <MoreHorizOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post;