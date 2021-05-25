import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="container header-inner">
                <div className="nav-brand">
                    <img src="./images/logo-dark.png" alt="" className="logo" />
                </div>
                <nav>
                    <Link className="nav-item nav-elem">
                        <div className="nav-logo">
                            <img src="./images/Header/messenger.png" alt="" />
                        </div>
                        <div className="nav-title">
                            Chat
                        </div>
                    </Link >
                    <div className="dropdown nav-elem">
                        <button className="nav-item">
                            <div className="nav-logo">
                                <img src="./images/Header/avatar.png" alt="" />
                            </div>
                            <div className="nav-title">
                                Profile
                            </div>
                        </button>
                        <div className="dropdown-content">
                            <Link className="nav-link">View profile</Link>
                            <Link className="nav-link">Settings</Link>
                            <button className="nav-link">Log out</button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header