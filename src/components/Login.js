import React from "react";
import {GoogleOutlined } from "@ant-design/icons";
import "firebase/app";
import { auth } from "../firebase";


import firebase from "firebase/compat/app";
// import { Button } from "react-chat-engine";
import { Button } from '../components/ButtonElements';


const Login = () =>{
    return (
        <div id="login-page">
             <div id="login-card">

                <Button
                 Link to ={{ pathname: "https://developerdistrict.netlify.app/"}} target="_blank" aria-label="Return to DD's home page"> DD </Button>
                <h2>Welcome to DDchat</h2>
                <br/>
                <h2></h2>

                <div
                    className="login-button google"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined /> Sign In with Google
                </div>

                <br /> <br  />

            
                
            </div>

        </div>
    );
}

export default Login;