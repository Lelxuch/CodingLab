import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    window.onload = function(){
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        const navLink = document.querySelectorAll(".nav-link");
        hamburger.addEventListener("click", mobileMenu);
        navLink.forEach(n => n.addEventListener("click", closeMenu));

        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        }

        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    }

    return (
        <header id="main-header">
            <nav className="navbar">
                <Link to="main/freelancer" className="nav-logo">
                    <img src="../images/logo-dark.png" alt="" />
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to className="nav-link">Chat</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile/freelancer" className="nav-link"> Profile </Link>
                    </li>
                </ul>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    )
}

export default Header