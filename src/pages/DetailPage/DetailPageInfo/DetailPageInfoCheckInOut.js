import React from 'react';
import styled from 'styled-components';

const DetailPageInfoCheckInOut = ({ title, check }) => {
  // console.log(check);
  return (
    <div>
      <h3>{title}</h3>
      <StyledCheckInOut>{check}</StyledCheckInOut>
    </div>
  );
};

export default DetailPageInfoCheckInOut;

const StyledCheckInOut = styled.h2`
  font-size: 24px;
  color: #495056;
  font-weight: 300;
  margin-top: 12px;
  width: 300px;
`;
