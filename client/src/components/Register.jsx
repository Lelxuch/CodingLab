import React from 'react'
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div id="Register">
            <div className="container">
                <div class="blocks">
                    <div class="info-block">
                        <div class="info-block-content">
                            <h3>
                                Already have an accout?
                            </h3>
                            <Link to="/login">Sign in</Link>
                        </div>
                        <img src="./images/LogReg/Secure.svg" class="info-block-image" alt=""/>
                    </div>
                </div>
                <div class="signin">
                    <form action="#" class="sign-in-form">
                        <h2 class="title">Sign up</h2>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <input type="password" placeholder="Repeat password"/>
                        <input type="submit" value="Sign up" class="btn"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;