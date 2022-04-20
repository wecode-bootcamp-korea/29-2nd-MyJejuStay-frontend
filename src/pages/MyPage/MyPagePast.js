import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../api/config';
import styled from 'styled-components';

function MyPagePast() {
  const [detailInformation, setDetailInformation] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/users/mypage`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => setDetailInformation(data.result));
  }, []);
  // 모두 머지됐을 때

  // useEffect(() => {
  //   fetch('http://10.58.7.58:8000/users/mypage')
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // }, []);
  // console.log(detailInformation);
  //마이페이지만 있을 때

  return (
    <div>
      <MyPageDetailSection>
        <MyPageDetailInformationSection>
          <MyPageDetailHeader>다녀온 스테이 {'>'} </MyPageDetailHeader>
          <UserTripInformation>
            <InformationLists>
              <InformationHeader>Trip Information</InformationHeader>
              <InformationList>
                <InformationListTitle>숙소 이름</InformationListTitle>
                {/* <div>
                  {detailInformation && detailInformation[1].accommodation_name}
                </div> */}
              </InformationList>
              <InformationList>
                <InformationListTitle>결제 금액</InformationListTitle>
                {/* <div>
                  ₩{' '}
                  {detailInformation &&
                    (+detailInformation[1].price).toLocaleString()}
                </div> */}
              </InformationList>
              <InformationList>
                <InformationListTitle>투숙 인원</InformationListTitle>
                {/* <div>
                  <span>
                    어른: {detailInformation[1].number_of_adults}명 /{' '}
                  </span>
                  <span>아이: {detailInformation[1].number_of_children}명</span>
                </div> */}
              </InformationList>
              <InformationList>
                <InformationListTitle>체크인 날짜</InformationListTitle>
                {/* <div>
                  {detailInformation && detailInformation[1].check_in_date}
                </div> */}
              </InformationList>
              <InformationList>
                <InformationListTitle>체크아웃 날짜</InformationListTitle>
                {/* <div>
                  {detailInformation && detailInformation[1].check_out_date}
                </div> */}
              </InformationList>
            </InformationLists>
            <Img src="/images/Main/stay2.jpg" />
          </UserTripInformation>
        </MyPageDetailInformationSection>
        <Pagination>1</Pagination>
      </MyPageDetailSection>
    </div>
  );
}

const MyPageDetailSection = styled.div`
  width: 820px;
`;

const MyPageDetailInformationSection = styled.div`
  display: block;
`;

const MyPageDetailHeader = styled.div`
  display: block;
  margin: 0px 60px 60px 60px;
  width: 80%;
  font-size: 19px;
  color: black;
  cursor: pointer;
`;
const Img = styled.img`
  width: 350px;
  height: 300px;
`;

const UserTripInformation = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 60px 0px 60px;
  margin-bottom: 100px;
  border-bottom: 1px solid lightgray;
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
  padding: 18px 0px 18px 0px;
  width: 300px;
  border-bottom: 1px solid lightgray;
`;

const InformationListTitle = styled.div``;

const Pagination = styled.div`
  text-align: center;
  padding-bottom: 30px;
  color: gray;
`;
export default MyPagePast;
