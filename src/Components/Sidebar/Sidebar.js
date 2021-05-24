import React from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import myPhoto from '../Images/me.png';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat/SidebarChat';





const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar src={myPhoto}/>
                <div className="sidebar__headerRight">

                {/* IconButton is used to make the icons clickable */}
                  <IconButton>
                  <DonutLargeIcon/>
                  </IconButton>

                  <IconButton>
                  <ChatIcon/>
                  </IconButton>

                  <IconButton>
                  <MoreVertIcon/>
                  </IconButton>
                 
                </div>
            </div>

            <div className="sidebar__search">
                   <div className="sidebar__searchContainer">
                       <SearchIcon/>
                       <input type="text" placeholder="Search or start new chat" />
                    </div> 
            </div>

            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    );
};

export default Sidebar;