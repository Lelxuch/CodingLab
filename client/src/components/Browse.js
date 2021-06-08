import React from 'react'
import Browse_job_item from '../components/Browse_job_item.js'
import Skills from '../components/Skills.js'

const Browse = () => {
    return (
        <div>
            <form className="browse-filter">
                <div className="browse-filter-title">
                    Filter
                </div>
                <div className="browse-filter-item payment">
                    <span className="title">Payment: </span>
                    <div className="payment-content">
                        <input type="text" placeholder="min" />
                        <input type="text" placeholder="max" />
                    </div>
                </div>
                <div className="browse-filter-item category">
                    <span className="title">
                        Category:
                    </span>
                    <div className="category-content">
                        <select name="categorySelect" id="categorySelect">
                            <option value="WEB_development">Web development</option>
                            <option value="WEB_development">Web development</option>
                            <option value="WEB_development">Web development</option>
                            <option value="WEB_development">Web development</option>
                        </select>
                    </div>
                </div>
                <div className="browse-filter-item skills">
                    <div className="title">Skills: </div>
                    <Skills />
                </div>
            </form>
            <Browse_job_item />
            <Browse_job_item />
            <Browse_job_item />
            <Browse_job_item />
            <Browse_job_item />
        </div>
    )
}

export default Browse
