import React from 'react'
import { Link } from 'react-router-dom';

function RegisterStep2() {
    return (
        <div id="RegisterStep2">
            <div className="container">
                <div className="top">
                    <h1>Registration is not finished yet. Please tell us more about you </h1>
                </div>
            </div>
            <div className="box">
                <div className="container">
                    <div className="step">
                        <h1>Step 1</h1>
                        <div className="item">
                            <h3>Choose a username for your account</h3>
                            <input type="text" placeholder="Username"/>
                        </div>
                        <div className="item">
                            <h3>Write your first name</h3>
                            <input type="text" placeholder="Username"/>
                        </div>
                        <div className="item">
                            <h3>Write your second name</h3>
                            <input type="text" placeholder="Username"/>
                        </div>
                        <div className="item">
                            <h3>Your date of birth</h3>
                            <input type="date" placeholder="Username"/>
                        </div>
                        <div className="next-step">
                            <input className="btn" id="step1Button" type="button" value="Next"/>
                        </div>
                    </div>
                    <div className="step">
                        <h1>Step 2</h1>
                        <div className="item2 btns">
                            <h3>What type of account(Don’t worry you can change it later)</h3>
                            <div className="btns">
                                <input className="btn" type="button" value="Hirer"/>
                                <input className="btn" type="button" value="Freelancer"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterStep2;