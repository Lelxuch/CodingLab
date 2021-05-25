import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import RegisterStep1 from './components/RegisterStep1'
import RegisterStep2 from './components/RegisterStep2'
import Main_freelancer from './components/Main_freelancer'

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register-1" component={RegisterStep1} />
                    <Route exact path="/register-2" component={RegisterStep2} />
                    <Route exact path="/main-freelancer" component={Main_freelancer} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;