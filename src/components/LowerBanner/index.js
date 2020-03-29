import React from 'react';
import ImgColumn from '../ImgColumn';
import TextColumn from '../TextColumn';
import './LowerBanner.css';
import Chat from '../Chat';

function LowerBanner() {
    return (
        <div className='row'>
            <ImgColumn />
            <TextColumn />
            <Chat />
        </div>
    )
}

export default LowerBanner;