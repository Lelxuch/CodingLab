import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import RegisterStep1 from './pages/RegisterStep1'
import RegisterStep2 from './pages/RegisterStep2'
import Profile_freelancer from './pages/Profile_freelancer'
import Pofile_hirer from './pages/Profile_hirer'
import Profile_skills from './pages/Profile_skills'
import Profile_settings_personal from './pages/Settings_personal'
import Profile_settings_password from './pages/Settings_password'
import Main_freelancer from './pages/Main_freelancer'
import Main_freelancer_Jobs from './pages/Main_freelancer_jobs'
import Main_freelancer_Browse from './pages/Main_freelancer_browse'
import Main_freelancer_Requests from './pages/Main_freelancer_requests'
import Main_hirer from './pages/Main_hirer'
import Main_hirer_projects from './pages/Main_hirer_projects'
import Main_hirer_find from './pages/Main_hirer_find'
import Main_hirer_post from './pages/Main_hirer_post'
import Project_info from './pages/Project_info'

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
                    <Route exact path="/main/hirer" component={Main_hirer} />
                    <Route exact path="/main/hirer/projects" component={Main_hirer_projects} />
                    <Route exact path="/main/hirer/find" component={Main_hirer_find} />
                    <Route exact path="/main/hirer/post" component={Main_hirer_post} />
                    <Route exact path="/profile/freelancer/view" component={Profile_freelancer} />
                    <Route exact path="/profile/edit/skills" component ={Profile_skills} />
                    <Route exact path="/profile/hirer/view" component={Pofile_hirer} />
                    <Route exact path="/profile/settings/personal" component={Profile_settings_personal} />
                    <Route exact path="/profile/settings/password" component={Profile_settings_password} />
                    <Route exact path="/project/:id" component={Project_info} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;