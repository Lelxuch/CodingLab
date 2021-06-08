import React from 'react'
import { Link } from 'react-router-dom';

const Browse_job_item = () => {
    return (
        <div className="browse-item">
            <div className="browse-top">
                <Link className="browse-title" to="/project/:id">
                    Job title
                </Link>
                <div className="browse-payment">
                    100$
                </div>
            </div>
            <div className="browse-desription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed impedit adipisci molestias consequuntur temporibus placeat magnam dolores aut eius nesciunt veniam quisquam explicabo quibusdam mollitia corrupti ad, odit, nihil quaerat!
            </div>
            <div className="browse-skills">
                <div className="browse-skill-item">
                    HTML
                </div>
                <div className="browse-skill-item">
                    HTML
                </div>
                <div className="browse-skill-item">
                    HTML
                </div>
                <div className="browse-skill-item">
                    HTML
                </div>
                <div className="browse-skill-item">
                    HTML
                </div>
            </div>
        </div>
    )
}

export default Browse_job_item
