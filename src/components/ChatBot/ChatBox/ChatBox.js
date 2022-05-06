import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';

import ActionProvider from '../Bot/ActionProvider';
import MessageParser from '../Bot/MessageParser';
import config from '../config';
import ButtonChat from './ButtonChat';

import 'react-chatbot-kit/build/main.css';
import './chat.css';

function ChatBox() {

    const [showChat, setShowChat] = useState(false)

    return (
        showChat ? 
        (
            <>
            <div className='chat__box show-box'>
            <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
                headerText='Chat Bot'
                placeholderText='Viết tin nhắn của bạn tại đây..'
            />
            </div>
            <ButtonChat handleClick={()=>setShowChat(!showChat)} />
            </>
        )        
        : <ButtonChat handleClick={()=>setShowChat(!showChat)} />
    )
    
} 
export default ChatBox