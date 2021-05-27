import React, { useContext } from "react";
import firebase from "firebase/app";
import firebaseConfig from "./firebase.config";
import "firebase/auth";
import logo from "../Images/wa-logo.png";
import googleLogo from "../Images/googleLogo.png";

import { useHistory, useLocation } from "react-router-dom";

import "./Login.css";
import { UserContext } from "../../App";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const provider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email} = result.user;
        const signedInUser = {
          name: displayName,
          email: email
        };

        setLoggedInUser(signedInUser);
        storeAuthToken();
      })
      .catch(function (error) {
        // Handle Errors here.
      });
  };

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {

        //now store the token in session storage
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }
  
  return (
    <div style={{ height: '100%' }}>

      <div style={{ maxWidth: '100%', maxHeight: '100%'}}>

        <center>
          <img src={logo} alt='logo' className='imgSize'></img>
          <h1>WOAHAPP</h1>
        </center>



        <div className='login__body'>
          <center>
            <h2> Login With</h2>
            <div className='login__google' onClick={handleGoogleSignIn}>
              <img src={googleLogo} alt='googleLogo' className='googleLogo' />
              <span className='login__goggleText'>Continue with Google</span>
            </div>
          </center>
        </div>

      </div>

    </div>
  );
};

export default Login;