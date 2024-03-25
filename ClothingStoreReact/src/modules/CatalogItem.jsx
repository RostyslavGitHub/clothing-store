import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StarsBelt from './components/StarsBelt'
import Content from './components/Content'
import Reviews from "./components/Reviews";

const CatalogItemPage = ({contentData, addToTheCart}) => {
    const { catalogItemTitle } = useParams();
    const navigate = useNavigate()
    const [checkedColor, setCheckedColor] = useState();
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState(0);
    const [selectedItem, setSelectedItem] = useState(contentData.filter((item) => item.title === catalogItemTitle))

    useEffect(() => {
        const newItem = contentData.find((item) => item.title === catalogItemTitle);
        if (newItem) {
          setSelectedItem([newItem]);
          setCheckedColor(newItem.colors[0]);
          setSelectedColor(0);
          setSelectedSize(0);
        } else {
          navigate("/page404");
        }
      }, [catalogItemTitle, contentData, navigate]);

    const sizesOptions = selectedItem.reduce((availableSizes, item) => {
      item.sizes.forEach(size => {
        if (!availableSizes.includes(size)) {
          availableSizes.push(size);
        }
      });
      return availableSizes;
    }, []);
    
    const colorsButtons = selectedItem.reduce((colors, item) => {
        item.colors.forEach((color) => {
          if (!colors.includes(color)) {
            colors.push(color);
          }
        });
        return colors;
      }, []);

    const handleColorToggle = (color, index) => {
        setCheckedColor(color);
        setSelectedColor(index);
    
        setSelectedItem(prevItems => {
            const updatedItems = prevItems.map(item => {
                if (item.title === catalogItemTitle) {
                    const newId = getColorId(item, colorsButtons[index]);
                    const updatedColorIdMap = {
                        ...item.colorIdMap,
                        [colorsButtons[index]]: {
                            id: newId,
                            count: (item.colorIdMap[colorsButtons[index]] || { count: 0 }).count + 1
                        }
                    };
                    return {
                        ...item,
                        choosenColor: index,
                        id: newId,
                        colorIdMap: updatedColorIdMap,
                        choosenSize: sizesOptions[selectedSize], 
                    };
                }
                return item;
            });
            return updatedItems;
        });
    };
    
    const handleSizeToggle = (sizeIndex) => {
        setSelectedSize(sizeIndex);
    
        setSelectedItem(prevItems => {
            const updatedItems = prevItems.map(item => {
                if (item.title === catalogItemTitle) {
                    const newId = getColorId(item, colorsButtons[selectedColor]);
                    const updatedColorIdMap = {
                        ...item.colorIdMap,
                        [colorsButtons[selectedColor]]: {
                            id: newId,
                            count: (item.colorIdMap[colorsButtons[selectedColor]] || { count: 0 }).count + 1
                        }
                    };
                    return {
                        ...item,
                        choosenSize: sizesOptions[sizeIndex],
                        id: newId,
                        colorIdMap: updatedColorIdMap,
                    };
                }
                return item;
            });
            return updatedItems;
        });
    };

    const getColorId = (item, color) => {
        const colorIdMap = item.colorIdMap || {};
        if (colorIdMap[color]) {
            return colorIdMap[color].id;
        } else {
            const newId = generateUniqueID();
            colorIdMap[color] = { id: newId, count: 0 };
            return newId;
        }
    };

    const generateUniqueID = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };
    
    const isColorChecked = (color) => {
        return checkedColor === color;
    };    

    if (selectedItem.length === 0) {
        return null;
      }
    
    return (
        <>
            <div className="full-item-container">
                <div className="full-item">
                    <div className="full-item__images">
                        <img src={"../images/" + selectedItem[0].images[selectedColor][0]} alt="" className="full-item__img" />
                        <img src={"../images/" + selectedItem[0].images[selectedColor][1]} alt="" className="full-item__img" />
                        <img src={"../images/" + selectedItem[0].images[selectedColor][2]} alt="" className="full-item__img" />
                    </div>
                    <div className="full-item__info">
                        <div>
                            <h2 className="full-item__title">{selectedItem[0].title}</h2>
                            {selectedItem[0].sale ? (
                                <span>
                                    <span className="fullitem-price price">€{selectedItem[0].sale}</span>
                                    {" "}
                                    <span style={{ textDecoration: "line-through", fontSize: "1rem" }}>
                                        €{selectedItem[0].price}
                                    </span>
                                </span>
                            ) : (
                                <div className="fullitem-price price">€{selectedItem[0].price}</div>
                            )}
                            <div className="color-row">
                                <h3 className="option-title">Colors:</h3>
                                <div className="color-checkbox-row">
                                {colorsButtons.map((colorButton, index) => (
                                    <div key={colorButton}>
                                        <input
                                            onChange={() => handleColorToggle(colorButton, index)}
                                            checked={isColorChecked(colorButton)}
                                            className="color__checkbox"
                                            type="radio"
                                            name="color"
                                            id={colorButton}
                                        />
                                        <label
                                            htmlFor={colorButton}
                                            style={{ backgroundColor: colorButton }}
                                        >
                                        </label>
                                    </div>
                                ))}

                                </div>
                            </div>

                            <div className="size-container">
                                <h3 className="option-title">Size:</h3>
                                <div className="size-dropdown">
                                    <button
                                        className="button-right"
                                        onClick={() =>  handleSizeToggle(selectedSize > 0 ? selectedSize - 1 : sizesOptions.length - 1)}
                                    >
                                        &lt;
                                    </button>
                                    {sizesOptions[selectedSize]}
                                    <button
                                        className="button-left"
                                        onClick={() => handleSizeToggle(selectedSize < sizesOptions.length - 1 ? selectedSize + 1 : 0)}
                                    >
                                        &gt;
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="button" onClick={() => {addToTheCart(selectedItem[0]); }}>Add to cart</button>
                            <div className="accordion" onClick={() => {
                                const fullItemDescription = document.getElementById('full-item__description');
                                fullItemDescription.classList.toggle('active-accordion');
                            }}>
                                <div className="accordion__title">Product description</div>
                                <div className="accordion__body active-accordion" id="full-item__description">
                                    {selectedItem[0].description.map((line, index) => <span key={index}>{line} <br /></span>)}
                                </div>
                            </div>
                            <div className="accordion" onClick={() => {
                                const fullItemSizesDescription = document.getElementById('full-item__sizes-descroption');
                                fullItemSizesDescription.classList.toggle('active-accordion');
                            }}>
                                <div className="accordion__title">Dimensions</div>
                                <div className="accordion__body" id="full-item__sizes-descroption">
                                    S: 34-36 20 x 27 ½ in. (43 x 70 cm.) <br />
                                    M: 38-40 23 ½ x 28 in. (50 x 76 cm.) <br />
                                    L: 42-44 25 x 30 ½ in. (56 x 77 cm.) <br />
                                    XL: 46-48 26 x 30 ½ in. (58 x 80 cm.) <br />
                                    2XL: 50-52 29 x 31 in. (64 x 84 cm.) <br />
                                    3XL: 54-56 30 x 31 ½ in. (71 x 88 cm.)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <StarsBelt />

            <Reviews selectedItem={selectedItem} key={selectedItem[0].id}/>

            <Content contentData={contentData.filter(item => item.bestseller === true && item.id !== selectedItem[0].id).slice(-4)} contentTitle={'Recommendations'} isButtonThere={false} isNavThere={false}/>
        </>
    );
}

export default CatalogItemPage;
