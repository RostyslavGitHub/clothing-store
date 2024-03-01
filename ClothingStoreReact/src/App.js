import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './modules/components/Header';
import Footer from './modules/components/Footer';
import MainPage from './modules/MainPage';
import CatalogPage from './modules/CatalogPage';
import Page404 from './modules/Page404';
import CartPopup from './modules/components/CartPopup';
import "./styles.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/*" element={<Page404 />} />
            <Route path="/catalog" element={<CatalogPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
      <CartPopup />
    </>
  );
}

export default App;
