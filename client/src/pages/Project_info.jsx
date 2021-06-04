import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.js'

function Main_freelancer() {
    return (
        <div id="Project-info">
            <Header />
            <div className="content container2">
                <div className="hirer-profile">
                    <img src="../../images/white.jpg" alt="" className="hirer-img" />
                    <div className="hirer-content">
                        <div className="hirer-top">
                            <div className="hirer-username">
                                / JustSxmeDude
                            </div>
                            <div className="hirer-rating">
                                <div className="rating">
                                    <div className="star-icon">
                                        <img src="../images/Profile/star.png" alt="" />
                                    </div>
                                    <div className="score">
                                        4.5
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hirer-bottom">
                            <Link className="hirer-link" to="/profile/hirer/view">
                                View hirer profile
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="project-details">
                    <div className="details-item">
                        <div className="details-title">
                            Title
                        </div>
                        <div className="details-content">
                            Spotify remake
                        </div>
                    </div>
                    <div className="details-item">
                        <div className="details-title">Description</div>
                        <div className="details-content">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ut perferendis unde fugiat deserunt in vero ex quibusdam dolores accusantium, commodi debitis illum corrupti, asperiores eveniet minus quas perspiciatis atque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde exercitationem beatae ad quo dolores! Ipsa soluta adipisci nobis inventore architecto nulla atque. Ducimus cumque fuga assumenda quod vitae voluptatum similique!
                        </div>
                    </div>
                    <div className="details-item">
                        <div className="details-title">Task file</div>
                        <div className="details-content">
                            <a className="details-download" href="../../images/test.pdf" download> Download</a>
                        </div>
                    </div>
                    <div className="details-item">
                        <div className="details-title">Price</div>
                        <div className="details-content">
                            100$
                        </div>
                    </div>
                </div>
                <div className="last-des">
                    <button className="request-accept-btn">Accept</button>
                    <button className="request-decline-btn">Decline</button>
                </div>
            </div>
        </div>
    );
}

export default Main_freelancer;