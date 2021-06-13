import React, {useContext} from 'react'
import {Link, useHistory} from 'react-router-dom';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {LANDING_ROUTE} from "../utils/consts";

const Header = observer( () => {
    const {user} = useContext(Context)
    const history = useHistory()


    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.setItem('token', '')
        history.push(LANDING_ROUTE)
    }

    return (
        <header id="main-header">
            <nav className="navbar navbar-expand-lg">
                <Link to="/main/freelancer" className="nav-logo"><img src="../../images/logo-dark.png" alt="" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Chat</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Profile
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/profile/freelancer/view">View profile</Link>
                                <Link className="dropdown-item" to="/profile/settings/personal">Settings</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" onClick={ ()=> logOut()} >Log out</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
});

export default Header