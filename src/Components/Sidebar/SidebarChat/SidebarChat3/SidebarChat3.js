import { Avatar } from '@material-ui/core';
import React from 'react';
import '../SidebarChat.css';
import amigos3 from "../../../Images/amigos3.jpg";

const SidebarChat3 = () => {
    return (
        <div className="sidebarChat">
            <Avatar src={amigos3}/>
            <div className="sidebarChat__info">
                <h2>Local Heroes</h2>
                <p>Last message of this group</p>
            </div>
        </div>
    );
};

export default SidebarChat3;