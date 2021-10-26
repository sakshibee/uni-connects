import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlined from '@material-ui/icons/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlined from '@material-ui/icons/AssignmentTurnedInOutlined';
import PeopleAltOutlined from '@material-ui/icons/PeopleAltOutlined';
import NotificationsOutlined from '@material-ui/icons/NotificationsOutlined';
import Search from '@material-ui/icons/Search';
import Language from '@material-ui/icons/Language';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import '../css/NavBar.css';
function NavBar(){
    return(
        <div className ="qHeader">
            <div className="qHeader_logo">
                <img 
                    src='http://www.modyuniversity.ac.in/newsite_assets/img/logo.png'
                    alt =""
                />
            </div>
            <div 
            className= "qHeader_icons">
                <div 
                    className="qHeader_icon">
                    <HomeIcon />
                </div>
                <div 
                    className="qHeader_icon">
                    <FeaturedPlayListOutlined />
                </div>
                <div 
                    className="qHeader_icon">
                    <AssignmentTurnedInOutlined />
                </div>
                <div 
                    className="qHeader_icon">
                    <PeopleAltOutlined />
                </div>
                <div 
                    className="qHeader_icon">
                    <NotificationsOutlined />
                </div>
            </div>
            <div 
                className="qHeader_input">
                <Search />
                <input type="text" placeholder ="Search Mody"/>
            </div>
            <div 
                className = "qHeader_rem">
                <div 
                className="qHeader_avatar">
                <Avatar />
                </div>
                <Language />
                <Button>Add Question</Button>
            </div>
        </div>
    )
}

export default NavBar