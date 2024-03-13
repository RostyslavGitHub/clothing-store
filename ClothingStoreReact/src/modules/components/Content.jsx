import React, { useState } from "react";
import { Link } from "react-router-dom";

const Content = ({ contentData, contentTitle, isButtonThere, isNavThere }) => {
  const [catalogData, setCatalogData] = useState(contentData);
  const [activeButton, setActiveButton] = useState('All');
  const [checkedColors, setCheckedColors] = useState([]);

  const sectionButtons = [...new Set(contentData.map(item => item.category))];

  const colorsButtons = contentData.reduce((colors, item) => {
    item.colors.forEach(color => {
      if (!colors.includes(color)) {
        colors.push(color);
      }
    });
    return colors;
  }, []);

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  }

  const filterItemsByCategory = (section) => {
    let filteredItems = [];

    if (section === 'All') {
      filteredItems = contentData;
    } else if (section === 'Sale') {
      filteredItems = contentData.filter(item => item.sale);
    } else {
      filteredItems = contentData.filter(item => item.category === section);
    }

    setActiveButton(section);
    setCatalogData(filteredItems);
  }

  const filterItemsByColor = (color) => {
    let filteredColors = [...checkedColors];
    if (filteredColors.includes(color)) {
      filteredColors = filteredColors.filter(c => c !== color);
    } else {
      filteredColors.push(color);
    }
  
    setCheckedColors(filteredColors);
  
    let filteredItems = [];
    
    if (filteredColors.length === 0) {
      if (activeButton === 'All') {
        filteredItems = contentData;
      } else if (activeButton === 'Sale') {
        filteredItems = contentData.filter(item => item.sale);
      } else {
        filteredItems = contentData.filter(item => item.category === activeButton);
      }
    } else {
      if (activeButton === 'All') {
        filteredItems = contentData.filter(item =>
          filteredColors.some(color => item.colors.includes(color))
        );
      } else {
        if (activeButton === 'Sale') {
          filteredItems = contentData.filter(item =>
            item.sale && filteredColors.some(color => item.colors.includes(color))
          );
        } else {
          filteredItems = contentData.filter(item =>
            item.category === activeButton && filteredColors.some(color => item.colors.includes(color))
          );
        }
      }
    }
  
    setCatalogData(filteredItems);
  }
  
  const isColorChecked = (color) => {
    return checkedColors.includes(color);
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
                onClick={() => filterItemsByCategory('All')}
              >
                All
              </button>

              {sectionButtons.map((category, index) => (
                <button
                  key={index}
                  className={activeButton === category ? 'content__nav-option active-content__nav-option' : 'content__nav-option'}
                  onClick={() => filterItemsByCategory(category)}
                >
                  {category}
                </button>
              ))}

              <button
                className={activeButton === 'Sale' ? 'content__nav-option active-content__nav-option' : 'content__nav-option'}
                onClick={() => filterItemsByCategory('Sale')}
              >
                Sale
              </button>
            </nav>
            <div className="content__menu">
              <div className="color-row">
                <h3 className="option-title">Colors:</h3>
                <div className="color-checkbox-row">
                  {colorsButtons.map(colorButton => (
                    <div key={colorButton}>
                      <input
                        onChange={() => filterItemsByColor(colorButton)}
                        checked={isColorChecked(colorButton)}
                        className="color__checkbox"
                        type="checkbox"
                        name="color"
                        id={colorButton}
                      />
                      <label htmlFor={colorButton} style={{ backgroundColor: colorButton }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="size-container">
                <h3 className="option-title">Size:</h3>
                <div className="size-dropdown">All</div>
              </div>
            </div>

          </>
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
                {item.sale ? (
                  <span>
                    <span style={{ color: '#FF5733' }}>€{item.sale}</span>{" "}
                    <span style={{ textDecoration: 'line-through', fontSize: '1rem' }}>€{item.price}</span>
                  </span>
                ) : (
                  <span>€{item.price}</span>
                )}
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
