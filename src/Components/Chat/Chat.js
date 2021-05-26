import { Avatar, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import './Chat.css';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from '../axios';

const Chat = ({ messages }) => {

const [input,setInput]=useState("");


    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new',{
            message:input,
            name:"Hitler",
            timestamp:"Just now",
            recieved:false,
        })

        setInput("");
    }

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
                        <SearchIcon />
                    </IconButton>

                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>



            <div className="chat__body">

                {
                    messages.map((message) => (
                        <p className={`chat__message ${message.recieved && "chat__reciever"}`}>
                            <span className='chat__name'>
                               <b>{message.name}</b> 
                            </span>
                            {message.message}
                            <span className="chat__timestamp">
                                {message.timestamp}
                            </span>
                        </p>
                    ))
                }

            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input
                        value={input}
                        placeholder="Type a message"
                        onChange={e=>setInput(e.target.value)}
                    />
                    <button type="submit" onClick={sendMessage}>
                        Send a message
                    </button>
                </form>
                <MicIcon />
            </div>


        </div>
    );
};

export default Chat;