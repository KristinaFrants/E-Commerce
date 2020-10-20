import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <nav className="header bg-dark">
            {/* Logo on the left */}
            <Link to="/">
        <img className= "header__logo m-1" src="https://library.kissclipart.com/20180921/pre/kissclipart-ecommerce-website-icon-png-clipart-e-commerce-webs-c27adca43148f9e8.png"/>
        </Link>
            {/* Search box */}
           <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <FontAwesomeIcon icon={faSearch} className="header__searchIcon"/>
            </div>
            {/* Links */}
            {/* Basket Icon */}
        </nav>
    )
}

export default Header
