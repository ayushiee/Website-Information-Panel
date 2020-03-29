import React from 'react';
import ImgColumn from '../ImgColumn';
import TextColumn from '../TextColumn';
import './LowerBanner.css';
import ChatFab from '../ChatFab';

function LowerBanner() {
    return (
        <div className='row'>
            <ImgColumn />
            <TextColumn />
            <ChatFab />
        </div>
    )
}

export default LowerBanner;