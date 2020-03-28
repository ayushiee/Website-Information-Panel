import React from 'react';
import Logos from './Logos';
import './Topbar.css';

function Topbar({ data }) {

    return (
        <div className="text-label" >
            <h1> Trusted by Industry Leading Organisations </h1>
            <Logos data= {data} />
        </div>
       
    )
}

export default Topbar;