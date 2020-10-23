import { Avatar } from '@material-ui/core'
import React from 'react'
import "./sidebarchat.css"

function sidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarCaht_info">
                <h3>Room Name</h3>
                <p>text from person</p>
            </div>
            
        </div>
    )
}

export default sidebarChat
