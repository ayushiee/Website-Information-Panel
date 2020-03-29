import React from 'react';
import { IoMdChatboxes } from 'react-icons/io';
import './ChatFab.css';

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