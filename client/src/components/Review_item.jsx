import React from 'react'
import Rating from '../components/Rating'

const Review_item = () => {
    return (
        <div className="review-item">
            <div className="review-img">
                <img src="../images/white.jpg" alt="" />
            </div>
            <div className="review-right">
                <div className="review-header">
                    <div className="review-username">Username</div>
                </div>
                <div className="review-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quaerat tempora sunt libero ipsa temporibus nam animi nobis, architecto harum, odit nesciunt quisquam dolorem praesentium nostrum aspernatur possimus magni distinctio!
                </div>
            </div>
        </div>
    )
}

export default Review_item
