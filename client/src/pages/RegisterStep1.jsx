import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import {registration} from "../http/UserAPI";
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {REGISTRATION2_ROUTE} from "../utils/consts";


const Register = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try{
            let data;
            data = await registration(email, password);
            user.setUser(user)
            user.setIsAuth(true)
            history.push(REGISTRATION2_ROUTE)
        }catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div id="RegisterStep1">
            <div className="container2">
                <div class="blocks">
                    <div class="info-block">
                        <div class="info-block-content">
                            <h3>
                                Already have an account?
                            </h3>
                            <Link to="/login">Sign in</Link>
                        </div>
                        <img src="../images/LogReg/Marketing.svg" class="info-block-image" alt=""/>
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
});

export default Register;