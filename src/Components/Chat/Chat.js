import { Avatar, IconButton } from '@material-ui/core';
import React, { useState, useContext  } from 'react';
import { UserContext } from '../../App';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import './Chat.css';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from '../axios';
import coolBoys from "../Images/coolBoys.jpg";


const Chat = ({ messages }) => {
const [loggedInUser, setLoggedInUser] = useContext(UserContext);

const [input,setInput]=useState("");

const today = new Date();

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }




    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new',{
            message:input,
            name:loggedInUser.name,
            timestamp: formatAMPM(today),
            // recieved:true,
            email: loggedInUser.email,
        })

        setInput("");
    }


  
console.log(loggedInUser);

    return (
        <div className="chat">

            <div className="chat__header">
                <Avatar src={coolBoys}/>

                <div className="chat__headerInfo">
                    <h3>Cool Boys!</h3>
                    <p>Last seen at {formatAMPM(today)} </p>
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
                        <p className={`chat__message ${(message.email===loggedInUser.email) && "chat__reciever"}`}>
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