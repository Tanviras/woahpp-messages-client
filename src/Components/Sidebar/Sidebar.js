import React, { useContext } from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat/SidebarChat';
import { UserContext } from '../../App';
import SidebarChat2 from './SidebarChat/SidebarChat2/SidebarChat2';
import SidebarChat3 from "./SidebarChat/SidebarChat3/SidebarChat3";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Login/firebase.config";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }

    const handleSignOut = () => {
        return firebase.auth().signOut()
        .then(res => {
          const signedOutUser = {
            name: '',
            email: '',
          }
         setLoggedInUser(signedOutUser);//loggedInUser change korlam
         sessionStorage.removeItem('token');//sessionStorage khali korlam, duitai korlam karon jekono ekta thaklei seta diye dhuke jawa jabe onno page a without re-login
        }).catch(err => {
          // An error happened.
        });
      }

    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar/>
                <h4>{loggedInUser.name}</h4>
                <div className="sidebar__headerRight">

                {/* IconButton is used to make the icons clickable */}
                  <IconButton>
                  <DonutLargeIcon/>
                  </IconButton>

                  <IconButton>
                  <ChatIcon/>
                  </IconButton>

                  {/* <IconButton>
                  <MoreVertIcon/>
                  </IconButton> */}

                <Link to="/login">
                <button onClick={handleSignOut}>Logout</button>
                </Link>
                
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
                <SidebarChat2/>
                <SidebarChat3/>
            </div>
        </div>
    );
};

export default Sidebar;