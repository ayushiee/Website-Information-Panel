import React, { useState } from 'react';
import './Topbar.css';

function Logos({ data }) {
    const [width, setWidth] = useState(120)
    const [height, setHeight] = useState(100)

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