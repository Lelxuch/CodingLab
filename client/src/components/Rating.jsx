import React from 'react'

var score = 4.4;

const Rating = () => {
    return (
        <div className="rating">
            <div className="star">
                <img src="../images/Profile/star.png" alt="" />
            </div>
            <div className="score">
                { score }
            </div>
        </div>
    )
}

export default Rating
