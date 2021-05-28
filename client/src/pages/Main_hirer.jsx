import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header'

function Main_hirer() {
    return (
        <div id="Main_freelancer">
            <Header />
            <div className="switcher">
                <div className="container">
                    <div className="switcher-btn">
                        <Link to="/main/freelancer">Freelancer</Link>
                        <Link to="/main/firer" className="active">Hirer</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main_hirer;