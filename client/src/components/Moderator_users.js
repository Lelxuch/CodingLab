import React from 'react'
import Moderator_find_user from './Moderator_find_user.js'

const Find_project = () => {
    return (
        <div id="Find-user">
            <div className="user-filter">
                <div className="title">Filter</div>
                <div className="user-filter-item rating">
                    <div className="title">Rating: </div>
                    <div className="rating-box">
                        <input type="radio" id="rt-1" value="1" name="rating" />
                        <input type="radio" id="rt-2" value="2" name="rating" />
                        <input type="radio" id="rt-2" value="3" name="rating" />
                        <input type="radio" id="rt-2" value="4" name="rating" />
                        <input type="radio" id="rt-2" value="5" name="rating" checked/>
                    </div>
                </div>
            </div>
            <div className="user-content">
                <Moderator_find_user/>
                <Moderator_find_user/>
                <Moderator_find_user/>
                <Moderator_find_user/>
            </div>
        </div>
    )
}

export default Find_project
