import React from 'react'
import Skills from '../components/Skills'

const Adding_project = () => {
    return (
        <div id="Add-project">
            <form>
                <div className="input-item">
                    <label htmlFor="project_name">Name of the project</label>
                    <input id="project_name" type="text" placeholder="Name of the project"/>
                </div>
                <div className="input-item">
                    <label htmlFor="project_desc">Description</label>
                    <textarea name="desc" id="project_desc" placeholder="Description"></textarea>
                </div>
                <div className="input-item">
                    <label htmlFor="project_task">Task file</label>
                    <input id="project_task" type="file" className="input-upload" />
                </div>
                <div className="input-item">
                    <label htmlFor="project_category">Category</label>
                    <select id="project_category" name="cars">
                        <option value="volvo">---</option>
                        <option value="saab">WEB</option>
                        <option value="fiat">IOS</option>
                        <option value="audi">Android</option>
                    </select>
                </div>
                <div className="input-item">
                    <label htmlFor="project_skills">Skilss</label>
                    <div className="project-skills">
                        <Skills />
                    </div>
                </div>
                <div className="input-item">
                    <label htmlFor="price">Price</label>
                    <input id="price" placeholder="Price"></input>
                </div>
                <div className="submit">
                    <button type="submit" className="submit-btn">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Adding_project
