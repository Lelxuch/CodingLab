import React, {useContext, useEffect, useState} from 'react'
import {observer} from "mobx-react-lite";
import {Link, useHistory} from 'react-router-dom';
import {registration2} from "../http/UserAPI";
import {PROFILE_F, PROFILE_H} from "../utils/consts";
import {Context} from "../index";
import jwt_decode from "jwt-decode";


const Register2 = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [role, setRole] = useState('')


    const click = async () => {
        try{
            let data;
            data = await registration2(username, firstName, lastName, birthDate, role);
            user.setUser(user)
            user.setIsAuth(true)
            if(role === 'Freelancer')history.push(PROFILE_F)
            history.push(PROFILE_H)
        }catch (e) {
            alert(e.response.data.message)
        }
    }


    return (
        <div id="RegisterStep2">
            <div className="container2">
                <div className="top">
                    <h1>Registration is not finished yet. Please tell us more about you </h1>
                </div>
            </div>
            <div className="box">
                <div className="container2">
                    <div className="step">
                        <h1>Step 1</h1>
                        <div className="item">
                            <h3>Choose a username for your account</h3>
                            <input type="text" placeholder="Username"
                                   value={username}
                                   onChange={e => setUsername(e.target.value)}/>
                        </div>
                        <div className="item">
                            <h3>Write your first name</h3>
                            <input type="text" placeholder="First name"
                                   value={firstName}
                                   onChange={e => setFirstName(e.target.value)}/>
                        </div>
                        <div className="item">
                            <h3>Write your second name</h3>
                            <input type="text" placeholder="Second name"
                                   value={lastName}
                                   onChange={e => setLastName(e.target.value)}/>
                        </div>
                        <div className="item">
                            <h3>Your date of birth</h3>
                            <input type="date"
                                   value={birthDate}
                                   onChange={e => setBirthDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="step">
                        <h1>Step 2</h1>
                        <div className="item2 btns">
                            <h3>What type of account (Don't worry, you can change it later)</h3>
                            <div className="btns">
                                <input className="btn" type="button" value="Hirer" onChange={e => setRole('Hirer')}
                                       onClick={click}/>
                                <input className="btn" type="button" value="Freelancer" onChange={e => setRole('Freelancer')}
                                       onClick={click}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
});

export default Register2;