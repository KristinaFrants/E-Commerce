import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBasket, faStoreAlt } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <nav className="header bg-dark">

        {/* Logo on the left */}
        <Link to="/">
        <FontAwesomeIcon icon={faStoreAlt} className= "header__logo m-1"/>
            {/* <img className= "header__logo m-1" src="https://library.kissclipart.com/20180921/pre/kissclipart-ecommerce-website-icon-png-clipart-e-commerce-webs-c27adca43148f9e8.png"/> */}
        </Link>

         {/* Search box */}
           <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <FontAwesomeIcon icon={faSearch} className="header__searchIcon"/>
            </div>

            {/* Links */}
            <div className="header__nav">
                <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Enter</span>
                    <span className="header__optionLineTwo">Sing In</span>
                </div>
                </Link>

                <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">Orders</span>
                </div>
                </Link>

                <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                </Link>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        {/* Shopping basket icon */}
                        <FontAwesomeIcon icon={faShoppingBasket}/>
                        {/* Number of items in the basket */}
                        <span className="header__optionLineTwo 
                        header__basketCount">0</span>
                    </div>
                </Link>

            </div>
            {/* Basket Icon */}
        </nav>
    )
}

export default Header
