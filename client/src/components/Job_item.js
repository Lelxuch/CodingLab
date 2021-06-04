import React from 'react'
import { Link } from 'react-router-dom'

const Job_item = (key, job) => {
    return (
        <div key={ key } className="job-item">
            <div className="job-left">
                <Link className="job-title">
                    { job.title }
                </Link>
                <div className="job-description">
                    { job.description }
                </div>
            </div>
            <div className="job-right">
                <button className="job-accept-btn">Accept</button>
                <button className="job-decline-btn">Decline</button>
            </div>
        </div>
    )
}

export default Job_item
