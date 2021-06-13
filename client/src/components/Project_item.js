import React from 'react'
import { Link } from 'react-router-dom'
import {observer} from "mobx-react-lite";

const Project_item =  observer(({project}) => {
    return (
        <div className="project-item">
            <div className="project-top">
                <Link className="project-title" to="/project/:id">
                    {project.name}
                </Link>
                <div className="project-status">
                    Submitted
                </div>
            </div>
            <div className="project-description">
                {project.description}
            </div>
        </div>
    )
})

export default Project_item
