import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './modules/components/Header';
import Footer from './modules/components/Footer';
import MainPage from './modules/MainPage';
import CatalogPage from './modules/CatalogPage';
import Page404 from './modules/Page404';
import CartPopup from './modules/components/CartPopup';
import GoUp from './modules/components/GoUp';
import { contentData } from './data';
import './styles.css';

function App() {
  const [filteredInput, setFilteredInput] = useState('');
  const [filteredItems, setFilteredItems] = useState(contentData);
  const contact = useRef(null);

  useEffect(() => {
    if (filteredInput.trim() !== '') {
      const filtered = contentData.filter((item) =>
        item.title.toLowerCase().includes(filteredInput.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(contentData); 
    }
  }, [filteredInput]);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header contact={contact} setFilteredInput={setFilteredInput}/>
        <Routes>
          <Route path="/" element={<MainPage contentData={contentData} contact={contact} />} />
          <Route
            path="/catalog"
            element={<CatalogPage key={JSON.stringify(filteredItems)} contentData={filteredItems} />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
      <Footer />
      <GoUp />
      <CartPopup />
    </BrowserRouter>
  );
}

export default App;
