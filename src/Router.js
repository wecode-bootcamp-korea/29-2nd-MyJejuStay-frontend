import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Modal from 'react-modal';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import SignUp from './pages/Members/SignUp';
import Login from './pages/Members/Login';
import App from './pages/KaKao/App';
import Auth from './pages/KaKao/Auth';
import ProductList from './pages/ProductList/ProductList';
import MyPage from './pages/MyPage/MyPage';
import DetailPage from './pages/DetailPage/DetailPage';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<App />} />
        <Route path="/oauth/kakao/callback" element={<Auth />} />
        <Route path="/detail/:accommodationId" element={<DetailPage />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/mypage/*" element={<MyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
Modal.setAppElement('#root');
export default Router;
