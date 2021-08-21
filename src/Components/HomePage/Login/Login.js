import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import { useForm } from "react-hook-form";
import "firebase/auth";
import { firebaseConfig } from './firebaseConfig';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const googleProvider = new firebase.auth.GoogleAuthProvider();

const Login = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [showPass, setShowPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)
  const [login, setLogin] = useState(false)
  const [userData, setUserData] = useState({})
  const history = useHistory()
  const location = useLocation()
  let { from } = location.state || { from: { pathname: '/' } }

  const { register, handleSubmit, formState: { errors } } = useForm();


  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }


  const onSubmit = data => {
    console.log(data);
    if (!login) {
      firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
          setUserData(data)
          setLoggedInUser(data)
          history.replace(from)
        })
        .catch((error) => {
          console.log(error)
        });
    }

    if (login) {
      firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
          setUserData(data);
          setLoggedInUser(data)
          history.replace(from)
        })
        .catch((error) => {
        });
    }
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
        <div className="mx-auto p-4 w-50" >


          <div className="card border shadow rounded p-3">
            <h3 className="text-center my-4">{!login ? 'Create an account' : "Log in"}</h3>

            <form onSubmit={handleSubmit(onSubmit)}>

              {
                !login &&
                <div className="mb-3 mx-5">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" name="name" className="form-control" id="name" {...register("name")} required />
                </div>
              }

              <div className="mb-3 mx-5">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="email" {...register("email")} required />
              </div>

              <div className="mb-3 mx-5">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="row g-0">
                  <div className="col-md-10">
                    <input type={showPass ? "text" : "password"} name="password" className="form-control" id="password" {...register("password")} required />
                  </div>
                  <div className="col-md-2 input-group-text d-flex justify-content-center align-items-center">
                    <span>
                      {
                        showPass ? <FontAwesomeIcon icon={faEyeSlash} onClick={() => setShowPass(false)} />
                          : <FontAwesomeIcon icon={faEye} onClick={() => setShowPass(true)} />
                      }
                    </span>
                  </div>
                </div>

              </div>

              {
                !login &&
                <div className="mb-3 mx-5">
                  <label htmlFor="exampleInputConfirmPassword1" className="form-label"> Confirm password</label>
                  <div className="row g-0">
                    <div className="col-md-10">
                      <input type={showConfirmPass ? "text" : "password"} name="password" className="form-control" id="exampleInputConfirmPassword1" required />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center input-group-text">
                      <span>
                        {
                          showConfirmPass
                            ? <FontAwesomeIcon icon={faEyeSlash} onClick={() => setShowConfirmPass(false)} />
                            : <FontAwesomeIcon icon={faEye} onClick={() => setShowConfirmPass(true)} />
                        }
                      </span>
                    </div>
                  </div>

                </div>
              }

              <div className="mb-3 mx-5">
                {userData.error && <p style={{ color: 'red' }}>{userData.error}</p>}
                <p className="text-center">Already have an account? <input type="checkbox" name="login" id="" onClick={() => setLogin(!login)} /> Log in</p>
              </div>

              <div className="text-center mb-3">
                <input type="submit" className="btn btn-primary" />
              </div>

              <div className="mb-3 mx-5 border rounded text-center p-2" onClick={handleGoogleSignIn} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faGoogle} /> &nbsp; Sign up with google
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;