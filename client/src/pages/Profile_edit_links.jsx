import React from 'react'
import Header from '../components/Header.js'
import Link_item from '../components/Edit_link.js'

function Profile_Skills() {
    return (
        <div id="Profiles">
            <Header />
            <div className="container2">
                <div className="profile-edit-content">
                    <div className="profile-edit-top">
                        <div className="title">Links</div>
                        <button className="btn" data-toggle="modal" data-target="#linkAddModal">Add</button>
                    </div>
                    <div className="profile-edit-box">
                        <div className="links-content">
                            <Link_item />
                            <Link_item />
                            <Link_item />
                            <Link_item />
                        </div>
                        <div className="modal fade" id="linkAddModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="skillAddModalLabel">Add link</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="modal-body links-modal-body">
                                            <select name="skills" id="linkSelect">
                                                <option value="HTML">Github</option>
                                                <option value="CSS">Linkedin</option>
                                                <option value="JS">Facebook</option>
                                            </select>
                                            <input type="text" className="link-input" placeholder="paste link here" />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="linkEditModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="LinkEditModalLabel">Edit link</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="modal-body links-modal-body">
                                            <input type="text" className="link-input" placeholder="paste link here" />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Edit</button>
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

export default Profile_Skills;