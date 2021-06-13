import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.js'
import Adding_project from '../components/Adding_project.js'
import {observer} from "mobx-react-lite";


const Main_Hirer = observer(() => {

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
                <Link to="/main/hirer/projects" className="nav-link">Projects</Link>
                <Link to="/main/hirer/find" className="nav-link">Find freelancer</Link>
                <Link className="nav-link active">Post project</Link>
            </nav>
            <div className="content container2">
                <Adding_project />
            </div>
        </div>
    );
});

export default Main_Hirer;