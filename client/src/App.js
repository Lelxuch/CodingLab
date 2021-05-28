import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import RegisterStep1 from './pages/RegisterStep1'
import RegisterStep2 from './pages/RegisterStep2'
import Profile_freelancer from './pages/Profile_freelancer'
import Main_freelancer from './pages/Main_freelancer'
import Main_freelancer_Jobs from './pages/Main_freelancer_jobs'
import Main_freelancer_Browse from './pages/Main_freelancer_browse'
import Main_freelancer_Requests from './pages/Main_freelancer_requests'

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register/1" component={RegisterStep1} />
                    <Route exact path="/register/2" component={RegisterStep2} />
                    <Route exact path="/main/freelancer" component={Main_freelancer} />
                    <Route exact path="/main/freelancer/jobs" component={Main_freelancer_Jobs} />
                    <Route exact path="/main/freelancer/browse" component={Main_freelancer_Browse} />
                    <Route exact path="/main/freelancer/requests" component={Main_freelancer_Requests} />
                    <Route exact path="/profile/freelancer" component={Profile_freelancer} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;