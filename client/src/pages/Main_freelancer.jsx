import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import Main_freelancer_default from '../pages/Main_freelancer_default'
import Main_freelancer_Jobs from '../pages/Main_freelancer_jobs'
import Main_freelancer_Browse from '../pages/Main_freelancer_browse'
import Main_freelancer_Requests from '../pages/Main_freelancer_requests'

function Main_freelancer() {
    return (
        <Router>
            <div id="Main_freelancer">
                <Header />
                <div className="switcher container">
                    <div className="switcher-box">
                        <div className="switcher-item">
                            <Link to="/main/freelancer">Freelancer</Link>
                        </div>
                        <div className="switcher-item">
                            <Link to="/main/hirer" id="nonactive">Hirer</Link>
                        </div>
                        <div className="switcher-active"></div>
                    </div>
                </div>
                <nav className="content-nav container">
                    <Link to="/main/freelancer/jobs" className="nav-link">Jobs</Link>
                    <Link to="/main/freelancer/browse" className="nav-link">Browse job</Link>
                    <Link to="/main/freelancer/requests" className="nav-link">Requests</Link>
                </nav>
                <div className="content container">
                    <Switch>
                        <Route exact path="/main/freelancer" component={ Main_freelancer_default } />
                        <Route exact path="/main/freelancer/jobs" component={ Main_freelancer_Jobs } />
                        <Route exact path="/main/freelancer/browse" component={ Main_freelancer_Browse } />
                        <Route exact path="/main/freelancer/requests" component={ Main_freelancer_Requests } />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default Main_freelancer;