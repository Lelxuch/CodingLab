import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.js'

const Settings = () => {
    return (
        <div id="Profile_settings">
            <Header />
            <div className="profile-outer container2">
                <nav className="profile-nav">
                    <Link to="/profile/settings/personal" className="nav-link">Profile info</Link>
                    <Link to="/profile/settings/password" className="nav-link active">Password</Link>
                </nav>
                <div className="content">
                    <form>
                        <div className="inputs">
                            <input className="input" type="text" placeholder="Password"/>
                            <input className="input" type="text" placeholder="Repeat password"/>
                        </div>
                        <div className="submit">
                            <button className="submit-btn">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Settings
