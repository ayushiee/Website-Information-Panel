import React from 'react';
import { IoMdChatboxes } from 'react-icons/io';
import './Chat.css';

function Chat() {
    return (
        <div className='chat-button-container'>
            <button>
                <IoMdChatboxes />
            </button>
        </div>
    )
}

export default Chat;