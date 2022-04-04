import React from 'react';
import { useSelector } from 'react-redux';
import "../pages/DataPage.css"

function TikTok() {
    const spot = useSelector(state => state)
    let b = Object.values(spot[2])
    let a = Object.keys(spot[2])
    let img = b[0]
    let i = 0;
    a.shift()
    b.shift()
    return (
        <div className="table-row">
            <div><img src={img} /></div>
            {b.map(item => <div className="center" key={i}><h4>{item}</h4><h6>{a[i++]}</h6></div>)}
        </div>
    );
}

export default TikTok;