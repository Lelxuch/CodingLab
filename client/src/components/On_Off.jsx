import React from 'react'

var onoff = true;

if (onoff) {
    var indicator = <div className="circle green"></div>
    var text = <div className="text">online</div>
} else {
    var indicator = <div className="circle red"></div>
    var text = <div className="text">offline</div>
}

const On_Off = () => {
    return (
        <div className="on-off">
            { indicator }
            { text }
        </div>
    )
}

export default On_Off