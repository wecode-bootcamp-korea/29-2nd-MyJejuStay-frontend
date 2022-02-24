import React from 'react';
import styled from 'styled-components';

export default function MyPageCancel() {
  return (
    <>
      <Info>취소 내역이 없습니다.</Info>{' '}
    </>
  );
}

const Info = styled.div`
  display: block;
  margin: auto;
`;
