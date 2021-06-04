import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {login, registration} from "../http/UserAPI";

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        const response = await registration(email, password);
        console.log(response)
    }

    return (
        <div id="RegisterStep1">
            <div className="container2">
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
                        <input type="email" placeholder="Email"
                               value={email}
                               onChange={e => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Password"
                               value={password}
                               onChange={e => setPassword(e.target.value)}/>
                        <input type="password" placeholder="Repeat password" />
                        <input type="submit" value="Sign up" onClick={click}  class="btn"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;