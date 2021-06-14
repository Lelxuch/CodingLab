import React from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js';

function Profile_portfolio() {
    return (
        <div id="Portfolio_info">
            <Header />
            <div className="main container2">
                <div className="item">
                    <img src="../../images/white.jpg" alt="" class="portfolio-img" />
                </div>
                <div className="item">
                    <div className="title">
                        Title
                    </div>
                    <div className="content">
                        Portfolio title
                    </div>
                </div>
                <div className="item">
                    <div className="title">
                        Description
                    </div>
                    <div className="content">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error illum quibusdam rem ducimus similique sunt dignissimos alias incidunt id! Sapiente eum hic perspiciatis repudiandae neque possimus vero cupiditate rerum voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque, a atque ea, nisi fugiat magni voluptas illum in nobis veniam natus, autem tempora corrupti et nemo. Quos, dolor incidunt.
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile_portfolio;