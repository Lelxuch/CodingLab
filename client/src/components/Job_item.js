import React from 'react'
import { Link } from 'react-router-dom'

const Job_item = (key, job) => {
    return (
        <div key={ key } className="job-item">
            <div className="job-top">
                <Link className="job-title" to="/project/:id">
                    Job title
                </Link>
                <div className="job-status">
                    In process
                </div>
            </div>
            <div className="job-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque est impedit totam optio! Nobis libero quas blanditiis expedita fuga possimus aliquid temporibus. Esse natus consequatur possimus quidem, voluptatibus quaerat quod.
            </div>
        </div>
    )
}

export default Job_item
