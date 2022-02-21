import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Modal from 'react-modal';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';
import DetailPageHeader from './pages/DetailPage/DetailPageHeader/DetailPageHeader';
import SignUp from './pages/SignUp/SignUp';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/detail" element={<DetailPageHeader />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

Modal.setAppElement('#root');

export default Router;
