import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarsBelt from './components/StarsBelt'
import Content from './components/Content'
import Reviews from "./components/Reviews";

const CatalogItemPage = ({contentData, addToTheCart, specifyClororAndSize}) => {
    const [checkedColor, setCheckedColor] = useState();
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState(0);
    const {catalogItemTitle} = useParams();
    
    const selectedItem = contentData.filter((item) => item.title === catalogItemTitle);

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
    
      useEffect(()=>{
        setCheckedColor(colorsButtons[0])
      }, [])

    const handleColorToggle = (color) => {
        setCheckedColor(color);
        setSelectedColor(colorsButtons.indexOf(color))
      };
    
      const isColorChecked = (color) => {
        return checkedColor === color;
      };
    
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
                        <span 
                          className="fullitem-price price" 
                          style={{
                            display: "inline-block" 
                          }}>
                            €{selectedItem[0].sale}
                        </span>
                        {" "}
                        <span
                          style={{
                            textDecoration: "line-through",
                            fontSize: "1rem",
                          }}
                        >
                          €{selectedItem[0].price}
                        </span>
                      </span>
                    ) : (
                      <div className="fullitem-price price">€{selectedItem[0].price}</div> 
                    )}

                <div className="color-row">
                <h3 className="option-title">Colors:</h3>
                <div className="color-checkbox-row">
                  {colorsButtons.map((colorButton) => (
                    <div key={colorButton}>
                      <input
                        onChange={() => handleColorToggle(colorButton)}
                        checked={isColorChecked(colorButton)}
                        className="color__checkbox"
                        type="radio"
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
                <div>
                <button className="button" onClick={()=>{addToTheCart(selectedItem[0]); specifyClororAndSize(colorsButtons[selectedColor], selectedSize) }}>Add to cart</button>
                <div className="accordion" 
                onClick={()=>{
                  const fullItemDescription = document.getElementById('full-item__description')
                  fullItemDescription.classList.toggle('active-accordion')
                }}>
                    <div className="accordion__title">Product description</div>
                    <div className="accordion__body active-accordion" id="full-item__description">
                        {selectedItem[0].description.map((line, index) => <span key={index}>{line} <br /></span>)}                  
                    </div>
                </div>
                <div className="accordion"
                onClick={()=>{
                  const fullItemSizesDescription = document.getElementById('full-item__sizes-descroption')
                  fullItemSizesDescription.classList.toggle('active-accordion')
                }}>
                    <div className="accordion__title">Dimensions</div>
                    <div className="accordion__body" id="full-item__sizes-descroption">
                      S:	34-36	20 x 27 ½ in. (43 x 70 cm.) <br />
                      M:	38-40	23 ½ x 28 in. (50 x 76 cm.) <br />
                      L:	42-44	25 x 30 ½ in. (56 x 77 cm.) <br />
                      XL:	46-48	26 x 30 ½ in. (58 x 80 cm.) <br />
                      2XL:	50-52	29 x 31 in. (64 x 84 cm.) <br />
                      3XL:	54-56	30 x 31 ½ in. (71 x 88 cm.)
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        
        <StarsBelt />
        
        <Reviews selectedItem={selectedItem}/>

        <Content contentData={contentData.filter(item => item.bestseller === true && item.id !== selectedItem[0].id).slice(-4)} contentTitle={'Recommendations'} isButtonThere={false} isNavThere={false}/>
        </>
    )
}

export default CatalogItemPage;