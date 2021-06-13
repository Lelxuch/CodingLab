import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.js'
import Moderator_users from '../components/Moderator_users.js'

function Moderator_hirer() {
    return (
        <div id="Moderator">
            <Header />
            <nav className="content-nav container2">
                <Link to="/moderator/users" className="nav-link active">Users</Link>
                <Link to="/moderator/projects" className="nav-link">Projects</Link>
                <Link to="/moderator/skills" className="nav-link">Skills</Link>
                <Link to="/moderator/category" className="nav-link">Category</Link>
            </nav>
            <div className="content container2" id="main-default">
                <Moderator_users />
            </div>
        </div>
    );
}

export default Moderator_hirer;