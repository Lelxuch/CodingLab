import React from 'react'
import Header from '../components/Header.js'
import Skill_item from '../components/Edit_skill.js'

function Profile_skills() {
    function addSkill() {
        
    }
    return (
        <div id="Profiles">
            <Header />
            <div className="container2">
                <div className="profile-edit-content">
                    <div className="profile-edit-top">
                        <div className="title">Skills</div>
                        <button className="btn" data-toggle="modal" data-target="#skillAddModal">Add</button>
                    </div>
                    <div className="profile-edit-box">
                        <div className="skills-content">
                            <Skill_item />
                            <div className="modal fade" id="skillAddModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="skillAddModalLabel">Add skill</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="modal-body skills-modal-body">
                                                <select name="skills" id="skillsSelect">
                                                    <option value="HTML">HTML</option>
                                                    <option value="CSS">CSS</option>
                                                    <option value="JS">JS</option>
                                                    <option value="HTML">HTML</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary" onClick={addSkill}>Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile_skills;