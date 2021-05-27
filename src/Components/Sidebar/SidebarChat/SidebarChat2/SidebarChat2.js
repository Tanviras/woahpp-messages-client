import { Avatar } from '@material-ui/core';
import React from 'react';
import '../SidebarChat.css';
import amigos2 from "../../../Images/amigos2.png";

const SidebarChat2 = () => {
    return (
        <div className="sidebarChat">
            <Avatar src={amigos2}/>
            <div className="sidebarChat__info">
                <h2>Cricket Buddies</h2>
                <p>Last message of this group</p>
            </div>
        </div>
    );
};

export default SidebarChat2;