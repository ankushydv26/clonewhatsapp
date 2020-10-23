import React,{useEffect, useState  } from 'react';
import './App.css';
//file imported 
import Sidebar from "./siderbar";
import Chat from "./chat";
import Pusher from "pusher-js";
import axios from "./axios"

function App() {
  //store in array
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    axios.get('/messages/sync').then (response =>{
      setMessages(response.data)
    });
    
  }, []);

  useEffect(()=>{
    const pusher = new Pusher('3a2e46df5f87572f3404', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) =>{
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages]);

  console.log(messages)
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
