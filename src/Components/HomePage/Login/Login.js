import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebaseConfig';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App.js';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const googleProvider = new firebase.auth.GoogleAuthProvider();

const Login = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory()
  const location = useLocation()
  let { from } = location.state || { from: { pathname: '/' } }


  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }


  const handleGoogleSignIn = () => {
    firebase.auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const user = result.user;
        setLoggedInUser(user);
        storeAuthToken();
      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <h3 className="text-center">Sign up to continue</h3>
        <div className="mx-auto p-4 w-50" >
          <div className="mb-3 border rounded text-center">
            <p onClick={handleGoogleSignIn} style={{ cursor: 'pointer' }}>Sign up with google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;