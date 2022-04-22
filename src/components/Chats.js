import React, { useRef,useState, useEffect} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

import { useAuth } from "../contexts/AuthContext";
// import { Button } from "./ButtonElements2";


export default function Chats() {
    const didMountRef = useRef(false)
    const [loading, setLoading] = useState(true)
    const { user } = useAuth()
    const history = useHistory()
    
   
    async function handleLogout()  {
        await auth.signOut();

        history.push("/");
    }

    async function getFile(url) {
        let response = await fetch(url);
        let data = await response.blob();

        return new File ([data], "userPhoto.jpg", {type: "image/jpeg"});
    }

    useEffect(() => {
        if (!didMountRef.current){
            didMountRef.current = true
        }
        if(!user || user === null){
            history.push("/")

            return
        }

        axios.get( 
            'https://api.chatengine.io/users/me/', 
            { headers: {
                "project-id": "af66b987-3111-4b09-9efb-1511b5d954f5",
                "user-name": user.email,
                "user-secret": user.uid
            }}
        
        )
        .then(() => {setLoading(false);

        })
        .catch(e => {
            let formdata = new FormData()
            formdata.append("email", user.email)
            formdata.append("username", user.email)
            formdata.append("secret", user.uid)

            getFile(user.photoURL)
                .then((avatar) => {
                    formdata.append("avatar", avatar, avatar.name)

                    axios.post(
                        'https://api.chatengine.io/users/',
                        formdata,
                        {headers: {"private-key": "61f336d4-ecb2-4a58-ad89-d93b2bde4b26"}}
                    )

                    .then(() => setLoading(false))
                    .catch(e => console.log("e", e.response))
                })
        })

    }, [user, history]);

    if (!user || loading) return <div />

    return (
        <div className="chats-page">
            <div className="nav-bar">
                
                <div className="logo-tab" Link to ={{ pathname: "https://623a02207240030008952600--heartfelt-semifreddo-e68b13.netlify.app/"}} target="_blank" aria-label="Return to DD's home page">
                    DD
                </div>
                {/* <Button> DD </Button> */}
                <div className="logo-tab2">
                    DDChat
                </div>

                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>

            </div>

            <ChatEngine
                height="calc(100vh - 66px)"
                projectID= {"af66b987-3111-4b09-9efb-1511b5d954f5"}
                userName={user.email}
                userSecret={user.uid}
            />
                {/* title: "3" */}
        </div>
    )
}