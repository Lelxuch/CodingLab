import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.js'
import Top_Block from '../components/Profile_top_block.js'
import Portfolio_card from '../components/Portfolio_card.js'
import Skill_item from '../components/Skill_item.js'
import Link_item from '../components/Link_item.js'
import Review_item from '../components/Review_item.js'

function Profile_freelancer() {
    return (
        <div id="Profiles">
            <Header />
            <div className="container2">
                <div className="profile-edit-content">
                    <div className="profile-edit-top">
                        <div className="title">Skilss</div>
                        <button className="btn">Add</button>
                    </div>
                    <div className="profile-edit-box">
                        <div className="skills">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile_freelancer;