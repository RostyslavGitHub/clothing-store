import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <>
            <header className="header">
                <div className="header__nav-main">
                <Link to="/" className="header__logo">
                    <div className="header__logo">clothing shop®</div>
                </Link>
                <nav className="header__nav-menu">
                    <Link to="/catalog" className="header__item">Catalog</Link>
                    <a className="header__item">Contacts</a>
                    <a className="header__item">Cart</a>
                </nav>
                </div>
                <div className="header__burger-icon">
                <div className="header__burger-line" />
                <div className="header__burger-line" />
                <div className="header__burger-line" />
                </div>
                <div className="burger-menu__container">
                <div className="burger-menu">
                    <div>
                    <Link to="/catalog" className="header__item">Catalog</Link>
                    <a className="header__item">Contacts</a>
                    <a className="header__item">Cart</a>
                    <div className="header__lang-settings">
                        <div className="header__lang">UA</div>
                        <div>&nbsp;/&nbsp;</div>
                        <div className="header__lang active--header__lang">ENG</div>
                    </div>
                    </div>
                    <div className="search-and-cart">
                    <div className="header__search">
                        <input type="text" className="header__search-bar" />
                        <img
                        src="images/search.png"
                        alt=""
                        className="header__search-bar-img"
                        height={25}
                        />
                    </div>
                    <a href="#" className="header__cart-logo">
                        <img
                        src="images/shopping-cart.png"
                        alt="Shopping cart link."
                        height={30}
                        />
                    </a>
                    </div>
                </div>
                </div>
                <div className="header__nav-extended">
                <div className="search-and-cart">
                    <div className="header__search">
                    <input type="text" className="header__search-bar" />
                    <img
                        src="images/search.png"
                        alt=""
                        className="header__search-bar-img"
                        height={25}
                    />
                    </div>
                    <a href="#" className="header__cart-logo">
                    <img
                        src="images/shopping-cart.png"
                        alt="Shopping cart link."
                        height={30}
                    />
                    </a>
                </div>
                <div className="header__lang-settings">
                    <div className="header__lang">UA</div>
                    <div>&nbsp;/&nbsp;</div>
                    <div className="header__lang active--header__lang">ENG</div>
                </div>
                </div>
            </header>
            <div style={{ height: 100 }} />
        </>

    )
}

export default Header;