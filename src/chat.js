import { Avatar, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import "./chat.css"
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVert from '@material-ui/icons/MoreVert'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicIcon from '@material-ui/icons/Mic';
import axios from "./axios";

function Chat ({ messages }) {
    const [input, setInput] = useState('');

    const sendMessage = async (e) =>{
        e.preventDefault();
        await axios.post("/messages/new",{
            message:input,
            name:"akush",
            timestamp:"papapapapa",
            received:false
        });
        setInput('');
    }
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at..</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>

                </div>
            </div>
            <div className="chat_body">
                {messages.map((message , i)=>{
                    return(
                        <p key={i} className={`chat_message ${message.received &&  "chat_reciever"}`}>
                        <span className="chat_name">{message.name}</span>
                           {message.message}  
                        {/* This will be message */}
                        <span className="chat_timestamp">
                            {/* {new Date(message.timestamp?.toDate()).toUTCString()} */}
                            {/* {message.timestamp} */}
                            {new Date().toUTCString()}
                        </span>
                    </p>
                    )
                })}
                
              
               
            </div>
            <div className="chat_footer">
                <EmojiEmotionsIcon/>
                <form>
                    <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type a message"
                    type="text"/>
                    <button onClick={sendMessage}
                    type="submit">Send a message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat;
