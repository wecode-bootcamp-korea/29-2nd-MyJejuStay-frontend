import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';
import DetailPageHeader from './pages/DetailPage/DetailPageHeader/DetailPageHeader';
import MyPage from './pages/MyPage/MyPage';
import DetailPageReservation from './pages/DetailPage/DetailPageReservation/Reservation';
import SignUp from './pages/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import DetailPageInfo from './pages/DetailPage/DetailPageInfo/DetailPageInfo';
import DetailPagePhoto from './pages/DetailPage/DetailPagePhoto/DetailPagePhoto';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/detail" element={<DetailPageHeader />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage/*" element={<MyPage />} />
        <Route path="/detail-info" element={<DetailPageInfo />} />
        <Route path="/accommodations/:id" element={<DetailPageInfo />} />
        <Route path="/detail-photo" element={<DetailPagePhoto />} />
        <Route path="/reservation" element={<DetailPageReservation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
