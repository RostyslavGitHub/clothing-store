import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './modules/components/Header';
import Footer from './modules/components/Footer';
import MainPage from './modules/MainPage';
import CatalogPage from './modules/CatalogPage';
import Page404 from './modules/Page404';
import CartPopup from './modules/components/CartPopup';
import "./styles.css";

function App() {
  const contact = useRef(null);
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header contact={contact}/>
        <Routes>
          <Route path="/" element={<MainPage contact={contact}/>} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
      <Footer />
      <CartPopup />
    </BrowserRouter>
  );
}

export default App;