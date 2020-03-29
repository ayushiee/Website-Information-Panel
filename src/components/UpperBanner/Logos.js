import React from 'react';
import './UpperBanner.css';

function Logos({ data }) {
    return (
        <div className='org-logo'>
            {data.map(({ uri, name }) => (
                <img
                    src={uri}
                    alt={name}
                    className='org-logo-image'
                />
            ))}
        </div>
    )
}

export default Logos;