import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import Job_item from '../components/Job_item.js'

const Jobs = () => {
    return (
        <div>
            <div className="job-filter">
                <select name="jobFilter" id="jobFilter">
                    <option value="Bids">Bids</option>
                    <option value="InProcess">InProcess</option>
                    <option value="Past">Past</option>
                    <option value="Declined">Declined</option>
                </select>
            </div>
            <Job_item />
            <Job_item />
            <Job_item />
            <Job_item />
        </div>
    )
}

export default Jobs
