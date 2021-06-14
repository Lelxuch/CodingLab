import React from 'react'
import { Link } from 'react-router-dom'

const Moderator_find_user = () => {
    return (
        <div className="user-item">
            <div className="user-left">
                <img src="../../images/white.jpg" alt="" />
            </div>
            <div className="user-right">
                <div className="user-right-top">
                    <Link className="user-title" to="/profile/user/view">/ Username</Link>
                    <div className="user-rating">
                        <img src="../../images/Profile/star.png" alt="" />
                        <div className="title">4.5</div>
                    </div>
                </div>
                <div className="user-right-bottom">
                    <button className="btn">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Moderator_find_user
