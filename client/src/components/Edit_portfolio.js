import React from 'react'
import { Link } from 'react-router-dom'

const Edit_portfolio = () => {
    return (
        <div>
            <div className="portfolio-item">
                <Link className="portfolio-title-link portfolio-item-elem" to="/profile/portfolio/1">Portfolio item title</Link>
                <div className="portfolio-btns portfolio-item-elem">
                    <button class="portfolio-btn edit" data-toggle="modal" data-target="#portfolioEditModal">Edit</button>
                    <button class="portfolio-btn delete">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Edit_portfolio
