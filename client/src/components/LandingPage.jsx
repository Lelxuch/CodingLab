import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';

function LandingPage() {
    return (
        <div>
            <header>
                <Link to="" className="header-brand"><img src="./images/logo-dark.png" alt="" /></Link>
                <Link to="" className="header-login"><img src="./images/Home/header/enter.png" alt="" /></Link>
            </header>

            <section id="intro">
                <div className="container intro-inner">
                    <div className="intro-left">
                        <span className="intro-text">Want to find someone who will turn your ideas into reality?</span>
                        <Link to="" className="intro-btn">Join us</Link>
                    </div>
                    <div className="intro-right">
                        <svg  viewBox="0 0 653 739" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M345.286 10.1312C407.572 -10.7963 482.897 2.11507 538.445 35.8383C593.477 69.2483 620.483 131.184 640.937 189.622C659.017 241.28 652.549 295.583 648.336 349.812C644.391 400.594 648.174 455.354 617.054 497.062C586.532 537.97 520.853 538.063 482.238 572.423C427.093 621.491 421.132 734.468 345.286 738.881C271.779 743.158 256.561 631.07 198.166 588.952C150.204 554.36 74.0731 561.751 37.2528 516.712C-0.145184 470.966 -3.99527 407.131 2.66407 349.812C8.99116 295.354 32.8712 241.798 73.7374 202.681C111.191 166.83 155.481 152.953 198.166 122.686C249.709 86.1376 284.465 30.5667 345.286 10.1312Z" fill="#8449FC"/></svg>
                        <div className="intro-img">
                            <img src="./images/Home/intro/Vision/vision.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="advantages">
                <div className="container advantages-inner">
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
                <svg className="svg1" viewBox="0 0 800 671" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M404.246 45.1675C436.466 58.608 461.607 92.2464 496.613 92.3703C555.258 92.5778 616.02 13.775 664.564 46.0888C708.568 75.3806 635.283 155.239 660.277 201.315C686.28 249.25 779.74 239.236 797.28 290.746C812.713 336.067 758.51 377.274 734.312 418.735C713.567 454.278 693.427 490.107 663.984 519.13C636.061 546.655 599.786 562.857 566.619 584.038C532.906 605.568 504.743 639.566 465.091 646.15C425.411 652.738 388.464 617.458 348.325 620.284C293.202 624.166 239.734 690.177 190.52 665.487C143.708 642.002 156.873 568.85 145.392 518.475C136.686 480.278 151.739 436.182 130.684 402.947C99.8058 354.207 9.01267 346.562 0.501024 289.771C-6.86603 240.617 69.0096 217.707 96.6873 176.118C121.285 139.156 123.088 89.1064 154.845 57.8488C186.712 26.4836 230.433 2.42061 275.491 0.12957C321.38 -2.20378 361.953 27.5249 404.246 45.1675Z" fill="#FF6FB0"/>
                </svg>
                <svg className="svg2" viewBox="0 0 773 775" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M395.041 3.97578C441.655 19.0143 453.322 84.4301 495.803 108.726C530.641 128.651 574.764 118.668 613.593 128.972C667.316 143.228 753.628 128.814 770.296 181.568C788.816 240.185 707.082 285.567 680.611 341.084C665.67 372.417 641.609 404.709 647.609 438.87C659.076 504.155 749.238 555.216 729.332 618.465C713.518 668.712 625.306 637.74 577.742 660.86C535.226 681.527 509.707 727.667 466.266 746.337C420.115 766.172 368.315 781.692 318.979 772.073C269.644 762.455 228.023 728.188 192.368 692.939C159.055 660.007 150.204 609.658 119.195 574.571C85.6018 536.562 17.7171 526.773 2.76081 478.404C-12.0765 430.419 37.3566 384.756 45.1657 335.158C52.4849 288.671 25.0531 236.719 47.3481 195.218C69.7704 153.48 125.317 143.031 163.528 114.833C198.633 88.9259 225.926 53.2244 265.312 34.3647C305.684 15.0332 352.42 -9.77476 395.041 3.97578Z" fill="#8449FC"/>
                </svg>
            </section>

            <section id="categories">
                <div className="container cat-inner">
                    <h2 className="cat-title">Categories</h2>
                    <div className="cat-row">
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <span>Web design</span>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <span>Web design</span>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <span>Web design</span>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <span>Web design</span>
                        </div>
                    </div>
                    <div className="cat-row">
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <span>Web design</span>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <span>Web design</span>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <span>Web design</span>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <span>Web design</span>
                        </div>
                    </div>
                    <div className="cat-row">
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <span>Web design</span>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <span>Web design</span>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <span>Web design</span>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <span>Web design</span>
                        </div>
                    </div>
                    <div className="cat-row">
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <span>Web design</span>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <span>Web design</span>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <span>Web design</span>
                        </div>
                        <div className="cat-item">
                            <img src="./images/Home/categories/web-design.png" alt="" />
                            <span>Web design</span>
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