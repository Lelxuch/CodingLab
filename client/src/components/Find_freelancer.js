import React from 'react'
import Project_item from './Find_freelancer_item.js'
import Skills from '../components/Skills'

const Find_project = () => {
    return (
        <div id="Find-freelancer">
            <div className="freelancer-filter">
                <div className="title">Filter</div>
                <div className="freelancer-filter-item rating">
                    <div className="title">Rating: </div>
                    <div className="rating-box">
                        <input type="radio" id="rt-1" value="1" name="rating" />
                        <input type="radio" id="rt-2" value="2" name="rating" />
                        <input type="radio" id="rt-2" value="3" name="rating" />
                        <input type="radio" id="rt-2" value="4" name="rating" />
                        <input type="radio" id="rt-2" value="5" name="rating" checked/>
                    </div>
                </div>
                <div className="freelancer-filter-item skills">
                    <div className="title">Skills: </div>
                    <Skills />
                </div>
            </div>
            <div className="freelancer-content">
                <Project_item />
                <Project_item />
                <Project_item />
                <Project_item />
                <Project_item />
            </div>
        </div>
    )
}

export default Find_project
