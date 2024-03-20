import { Link, useNavigate } from "react-router-dom";

const Header = ({ contact, setFilteredInput, cartContentData }) => {
  const navigate = useNavigate();

  const closeBurgerMenu = () => {
    const header = document.querySelector(".header");
    header.classList.remove("active--menu");
    const body = document.querySelector("body");
    body.classList.remove("overflowHidden");
  };

  const toggleBurgerMenu = () => {
    const header = document.querySelector(".header");
    header.classList.toggle("active--menu");
    const body = document.querySelector("body");
    body.classList.toggle("overflowHidden");
  };

  const goToContacts = () => {
    navigate("/");
    setTimeout(() => {
      contact.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setTimeout(() => {
      closeBurgerMenu();
    }, 200);
  };

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0,0);
    }
  };

  const filterItems = (e) => {
    navigate("/catalog");
    scrollToTop();
    setFilteredInput(e.target.value);
  };

  const addCart = () => {
    const cartPopup = document.querySelector(".cart-container");
    cartPopup.classList.add("active--cart");
    const body = document.querySelector("body");
    body.classList.add("overflowHidden");
  };

  const removeCart = () => {
    const cartPopup = document.querySelector(".cart-container");
    cartPopup.classList.remove("active--cart");
    const body = document.querySelector("body");
    body.classList.remove("overflowHidden");
  };

  return (
    <>
      <header className="header">
        <div className="header__nav-main">
          <Link
            to="/"
            onClick={() => {
              closeBurgerMenu();
              removeCart();
            }}
          >
            <div className="header__logo">clothing shop®</div>
          </Link>

          <nav className="header__nav-menu">
            <Link
              to="/catalog"
              onClick={() => {
                scrollToTop();
                closeBurgerMenu();
                removeCart();
              }}
              className="header__item"
            >
              Catalog
            </Link>

            <Link
              to="/"
              onClick={() => {
                goToContacts();
                removeCart();
              }}
              className="header__item"
            >
              Contacts
            </Link>

            <span
              onClick={() => {
                closeBurgerMenu();
                addCart();
              }}
              className="header__item"
            >
              Cart
            </span>
          </nav>
        </div>

        <div onClick={toggleBurgerMenu} className="header__burger-icon">
          <div className="header__burger-line" />
          <div className="header__burger-line" />
          <div className="header__burger-line" />
        </div>

        <div className="burger-menu__container">
          <div className="burger-menu">
            <div>
              <Link
                to="/catalog"
                onClick={() => {
                  scrollToTop();
                  closeBurgerMenu();
                }}
                className="header__item"
              >
                Catalog
              </Link>

              <Link to="/" onClick={goToContacts} className="header__item">
                Contacts
              </Link>

              <span onClick={addCart} className="header__item">
                Cart
              </span>

              <div className="header__lang-settings">
                <div className="header__lang">UA</div>
                <div>&nbsp;/&nbsp;</div>
                <div className="header__lang active--header__lang">ENG</div>
              </div>
            </div>

            <div className="search-and-cart">
              <div className="header__search">
                <input type="text" className="header__search-bar" placeholder="Search"/>
                <img
                  src="images/search.png"
                  alt=""
                  className="header__search-bar-img"
                  height={25}
                />
              </div>
              <span className="header__cart-logo" onClick={addCart}>
                <img
                  
                  src="images/shopping-cart.png"
                  alt="Shopping cart link."
                  height={30}
                />
              </span>
            </div>
          </div>
        </div>

        <div className="header__nav-extended">
          <div className="search-and-cart">
            <div className="header__search">
              <input
                onChange={(e) => {
                  filterItems(e);
                  removeCart();
                }}
                type="text"
                placeholder="Search"
                className="header__search-bar"
              />
              <img
                src="../images/search.png"
                alt=""
                className="header__search-bar-img"
                height={25}
                onClick={() => {
                  navigate("/catalog");
                  closeBurgerMenu();
                  scrollToTop();
                  removeCart();
                }}
              />
            </div>
            <span className="header__cart-logo" onClick={() => {
                  closeBurgerMenu();
                  addCart();
                }}>
              <img
                src="../images/shopping-cart.png"
                alt="Shopping cart link."
                height={30}
              />
              <div className="count">{cartContentData.length}</div>
            </span>
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
  );
};

export default Header;
