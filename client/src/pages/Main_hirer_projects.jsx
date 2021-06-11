import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header.js'
import Projects from '../components/Projects.js'

function Main_freelancer() {
    return (
        <div id="Main_hirer">
            <Header />
            <div className="switcher container2">
                <div className="switcher-box">
                    <div className="switcher-item">
                        <Link to="/main/freelancer">Freelancer</Link>
                    </div>
                    <div className="switcher-item">
                        <Link to="/main/hirer" id="nonactive">Hirer</Link>
                    </div>
                    <div id="switcher-active"></div>
                </div>
            </div>
            <nav className="content-nav container2">
                <Link to="/main/hirer/projects" className="nav-link active">Projects</Link>
                <Link to="/main/hirer/find" className="nav-link">Find freelancer</Link>
                <Link to="/main/hirer/post" className="nav-link">Post project</Link>
            </nav>
            <div className="content container2" id="Projects">
                <Projects />
            </div>
        </div>
    );
}

export default Main_freelancer;