import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';
import amigos from "../../Images/amigos.jpg";

const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar src={amigos}/>
            <div className="sidebarChat__info">
                <h2>Cheetahs </h2>
                <p>Last message of this group</p>
            </div>
        </div>
    );
};

export default SidebarChat;