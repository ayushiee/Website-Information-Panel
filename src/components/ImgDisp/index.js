import React from 'react';
import './imgDisp.css';

function ImgDisp() {

    return (
        <div className='Images'>
            <img src='https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                className='img-cover'
                alt='Working'

            />
            {/* <img src="https://i.ya-webdesign.com/images/dot-grid-png-4.png"
                className="dots-top"
                alt="dots-top"
            />
            <img src="https://i.ya-webdesign.com/images/dot-grid-png-4.png"
                className="dots-bottom"
                alt="dots-bottom"
            /> */}
        </div>
    )

}

export default ImgDisp;