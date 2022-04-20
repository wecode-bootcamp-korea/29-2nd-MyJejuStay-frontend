import React, { useState, useEffect } from 'react';
import MyPageDetail from './MyPageDetail';
import { MyPageDetailInformationData } from './MyPageData';
import { BASE_URL } from '../../api/config';
import styled from 'styled-components';

function MyPageReservation() {
  const [detailInformation, setDetailInformation] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/users/reservationinfo`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setDetailInformation(data.result);
      });
  }, []);
  // 모두 머지됐을 때

  // useEffect(() => {
  //   fetch('http://10.58.7.58:8000/users/mypage')
  //     .then(res => res.json())
  //     .then(data => setDetailInformation(data.result));
  // }, [detailInformation]);
  // console.log(detailInformation);
  // console.log(detailInformation[0].accommodation_name);

  //마이페이지만 있을 때

  return (
    <div>
      <MyPageDetailSection>
        <MyPageDetailInformationSection>
          <MyPageDetailHeader>예약 정보 {'>'} </MyPageDetailHeader>
          <MyPageDetailGreeting>
            <ToBeBold>스테이</ToBeBold>님 안녕하세요.
          </MyPageDetailGreeting>
          <MyPageDetailAnnouncement>
            여행 전 <ToBeBold>예약 정보</ToBeBold>를 미리 확인하세요.
          </MyPageDetailAnnouncement>
          <ImageDiv>
            <ProductImage src="/images/Main/stay2.jpg" alt="숙소사진" />
          </ImageDiv>
          <MyPageDetailInformation>
            <UserTripInformation>
              <InformationLists>
                <InformationHeader>Trip Information</InformationHeader>
                <InformationList>
                  <InformationListTitle>숙소 이름</InformationListTitle>
                  <div>
                    {detailInformation[0] &&
                      detailInformation[0].accommodation_name}
                  </div>
                </InformationList>
                <InformationList>
                  <InformationListTitle>결제 금액</InformationListTitle>
                  <div>
                    ₩{' '}
                    {detailInformation[0] &&
                      (+detailInformation[0].price).toLocaleString()}
                  </div>
                </InformationList>
                <InformationList>
                  <InformationListTitle>투숙 인원</InformationListTitle>
                  <div>
                    <span>
                      어른:{' '}
                      {detailInformation[0] &&
                        detailInformation[0].number_of_adults}
                      명 /{' '}
                    </span>
                    <span>
                      아이:{' '}
                      {detailInformation[0] &&
                        detailInformation[0].number_of_children}
                      명
                    </span>
                  </div>
                </InformationList>
                <InformationList>
                  <InformationListTitle>체크인 날짜</InformationListTitle>
                  <div>
                    {detailInformation[0] && detailInformation[0].check_in_date}
                  </div>
                </InformationList>
                <InformationList>
                  <InformationListTitle>체크아웃 날짜</InformationListTitle>
                  <div>
                    {detailInformation[0] &&
                      detailInformation[0].check_out_date}
                  </div>
                </InformationList>
              </InformationLists>
            </UserTripInformation>
            {MyPageDetailInformationData &&
              MyPageDetailInformationData.map(data => {
                return (
                  <MyPageDetail
                    key={data.header}
                    header={data.header}
                    list={data.list}
                  />
                );
              })}
          </MyPageDetailInformation>
          <TheLastWord>
            마이제주스테이와 <br /> 함께 해주셔서 감사합니다.
          </TheLastWord>
        </MyPageDetailInformationSection>
      </MyPageDetailSection>
    </div>
  );
}

const MyPageDetailSection = styled.div`
  width: 820px;
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
const ToBeBold = styled.span`
  font-weight: 600;
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

const UserTripInformation = styled.ul`
  margin-bottom: 100px;
`;

const InformationLists = styled.ul`
  margin-bottom: 100px;
`;
const InformationHeader = styled.div`
  font-size: 22px;
  border-bottom: 2px solid black;
  padding-bottom: 15px;
`;

const InformationList = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 30px 0px 30px 0px;
  border-bottom: 1px solid lightgray;
`;

const InformationListTitle = styled.div`
  width: 23%;
`;
const TheLastWord = styled.div`
  display: block;
  padding: 40px 0 60px 0;
  margin: auto;
  width: 80%;
  font-size: 22px;
  line-height: 1.5em;
`;

export default MyPageReservation;
