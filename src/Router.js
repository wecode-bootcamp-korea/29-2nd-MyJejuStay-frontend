import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Modal from 'react-modal';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';
import MyPage from './pages/MyPage/MyPage';
import Footer from './components/Footer/Footer';
import App from './pages/KaKao/App';
import Auth from './pages/KaKao/Auth';
import DetailPage from './pages/DetailPage/DetailPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/app" element={<App />} />
        <Route path="/oauth/kakao/callback" element={<Auth />} />
        <Route path="/mypage/*" element={<MyPage />} />
        <Route path="/detail/:accommodationId" element={<DetailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
Modal.setAppElement('#root');
export default Router;
