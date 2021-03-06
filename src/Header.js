import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBasket, faStoreAlt } from '@fortawesome/free-solid-svg-icons';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase"

function Header() {
const [{ basket, user }, dispatch] = useStateValue();

const handleAuthentication = () => {
    if (user) {
        auth.signOut();
    }
}

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
                <Link to={!user && "/login"} className="header__link">
                <div onClick={handleAuthentication} className="header__option">
                    <span className="header__optionLineOne">Hello, {!user ? 'Guest' : user.email}</span>
                    <span className="header__optionLineTwo">{user ? 
                    'Sing Out' : 'Sing In'}</span>
                </div>
                </Link>

                <Link to="/orders" className="header__link">
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
                        header__basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>
            {/* Basket Icon */}
        </nav>
    )
}

export default Header
