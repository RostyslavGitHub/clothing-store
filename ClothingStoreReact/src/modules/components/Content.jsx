import React, { useState } from "react";

const contentData = [
    {
        title: 'T-shirt',
        category: 'T-shirts & Tops',
        img: 'item-img.avif',
        price: '111,00',
        sale: true,
        id: new Date().getTime() + Math.random(1, 1000000000),
    },
    {
        title: 'T-shirt',
        category: 'T-shirts & Tops',
        img: 'item-img.avif',
        price: '111,00',
        sale: false,
        id: new Date().getTime() + Math.random(1, 1000000000), 
    },
    {
        title: 'T-shirt',
        category: 'Knitwear',
        img: 'item-img.avif',
        price: '111,00',
        sale: true,
        id: new Date().getTime() + Math.random(1, 1000000000),
    },
];

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

const Content = ({contentTitle, isButtonThere, isNavThere}) => {
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
                     <nav className="content__nav">
                     <button
                         className={activeButton === 'All' ? 'content__nav-option active-content__nav-option' : 'content__nav-option'}
                         onClick={()=>{setCatalogData(contentData); setActiveButton('All');}}
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
                             setCatalogData(contentData.filter(item => item.sale === true));
                             setActiveButton('Sale');
                         }}
                     >
                         Sale
                     </button>
                 </nav>
                )}

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
                                €{item.price}{" "}
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
                    <a href="#" className="button">
                        View All
                    </a>
                </div>
            )}
        </div>
    );
}

export default Content;
