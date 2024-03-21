import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Content = ({contentData, contentTitle, isButtonThere, isNavThere }) => {
  const [catalogData, setCatalogData] = useState(contentData);
  const [activeButton, setActiveButton] = useState("All");
  const [checkedColors, setCheckedColors] = useState([]);
  const [selectedSize, setSelectedSize] = useState(0);

  const sectionButtons = [...new Set(contentData.map((item) => item.category))];

  const colorsButtons = contentData.reduce((colors, item) => {
    item.colors.forEach((color) => {
      if (!colors.includes(color)) {
        colors.push(color);
      }
    });
    return colors;
  }, []);

  const sizesOptions = ["All", "S", "M", "L", "XL", "2XL", "3XL"];

  useEffect(() => {
    filterItems(activeButton, checkedColors, selectedSize);
  }, [activeButton, checkedColors, selectedSize, contentData]);  

  const scrollToTop = () => {
    const c =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  const instantScrollToTop = () => {
    const c =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, 0);
    }
  }

  const filterItems = (section, colors, size) => {
    let filteredData = contentData;
    if (section !== "All") {
      filteredData = contentData.filter((item) => item.category === section);
    }
    if (section === "Sale") {
      filteredData = contentData.filter((item) => item.sale);
    }
    if (colors.length > 0) {
      filteredData = filteredData.filter((item) =>
        colors.some((color) => item.colors.includes(color))
      );
    }

    if (size > 0) {
      filteredData = filteredData.filter(
        (item) => item.sizes.includes(sizesOptions[size])
      );
    }
    
    setCatalogData(filteredData);
  };

  const handleColorToggle = (color) => {
    let newColors = [...checkedColors];
    if (newColors.includes(color)) {
      newColors = newColors.filter((c) => c !== color);
    } else {
      newColors.push(color);
    }
    setCheckedColors(newColors);
  };

  const isColorChecked = (color) => {
    return checkedColors.includes(color);
  };

  return (
  <div className="content">
    <div>
      <h2 className="content__title title">{contentTitle}</h2>

      {isNavThere && (
        <>
          <nav className="content__nav">
            <button
              className={
                activeButton === "All"
                  ? "content__nav-option active-content__nav-option"
                  : "content__nav-option"
              }
              onClick={() => setActiveButton("All")}
            >
              All
            </button>

            {sectionButtons.map((category, index) => (
              <button
                key={index}
                className={
                  activeButton === category
                    ? "content__nav-option active-content__nav-option"
                    : "content__nav-option"
                }
                onClick={() => setActiveButton(category)}
              >
                {category}
              </button>
            ))}

            <button
              className={
                activeButton === "Sale"
                  ? "content__nav-option active-content__nav-option"
                  : "content__nav-option"
              }
              onClick={() => setActiveButton("Sale")}
            >
              Sale
            </button>
          </nav>
          <div className="content__menu">
            <div className="color-row">
              <h3 className="option-title">Colors:</h3>
              <div className="color-checkbox-row">
                {colorsButtons.map((colorButton) => (
                  <div key={colorButton}>
                    <input
                      onChange={() => handleColorToggle(colorButton)}
                      checked={isColorChecked(colorButton)}
                      className="color__checkbox"
                      type="checkbox"
                      name="color"
                      id={colorButton}
                    />
                    <label
                      htmlFor={colorButton}
                      style={{ backgroundColor: colorButton }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="size-container">
              <h3 className="option-title">Size:</h3>
              <div className="size-dropdown">
                <button
                  className="button-right"
                  onClick={() =>
                    setSelectedSize((prevCount) =>
                      prevCount > 0 ? prevCount - 1 : sizesOptions.length - 1
                    )
                  }
                >
                  &lt;
                </button>
                {sizesOptions[selectedSize]}
                <button
                  className="button-left"
                  onClick={() =>
                    setSelectedSize((prevCount) =>
                      prevCount < sizesOptions.length - 1 ? prevCount + 1 : 0
                    )
                  }
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </>
      )}

<div className="content__row">
  {catalogData.length > 0 ? (
    catalogData.map((item, index) => (
      <Link key={index} to={`/catalog/${item.title}`} onClick={instantScrollToTop}>
        <div className="item">
          <img
            src={"../images/" + item.images[0][0]}
            alt={item.title}
            className="item__img"
          />
          <div className="item__title">{item.title}</div>
          <div className="price">
            {item.sale ? (
              <span>
                <span style={{ color: "#FF5733" }}>€{item.sale}</span>{" "}
                <span
                  style={{
                    textDecoration: "line-through",
                    fontSize: "1rem",
                  }}
                >
                  €{item.price}
                </span>
              </span>
            ) : (
              <span>€{item.price}</span>
            )}
            <img
              src="../images/shopping-cart.png"
              alt="Shopping cart"
              className="shopcart"
            />
          </div>
        </div>
      </Link>
    ))
  ) : (
    <div className="hero__title" style={{ marginTop: "60px" }}>
      No items found
    </div>
  )}
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
  
  
};

export default Content;
