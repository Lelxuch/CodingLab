import React from 'react'
import { Link } from 'react-router-dom'

const Project_item = ( {key, project} ) => {
    return (
        <div key={ key } className="project-item">
            <div className="project-top">
                <Link className="project-title" to="/project/1">
                    { project.title }
                </Link>
                <div className="project-status">
                    Submitted
                </div>
            </div>
            <div className="project-description">
                { project.description }
            </div>
        </div>
    )
}

export default Project_item
