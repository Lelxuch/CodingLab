import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div id="Login">
            <div className="container">
                <div class="blocks">
                    <div class="info-block">
                        <div class="info-block-content">
                            <h3>
                                New here ?
                            </h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <Link to="/register-1">Sign up</Link>
                        </div>
                        <img src="./images/LogReg/Marketing.svg" class="info-block-image" alt=""/>
                    </div>
                </div>
                <div class="signin">
                    <form action="#" class="sign-in-form">
                        <h2 class="title">Sign in</h2>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <input type="submit" value="Login" class="btn"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;