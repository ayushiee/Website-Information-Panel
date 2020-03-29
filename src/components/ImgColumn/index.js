import React from 'react';
import './ImgColumn.css';
import Img from '../../assets/Image-1.png';

function ImgColumn() {
    return (
        <div className='Images'>
            <img src={Img}
                className='img-cover'
                alt='Working'
            />
        </div>
    )
}

export default ImgColumn;