import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
  margin-top: 0px;
  margin-bottom: 100px;
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
export default MyPage;
