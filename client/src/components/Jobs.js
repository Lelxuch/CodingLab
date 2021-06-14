import {React, useState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Job_item from '../components/Job_item.js'
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {fetchCategories, fetchJobs, fetchProjects} from "../http/ProjectsAPI";

const Jobs = observer(() => {
    const {job} = useContext(Context)
    useEffect(() => {
        fetchJobs().then(data => job.setJobs(data.rows))
    }, [])

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
            {job.jobs.map(job =>
                <Job_item key={job.id} job={job}/>
            )}
        </div>
    )
})

export default Jobs
