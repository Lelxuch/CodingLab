import React from 'react'

var nickname = "JustSxmeDude";
var score = 4.4;
var onoff = true;
var money = 100;

if (onoff) {
    var indicator = <div className="circle green"></div>
    var text = <div className="text">online</div>
} else {
    var indicator = <div className="circle red"></div>
    var text = <div className="text">offline</div>
}


const Profile_top_block = () => {
    return (
        <div className="top-block">
                <img src="../images/white.jpg" alt="" />
                <div className="box">
                    <div className="on-off-line">
                        <div className="on-off">
                            { indicator }
                            { text }
                        </div>
                    </div>
                    <div className="lines">
                        <div className="nickname-line">
                            <div className="nickname">
                                / { nickname }
                            </div>
                        </div>
                        <div className="rating-line">
                            <div className="rating">
                                <div className="star-icon">
                                    <img src="../images/Profile/star.png" alt="" />
                                </div>
                                <div className="score">
                                    { score }
                                </div>
                            </div>
                        </div>
                        <div className="payment-line">
                            <div className="payment">
                                <div className="payment-icon">
                                    <img src="../images/Profile/money.png" alt="" />
                                </div>
                                <div className="payment-money">
                                    { money }$
                                </div>
                            </div>
                            <button className="hire-btn">
                                Hire
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
    )
}

export default Profile_top_block
