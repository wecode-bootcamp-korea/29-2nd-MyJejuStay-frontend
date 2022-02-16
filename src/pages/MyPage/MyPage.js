<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

function MyPage() {
  return <div>MyPage</div>;
}

=======
import React, { useState, useEffect } from 'react';
=======
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
>>>>>>> 3140425 (Add: MyPage 완성)
import MyPageSubMenu from './MyPageSubMenu';
import MyPageReservation from './MyPageReservation';
import MyPagePast from './MyPagePast';
import MyPageCancel from './MyPageCancel';
import MyPageCoupon from './MyPageCoupon';
import MyPageLike from './MyPageLike';
import { MyPageMenuData } from './MyPageData';

// import { api } from '../../config';
import styled from 'styled-components';

function MyPage() {
  return (
    <MyPageSection>
      <MyPageHeader>MY PAGE</MyPageHeader>
      <MyPageSubHeader>마이 페이지</MyPageSubHeader>
      <GreetingDiv>스테이님 반가워요!</GreetingDiv>
      <TheNumberOfTrips>
        마이제주스테이와 함께 1번의 여행을 했어요.
      </TheNumberOfTrips>

      <MyPageInformation>
        <MyPageMenu>
          {MyPageMenuData &&
            MyPageMenuData.map(data => {
              return (
                <MyPageSubMenu
                  key={data.id}
                  header={data.header}
                  list={data.list}
                  link={data.link}
                />
              );
            })}
        </MyPageMenu>

        <Routes>
          <Route path="/" element={<MyPageReservation />} />
          <Route path="/past" element={<MyPagePast />} />
          <Route path="/cancel" element={<MyPageCancel />} />
          <Route path="/like" element={<MyPageLike />} />
          <Route path="/coupon" element={<MyPageCoupon />} />
        </Routes>
      </MyPageInformation>
    </MyPageSection>
  );
}

const MyPageSection = styled.section`
  margin: 120px 0px 120px 0px;
`;
const MyPageHeader = styled.header`
  text-align: center;
  font-weight: 700;
  line-height: 1;
  font-size: 18px;
  letter-spacing: 14px;
  text-indent: 14px;
`;

const MyPageSubHeader = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const GreetingDiv = styled.div`
  text-align: center;
  margin-top: 80px;
  font-size: 35px;
`;

const TheNumberOfTrips = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 70px;
  font-size: 17px;
  color: black;
`;
const MyPageInformation = styled.div`
  display: flex;
  border-top: 3px solid black;
  padding-top: 60px;
  margin: auto;
  width: 1060px;
`;

const MyPageMenu = styled.div`
  margin-left: 20px;
  width: 220px;
  border-right: 1px solid lightgray;
`;

<<<<<<< HEAD
const MyPageDetailSection = styled.div`
  width: 75%;
`;

const MyPageDetailHeader = styled.div`
  display: block;
  margin: auto;
  width: 80%;
  font-size: 19px;
  color: black;
  cursor: pointer;
`;

const MyPageDetailGreeting = styled.div`
  margin-top: 50px;
  text-align: center;
  font-size: 19px;
`;

const MyPageDetailAnnouncement = styled.div`
  margin-top: 40px;
  margin-bottom: 50px;
  text-align: center;
  font-size: 19px;
`;

const MyPageDetailInformationSection = styled.div`
  display: block;
  margin: auto;
`;

const ImageDiv = styled.div`
  text-align: center;
`;
const ProductImage = styled.img`
  width: 80%;
  margin-bottom: 50px;
`;

const MyPageDetailInformation = styled.div`
  width: 80%;
  margin: auto;
`;

const TheLastWord = styled.div`
  display: block;
  padding: 40px 0 60px 0;
  margin: auto;
  width: 80%;
  border-bottom: 1px solid lightgray;
  font-size: 22px;
  line-height: 1.5em;
`;
>>>>>>> fe1f4e8 (Add: 마이페이지 레이아웃)
=======
>>>>>>> 3140425 (Add: MyPage 완성)
export default MyPage;
