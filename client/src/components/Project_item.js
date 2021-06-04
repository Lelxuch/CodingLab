import React from 'react'
import { Link } from 'react-router-dom'

const Project_item = ( {key, project} ) => {
    return (
        <div key={ key } className="project-item">
            <div className="project-left">
                <Link className="project-title" to="/project/1">
                    { project.title }
                </Link>
                <div className="project-description">
                    { project.description }
                </div>
            </div>
        </div>
    )
}

export default Project_item
