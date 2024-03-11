import React, { useState} from "react";
import { Link } from "react-router-dom";

const sectionButtons = [
    {
        title: 'T-shirts & Tops',
    },
    {
        title: 'Hoodies',
    },
    {
        title: 'Knitwear',
    },
    {
        title: 'Accessories',
    },
]

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
}

const Content = ({contentData, contentTitle, isButtonThere, isNavThere}) => {
    const [catalogData, setCatalogData] = useState(contentData);
    const [activeButton, setActiveButton] = useState('All');

    const filterCatalogItems = (section) => {
        const filteredItems = contentData.filter(item => item.category === section);
        setCatalogData(filteredItems);
        setActiveButton(section); 
    }

    return (
        <div className="content">
            <div>
                <h2 className="content__title title">{contentTitle}</h2>

                {isNavThere && (
                    <>
                    <nav className="content__nav">
                     <button
                         className={activeButton === 'All' ? 'content__nav-option active-content__nav-option' : 'content__nav-option'}
                         onClick={()=>{
                            setCatalogData(contentData); 
                            setActiveButton('All');
                        }}
                     >
                         All
                     </button>
 
                     {sectionButtons.map(button => <button key={button.title}
                         className={activeButton === button.title ? 'content__nav-option active-content__nav-option' : 'content__nav-option'}
                         onClick={() => filterCatalogItems(button.title)}
                     >
                         {button.title}
                     </button>)}
 
                     <button
                         className={activeButton === 'Sale' ? 'content__nav-option active-content__nav-option' : 'content__nav-option'}
                         onClick={() => {
                             setCatalogData(contentData.filter(item => item.sale));
                             setActiveButton('Sale');
                         }}
                     >
                         Sale
                     </button>
                 </nav>
                 <div className="content__menu">
                    <div className="color-row">
                        <h3 className="option-title">Colors:</h3>
                        <div className="color-checkbox-row">
                        <input
                            className="color__checkbox"
                            type="checkbox"
                            name="color"
                            id="black"
                        />
                        <label htmlFor="black" style={{ backgroundColor: "black" }} />
                        <input
                            className="color__checkbox"
                            type="checkbox"
                            name="color"
                            id="purple"
                        />
                        <label htmlFor="purple" style={{ backgroundColor: "purple" }} />
                        <input
                            className="color__checkbox"
                            type="checkbox"
                            name="color"
                            id="white"
                        />
                        <label htmlFor="white" style={{ backgroundColor: "white" }} />
                        </div>
                    </div>
                    <div className="size-container">
                        <h3 className="option-title">Size:</h3>
                        <div className="size-dropdown">All</div>
                    </div>
                    </div>

            </>)}

                <div className="content__row">
                    {catalogData.map(item => (
                        <div key={item.id} className="item">
                            <img
                                src={"images/" + item.img}
                                alt={item.title}
                                className="item__img"
                            />
                            <div className="item__title">{item.title}</div>
                            <div className="price">
                                {item.sale ? <span><span style={{color: '#FF5733'}}>€{item.sale}</span> <span style={{textDecoration: 'line-through', fontSize: '1rem'}}>€{item.price}</span></span> : <span>€{item.price}</span>}
                                <img
                                    src="images/shopping-cart.png"
                                    alt="Shopping cart"
                                    className="shopcart"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isButtonThere && (
                <div className="button-container">
                    <Link to="/catalog" onClick={scrollToTop} className="button">
                        View All
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Content;
