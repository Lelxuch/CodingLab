import React from 'react'
import Job_item from './Job_item'

const Edit_link = () => {
    return (
        <div className="link-item">
            <div className="link-type link-item-elem">Github</div>
            <a href="https://github.com/Lelxuch/codinglab" className="link-href link-item-elem">https://github.com/Lelxuch/codinglab</a>
            <div className="link-btns link-item-elem">
                <button class="link-btn edit" data-toggle="modal" data-target="#linkEditModal">Edit</button>
                <button class="link-btn delete">Delete</button>
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
    )
}

export default Edit_link
