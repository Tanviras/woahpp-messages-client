import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import './Chat.css';

const Chat = () => {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                <h3>Room Name</h3>
                <p>Last seen at...</p>
            </div>

            <div className="chat__headerRight">
                <IconButton>
                <SearchIcon/>
                </IconButton>

                <IconButton>
                <AttachFileIcon/>
                </IconButton>

                <IconButton>
                <MoreVertIcon/>
                </IconButton>
            </div>
            </div>

         

        </div>
    );
};

export default Chat;