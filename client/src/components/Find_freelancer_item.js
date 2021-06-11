import React from 'react'
import { Link } from 'react-router-dom'

const Find_project_item = () => {
    return (
        <div className="freelancer-item">
            <div className="freelancer-left">
                <img src="../../images/white.jpg" alt="" />
            </div>
            <div className="freelancer-right">
                <div className="freelancer-right-top">
                    <Link className="freelancer-title" to="/profile/freelancer/view">/ Username</Link>
                    <div className="freelancer-rating">
                        <img src="../../images/Profile/star.png" alt="" />
                        <div className="title">4.5</div>
                    </div>
                </div>
                <div className="freelancer-skills">
                    <div className="skill-item">
                        HTML
                    </div>
                    <div className="skill-item">
                        HTML
                    </div>
                    <div className="skill-item">
                        HTML
                    </div>
                    <div className="skill-item">
                        HTML
                    </div>
                    <div className="skill-item">
                        HTML
                    </div>
                    <div className="skill-item">
                        HTML
                    </div>
                    <div className="skill-item">
                        HTML
                    </div>
                    <div className="skill-item">
                        HTML
                    </div>
                    <div className="skill-item">
                        HTML
                    </div>
                    <div className="skill-item">
                        HTML
                    </div>
                    <div className="skill-item">
                        HTML
                    </div>
                    <div className="skill-item">
                        HTML
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Find_project_item
