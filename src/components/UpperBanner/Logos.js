import React, { useState } from 'react';
import './UpperBanner.css';

function Logos({ data }) {
    const [width, setWidth] = useState(140)
    const [height, setHeight] = useState(80)

    return (
        <div className="org-logo">

            {data.map(({ uri, name }) => (
                <img
                    src={uri}
                    alt={name}
                    className="org-logo-image"
                    width={width}
                    height={height}
                />
            ))}
        </div>
    )
}

export default Logos;