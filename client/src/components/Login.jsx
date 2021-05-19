import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div id="Login">
            <form>
                <h1>Sign in</h1>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Sign in</button>
            </form>
        </div>
    );
}

export default Login;