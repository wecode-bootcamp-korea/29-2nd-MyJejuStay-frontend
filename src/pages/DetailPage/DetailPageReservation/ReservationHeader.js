import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWonSign } from '@fortawesome/free-solid-svg-icons';

const ReservationHeader = ({ price, minimumStay }) => {
  const headerPrice = price * minimumStay;
  return (
    <div>
      <div>
        <StyledPrice>
          <FontAwesomeIcon icon={faWonSign} />
          {headerPrice.toLocaleString()}
        </StyledPrice>
        <StyledMinStay> / {minimumStay}박 금액</StyledMinStay>
      </div>
      <StyledStayAvailable>
        <StyledStayAvailableBold>최소{minimumStay}박</StyledStayAvailableBold>
        부터 이용 가능한 숙소입니다.
      </StyledStayAvailable>
    </div>
  );
};

export default ReservationHeader;

const StyledPrice = styled.span`
  font-size: 28px;
  font-weight: bold;
`;

const StyledMinStay = styled.span`
  font-size: 16px;
`;

const StyledStayAvailable = styled.span`
  display: block;
  color: #8696b0;
  font-size: 13px;
  line-height: 1.38;
  margin-top: 12px;
`;

const StyledStayAvailableBold = styled.span`
  font-weight: bold;
`;
