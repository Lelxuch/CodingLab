import React, {useContext, useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import {login, loginWithUsername} from "../http/UserAPI";
import {observer} from "mobx-react-lite";
import {PROFILE_F} from "../utils/consts";
import {Context} from "../index";

const Login = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const click = async () => {
        try{
            const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(filter.test(email)) {
                let data;
                data = await login(email, password);
                user.setUser(user)
                user.setIsAuth(true)
                history.push(PROFILE_F)
            } else {
                setUsername(email)
                let data;
                data = await loginWithUsername(username, password);
                user.setUser(user)
                user.setIsAuth(true)
                history.push(PROFILE_F)
            }
        }catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div id="Login">
            <div className="container2">
                <div class="blocks">
                    <div class="info-block">
                        <div class="info-block-content">
                            <h3>
                                New here ?
                            </h3>
                            <Link to="/register/1">Sign up</Link>
                        </div>
                        <img src="./images/LogReg/Marketing.svg" class="info-block-image" alt=""/>
                    </div>
                </div>
                <div class="signin">
                    <form class="sign-in-form">
                        <h2 class="title">Sign in</h2>
                        <input type="email" placeholder="Email or username"
                               value={email}
                               onChange={e => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Password"
                               value={password}
                               onChange={e => setPassword(e.target.value)}/>
                        <input value="Login" onClick={click} class="btn"/>
                    </form>
                </div>
            </div>
        </div>
    );
});

export default Login;