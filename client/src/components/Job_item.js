import React, {useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Project_item from "./Project_item";
import {fetchCategories, fetchProjects} from "../http/ProjectsAPI";

const Job_item = observer(({job}) => {
    const {project} = useContext(Context)

    useEffect(() => {
        fetchCategories().then(data => project.setCategories(data))
        fetchProjects().then(data => project.setProjects(data.rows))
    }, [])

    return (
        <div  className="job-item">
            <div className="job-top">
                <Link className="job-title" to="/project/:id">
                    {project.projects.map((project) =>
                        <div key={(job.projectId === project.id)}>
                            {(job.projectId === project.id) ? project.name : ""}
                        </div>
                    )}
                </Link>
                <div className="job-status">

                    {job.status}
                </div>
            </div>
            <div className="job-description">
                {project.projects.map((project) =>
                    <div key={(job.projectId === project.id)}>
                        {(job.projectId === project.id) ? project.description : ""}
                    </div>
                )}
            </div>
        </div>
    )
})

export default Job_item
