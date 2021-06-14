import React from 'react'
import {Link, useHistory} from 'react-router-dom';
import {PROJECT_ROUTE} from "../utils/consts";

const Browse_job_item = ({project}) => {
    const history = useHistory()

    return (
        <div className="browse-item">
            <div className="browse-top">
                <Link className="browse-title" onClick={() => history.push(PROJECT_ROUTE + '/' + project.id)}>
                    {project.name}
                </Link>
                <div className="browse-payment">
                    {project.payment}$
                </div>
            </div>
            <div className="browse-desription">
                {project.description}
            </div>
            <div className="browse-bottom">
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
                <button className="browse-delete-btn">
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Browse_job_item
