import React, {useContext, useEffect, useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import RegisterStep1 from './pages/RegisterStep1'
import RegisterStep2 from './pages/RegisterStep2'
import Profile_freelancer from './pages/Profile_freelancer'
import Profile_hirer from './pages/Profile_hirer'
import Profile_edit_skills from './pages/Profile_edit_skills'
import Profile_edit_links from './pages/Profile_edit_links'
import Profile_edit_portfolio from './pages/Profile_edit_portfolio'
import Profile_settings_personal from './pages/Settings_personal'
import Profile_settings_password from './pages/Settings_password'
import Profile_portfolio_info from './pages/Profile_portfolio_info'
import Main_freelancer from './pages/Main_freelancer'
import Main_freelancer_Jobs from './pages/Main_freelancer_jobs'
import Main_freelancer_Browse from './pages/Main_freelancer_browse'
import Main_freelancer_Requests from './pages/Main_freelancer_requests'
import Main_hirer from './pages/Main_hirer'
import Main_hirer_projects from './pages/Main_hirer_projects'
import Main_hirer_find from './pages/Main_hirer_find'
import Main_hirer_post from './pages/Main_hirer_post'
import Project_info from './pages/Project_info'
import Moderator_projects from './pages/Moderator_projects'
import Moderator_users from './pages/Moderator_users'
import Moderator_skills from './pages/Moderator_skills'
import Moderator_category from './pages/Moderator_category'
import {observer} from "mobx-react-lite";
import {check} from "./http/UserAPI";
import {Context} from "./index";


const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])



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
                    <Route exact path="/profile/portfolio/:id" component ={Profile_portfolio_info} />
                    <Route exact path="/profile/edit/portfolio" component ={Profile_edit_portfolio} />
                    <Route exact path="/profile/edit/skills" component ={Profile_edit_skills} />
                    <Route exact path="/profile/edit/links" component ={Profile_edit_links} />
                    <Route exact path="/profile/hirer/view" component={Profile_hirer} />
                    <Route exact path="/profile/settings/personal" component={Profile_settings_personal} />
                    <Route exact path="/profile/settings/password" component={Profile_settings_password} />
                    <Route exact path="/project/:id" component={Project_info} />
                    <Route exact path="/moderator/projects" component={Moderator_projects} />
                    <Route exact path="/moderator/users" component={Moderator_users} />
                    <Route exact path="/moderator/skills" component={Moderator_skills} />
                    <Route exact path="/moderator/category" component={Moderator_category} />
                </Switch>
            </div>
        </Router>
    );
});

export default App;