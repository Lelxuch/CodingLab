import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio_card = () => {
    return (
        <Link className="portfolio-card" to="/profile/portfolio/1">
            <img src="../../images/white.jpg" alt="" />
            <div className="portfolio-card-name">
                Karbil
            </div>
        </Link>
    )
}

export default Portfolio_card
