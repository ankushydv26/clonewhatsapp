import React from 'react'
import "./sidebar.css";
import DountLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from "./sidebarChat"

import { Avatar, IconButton } from '@material-ui/core';

function siderbar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src="https://64.media.tumblr.com/3612e7e65cf16f12dbb6b06788d87cab/tumblr_pfzpmwcQrS1xuilh5o3_250.jpg" />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DountLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlinedIcon/>
                    <input placeholder="Search or start chat now  "
                    type="text" />
                </div>
            </div>
            <div className="sidebar_chats">
             <h2 style={{padding:"10px"}}>Add new Chat</h2>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                
            </div>
        </div>
    )
}

export default siderbar
