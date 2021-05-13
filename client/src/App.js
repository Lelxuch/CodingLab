import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage.jsx'

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;