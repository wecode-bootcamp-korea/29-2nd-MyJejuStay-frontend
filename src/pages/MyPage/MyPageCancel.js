import React from 'react';
import styled from 'styled-components';

export default function MyPageCancel() {
  return (
    <>
      {/* <MyPageDetailHeader>예약 정보 {'>'} </MyPageDetailHeader> */}
      <Info>취소 내역이 없습니다.</Info>{' '}
    </>
  );
}

const MyPageDetailHeader = styled.div`
  display: block;
  margin: auto;
  width: 80%;
  font-size: 19px;
  color: black;
  cursor: pointer;
`;

const Info = styled.div`
  display: block;
  margin: auto;
`;
