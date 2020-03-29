import React from 'react';
import './ImgColumn.css';


function ImgColumn() {
    return (
        <div className='Images'>
            <img src='https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                className='img-cover'
                alt='Working'
            />
        </div>
    )
}

export default ImgColumn;