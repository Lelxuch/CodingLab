import React, {useContext} from 'react'
import Browse_job_item from '../components/Browse_job_item.js'
import Skills from '../components/Skills.js'
import {Context} from "../index";

const Browse = () => {
    const {project} = useContext(Context)
    return (
        <div>
            <form className="browse-filter">
                <div className="browse-filter-title">
                    Filter
                </div>
                <div className="browse-filter-item payment">
                    <span className="title">Payment: </span>
                    <div className="payment-content">
                        <input type="text" placeholder="min"/>
                        <input type="text" placeholder="max"/>
                    </div>
                </div>
                <div className="browse-filter-item category">
                    <span className="title">
                        Category:
                    </span>
                    <div className="category-content">
                        <select name="categorySelect" id="categorySelect">
                            {project.categories.map((category) =>
                                <option key={category.id} onClick={() => project.setSelectedCategory(category)}
                                        value="WEB_development">
                                    {category.name}
                                </option>
                            )}
                        </select>
                    </div>
                </div>
                <div className="browse-filter-item skills">
                    <div className="title">Skills:</div>
                    <Skills/>
                </div>
            </form>
            {project.projects.map(project =>
                <Browse_job_item key={project.id} project={project}/>
            )}
        </div>
    )
}

export default Browse
