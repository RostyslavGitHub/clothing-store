import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./modules/components/Header";
import Footer from "./modules/components/Footer";
import MainPage from "./modules/MainPage";
import CatalogPage from "./modules/CatalogPage";
import CatalogItemPage from "./modules/CatalogItem";
import Page404 from "./modules/Page404";
import CartPopup from "./modules/components/CartPopup";
import GoUp from "./modules/components/GoUp";
import { contentData } from "./data";
import "./styles.css";

function App() {
  const [filteredInput, setFilteredInput] = useState("");
  const [filteredItems, setFilteredItems] = useState(contentData);
  const [cartContentData, setCartContentData] = useState([]);
  const [itemColorAndSize, setItemColorAndSize] = useState([])
  const contact = useRef(null);

  useEffect(() => {
    if (filteredInput.trim() !== "") {
      const filtered = contentData.filter((item) =>
        item.title.toLowerCase().includes(filteredInput.toLowerCase()),
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(contentData);
    }
  }, [filteredInput]);

  const addToTheCart = (item) =>{
    setCartContentData([...cartContentData, item]);
  }

  const specifyClororAndSize = (color, size) => {
    const sizesOptions = ["S", "M", "L", "XL", "2XL", "3XL"];
    setItemColorAndSize([color, sizesOptions[size]])
  }
  
  const decreaseItemsCount = (itemId) => {
    let updatedCartContent = [...cartContentData];
    const itemIndex = updatedCartContent.findIndex((item) => item.id === itemId);
  
      if (itemIndex !== -1) {
        if (updatedCartContent[itemIndex].quantity > 1) {
          updatedCartContent[itemIndex].quantity -= 1;
        } else {
          updatedCartContent.splice(itemIndex, 1);
        }
      } 
      
      setCartContentData(updatedCartContent);
  };

  return (
    <BrowserRouter>
    
      <div className="wrapper">

        <Header 
          contact={contact} 
          setFilteredInput={setFilteredInput}
          cartContentData={cartContentData} 
        />

        <Routes>
          <Route
            path="/"
            element={
              <MainPage 
                contentData={contentData} 
                contact={contact} 
                addToTheCart={addToTheCart}
              />
            }
          />

          <Route
            path="/catalog"
            element={
              <CatalogPage 
                key={JSON.stringify(filteredItems)} 
                contentData={filteredItems} 
                addToTheCart={addToTheCart}
              />
            }
          />

          <Route 
            path="/catalog/:catalogItemTitle" 
            element={
              <CatalogItemPage 
                contentData={contentData} 
                addToTheCart={addToTheCart}
                specifyClororAndSize={specifyClororAndSize}
                
              />
            }
          />

          <Route 
            path="*" 
            element={<Page404 />} 
          />
        </Routes>

      </div>

      <Footer />

      <GoUp />

      <CartPopup 
        cartContentData={cartContentData} 
        setCartContentData={setCartContentData}
        decreaseItemsCount={decreaseItemsCount}
        addToTheCart={addToTheCart}
        itemColorAndSize={itemColorAndSize}/>
        
    </BrowserRouter>
  );
}

export default App;
