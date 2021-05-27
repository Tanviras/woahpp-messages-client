import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useEffect, useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Chat from './Components/Chat/Chat';
import Login from "../src/Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Pusher from 'pusher-js';
import axios from '../src/Components/axios';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data);
      })
  }, [])


  useEffect(() => {
    //pusher>'app'(whatsapp)>'getting started'
    const pusher = new Pusher('a02fd6eacca6ba6bde5a', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

  }, [messages])


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h3>{loggedInUser.name}</h3>
      <Router>
        <Switch>

          <div className="app">

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute exact path="/">
              <div className="app__body">
                <Sidebar></Sidebar>
                <Chat messages={messages}></Chat>
              </div>
            </PrivateRoute>

            <PrivateRoute path="/home">
              <div className="app__body">
                <Sidebar></Sidebar>
                <Chat messages={messages}></Chat>
              </div>
            </PrivateRoute>

          </div>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
