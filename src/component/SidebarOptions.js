import React from "react";
import '../css/SidebarOptions.css';
import Add from '@material-ui/icons/Add'

function SidebarOptions(){
    return (
        <div className = "sidebarOptions">
            <div className = "sidebarOption">
                <img 
                    src = ""
                    alt = ""
                />
                <p>History</p>
            </div>

            <div className = "sidebarOption">
                <img 
                    src = ""
                    alt = ""
                />
                <p>Placements</p>
            </div>

            <div className = "sidebarOption">
                <img 
                    src = ""
                    alt = ""
                />
                <p>Life@Mody</p>
            </div>
                <div className = "sidebarOption">
                <img 
                    src = ""
                    alt = ""
                />
                <p>Clubs</p>
            </div>
        
            <div className = "sidebarOption">
                <img 
                    src = ""
                    alt = ""
                />
                <p>Examinations</p>
            </div>

            <div className = "sidebarOption">
                <img 
                    src = ""
                    alt = ""
                />
                <p>Alumini</p>
            </div>

            <div className = "sidebarOption">
                <Add />
                <p className = "text">Discover more</p>
            </div>
        </div>
    )
}

export default SidebarOptions;