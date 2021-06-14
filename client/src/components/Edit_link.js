import React from 'react'

const Edit_link = () => {
    return (
        <div className="link-item">
            <div className="link-type link-item-elem">Github</div>
            <a href="https://github.com/Lelxuch/codinglab" className="link-href link-item-elem">https://github.com/Lelxuch/codinglab</a>
            <div className="link-btns link-item-elem">
                <button class="link-btn edit" data-toggle="modal" data-target="#linkEditModal">Edit</button>
                <button class="link-btn delete">Delete</button>
            </div>
        </div>
    )
}

export default Edit_link
