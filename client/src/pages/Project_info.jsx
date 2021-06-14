import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.js'
import {useParams} from 'react-router-dom'
import {fetchCategories, fetchOneProject} from "../http/ProjectsAPI";

function Main_freelancer() {
    const [project, setProject] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneProject(id).then(data => setProject(data))
        fetchCategories().then(data => project.setCategories(data))
    }, [])

    return (
        <div id="Project-info">
            <Header />
            <div className="content container2">
                <div className="hirer-profile">
                    <img src="../../images/white.jpg" alt="" className="hirer-img" />
                    <div className="hirer-content">
                        <div className="hirer-top">
                            <div className="hirer-username">
                                / JustSxmeDude
                            </div>
                            <div className="hirer-rating">
                                <div className="rating">
                                    <div className="star-icon">
                                        <img src="../images/Profile/star.png" alt="" />
                                    </div>
                                    <div className="score">
                                        4.5
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hirer-bottom">
                            <Link className="hirer-link" to="/profile/hirer/view">
                                View hirer profile
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="project-details">
                    <div className="details-item">
                        <div className="details-title">
                            {project.name}
                        </div>
                        <div className="details-content">
                            Spotify Remake
                        </div>
                    </div>
                    <div className="details-item">
                        <div className="details-title">
                            {project.categories.map((category) =>
                                <text key={(category.id === project.categoryId)}>
                                    {(category.id === project.categoryId) ? category.name : ""}
                                </text>
                            )}
                        </div>
                        <div className="details-content">
                            {project.description}
                        </div>
                    </div>
                    <div className="details-item">
                        <div className="details-title">Task file</div>
                        <div className="details-content">
                            <a className="details-download" href={process.env.REACT_APP_API_URL + project.file} download> Download</a>
                        </div>
                    </div>
                    <div className="details-item">
                        <div className="details-title">Payment</div>
                        <div className="details-content">
                            {project.payment}$
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default Main_freelancer;