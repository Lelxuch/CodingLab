import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage.jsx'
import Login from './components/Login.jsx'
import RegisterStep1 from './components/RegisterStep1.jsx';
import RegisterStep2 from './components/RegisterStep2.jsx'

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register-1" component={RegisterStep1} />
                    <Route exact path="/register-2" component={RegisterStep2} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;