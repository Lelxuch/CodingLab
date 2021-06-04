import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.js';

function LandingPage() {
    return (
        <div id="LandingPage">
            <header>
                <Link to="/" className="header-brand"><img src="./images/logo-dark.png" alt="" /></Link>
                <Link to="/login" className="header-login"><img src="./images/Home/header/enter.png" alt="" /></Link>
            </header>

            <section id="intro">
                <div className="container2 intro-inner">
                    <div className="intro-left">
                        <span className="intro-text">Want to find someone who will turn your ideas into reality?</span>
                        <Link to="/register/1" className="intro-btn">Join us</Link>
                    </div>
                    <div className="intro-right">
                        <img src="./images/Home/intro/vision.png" alt="" />
                    </div>
                </div>
            </section>

            <section id="advantages">
                <div className="container2 advantages-inner">
                    <div className="card">
                        <div className="card-title">Post a job</div>
                        <div className="card-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit necessitatibus fuga ex culpa modi aliquid praesentium animi, molestias quibusdam sit distinctio quas! Fuga deserunt accusamus corporis laboriosam fugit mollitia?
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-title">Freelancers</div>
                        <div className="card-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit necessitatibus fuga ex culpa modi aliquid praesentium animi, molestias quibusdam sit distinctio quas! Fuga deserunt accusamus corporis laboriosam fugit mollitia?
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-title">Chat</div>
                        <div className="card-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit necessitatibus fuga ex culpa modi aliquid praesentium animi, molestias quibusdam sit distinctio quas! Fuga deserunt accusamus corporis laboriosam fugit mollitia?
                        </div>
                    </div>
                </div>
                <svg className="svg1" width="641" height="647" viewBox="0 0 641 647" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M327.102 0.5038C368.455 -4.15714 394.169 51.3693 434.293 62.4102C479.579 74.8716 545.532 30.9514 573.872 68.4075C605.743 110.53 554.245 171.867 557.02 224.616C558.702 256.58 574.686 285.424 586.847 315.032C602.871 354.042 644.54 386.33 640.694 428.326C637.082 467.764 591.816 489.377 567.983 521.007C544.13 552.663 531.559 594.1 498.88 616.533C466.116 639.023 424.367 646.141 384.633 646.867C346.569 647.562 310.537 632.833 274.475 620.633C241.254 609.394 211.657 591.487 179.51 577.471C143.407 561.73 102.028 557.003 71.4915 532.129C39.5338 506.097 3.5535 473.06 0.84017 431.931C-2.04996 388.122 41.484 355.113 57.1067 314.083C69.0748 282.65 74.4144 249.964 82.5509 217.329C92.2625 178.377 80.3591 128.026 110.192 101.162C140.099 74.2312 192.374 102.503 228.88 85.5622C268.504 67.1745 283.694 5.39629 327.102 0.5038Z" fill="#FF6FB0"/>
                </svg>

                <svg className="svg2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M395.041 3.97578C441.655 19.0143 453.322 84.4301 495.803 108.726C530.641 128.651 574.764 118.668 613.593 128.972C667.316 143.228 753.628 128.814 770.296 181.568C788.816 240.185 707.082 285.567 680.611 341.084C665.67 372.417 641.609 404.709 647.609 438.87C659.076 504.155 749.238 555.216 729.332 618.465C713.518 668.712 625.306 637.74 577.742 660.86C535.226 681.527 509.707 727.667 466.266 746.337C420.115 766.172 368.315 781.692 318.979 772.073C269.644 762.455 228.023 728.188 192.368 692.939C159.055 660.007 150.204 609.658 119.195 574.571C85.6018 536.562 17.7171 526.773 2.76081 478.404C-12.0765 430.419 37.3566 384.756 45.1657 335.158C52.4849 288.671 25.0531 236.719 47.3481 195.218C69.7704 153.48 125.317 143.031 163.528 114.833C198.633 88.9259 225.926 53.2244 265.312 34.3647C305.684 15.0332 352.42 -9.77476 395.041 3.97578Z" fill="#8449FC"/>
                </svg>
            </section>

            <section id="categories">
                <div className="container2 cat-inner">
                    <h2 className="cat-title">Categories</h2>
                    <div className="cat-row">
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <div>Web design</div>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <div>Web design</div>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <div>Web design</div>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <div>Web design</div>
                        </div>
                    </div>
                    <div className="cat-row">
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <div>Web design</div>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <div>Web design</div>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <div>Web design</div>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <div>Web design</div>
                        </div>
                    </div>
                    <div className="cat-row">
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <div>Web design</div>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <div>Web design</div>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <div>Web design</div>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <div>Web design</div>
                        </div>
                    </div>
                    <div className="cat-row">
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <div>Web design</div>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <div>Web design</div>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <div>Web design</div>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <div>Web design</div>
                        </div>
                    </div>
                </div>
                <div className="cat-last">And more</div>
            </section>
            
            <Footer />
        </div>
    );
}

export default LandingPage;