import React from 'react';
import ImgColumn from '../ImgColumn';
import TextColumn from '../TextColumn';
import './LowerBanner.css';

function LowerBanner() {
    return (
        <div className='row'>
            <ImgColumn />
            <TextColumn />
        </div>
    )
}

export default LowerBanner;