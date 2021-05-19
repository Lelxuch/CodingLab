import React from 'react'
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div id="Register">
            <form>
                <h1>Sign up</h1>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Repeat password"/>
                <button type="submit">Sign up</button>
            </form>
        </div>
    );
}

export default Register;