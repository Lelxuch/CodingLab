import React from 'react'
import Header from '../components/Header.js'
import Portfolio_item from '../components/Edit_portfolio'

function Profile_Skills() {
    return (
        <div id="Profiles">
            <Header />
            <div className="container2">
                <div className="profile-edit-content">
                    <div className="profile-edit-top">
                        <div className="title">Portfolio</div>
                        <button className="btn" data-toggle="modal" data-target="#portfolioAddModdal">Add</button>
                    </div>
                    <div className="profile-edit-box">
                        <div className="portfolio-content">
                            <Portfolio_item />
                        </div>
                        <div className="modal fade" id="portfolioAddModdal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="portfolioAddModalLabel">Add portfolio</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body portfolio-add-modal-body">
                                        <div className="portfolio-add-item">
                                            <label htmlFor="portfolio-add-title">Title</label>
                                            <input type="text" placeholder="Title" id="portfolio-add-title" />
                                        </div>
                                        <div className="portfolio-add-item">
                                            <label htmlFor="portfolio-add-desc">Description</label>
                                            <textarea name="" id="portfolio-add-desc"></textarea>
                                        </div>
                                        <div className="portfolio-add-item">
                                            <label htmlFor="portfolio-add-img">Image</label>
                                            <input type="file" id="portfolio-add-img" />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="portfolioEditModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="portfolioEditModalLabel">Edit portfolio</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body portfolio-edit-modal-body">
                                        <div className="portfolio-edit-item">
                                            <label htmlFor="portfolio-edit-title">Title</label>
                                            <input type="text" placeholder="Title" id="portfolio-edit-title" />
                                        </div>
                                        <div className="portfolio-edit-item">
                                            <label htmlFor="portfolio-edit-desc">Description</label>
                                            <textarea name="" id="portfolio-edit-desc"></textarea>
                                        </div>
                                        <div className="portfolio-edit-item">
                                            <label htmlFor="portfolio-edit-img">Image</label>
                                            <input type="file" id="portfolio-edit-img" />
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