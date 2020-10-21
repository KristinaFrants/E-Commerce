import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img  className="home__image" src="https://image.freepik.com/free-vector/blue-technology-glowing-lines-background_1017-17493.jpg"/>
            
            <div className="home__row">
            <Product
                title="Your product description goes here"
                price={29.99}
                image="https://image.freepik.com/free-photo/top-view-body-butter-recipient_23-2148542969.jpg"
                rating={5}
                />
                <Product
                title="Your product description goes here"
                price={19.99}
                image="https://image.freepik.com/free-photo/close-up-body-butter-recipient_23-2148542975.jpg"
                rating={4}
                                />
            </div>

            <div className="home__row">
                {/* Products row2 */}
                <Product
                title="Your product description goes here"
                price={25.99}
                image="https://image.freepik.com/free-photo/close-up-body-butter-bottle_23-2148543024.jpg"
                rating={3}
                />
                <Product
                title="Your product description goes here"
                price={17.29}
                image="https://image.freepik.com/free-photo/rose-oils-spa-treatment-arrangement-cosmetics_23-2148645500.jpg"
                rating={4}
                />
                <Product   
                title="Your product description goes here"
                price={18.55}
                image="https://image.freepik.com/free-photo/lavender-flowers-bottle-petals-with-perfume_23-2148645608.jpg"
                rating={4}
                />
            </div>

            <div className="home__row">
                {/* Products row3 */}
                <Product
                title="Your product description goes here"
                price={28.57}
                image="https://image.freepik.com/free-photo/natural-cosmetics_23-2148574903.jpg"
                rating={5}
                />
            </div>

            </div>
        </div>
    )
}

export default Home
