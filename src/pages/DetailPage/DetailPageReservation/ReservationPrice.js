import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWonSign } from '@fortawesome/free-solid-svg-icons';

const ReservationPrice = ({ price, endDate, startDate }) => {
  const bookingDays =
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
  const totalPrice = price * bookingDays;
  const saleRate = 0.3;
  const discountedPrice = saleRate * totalPrice;
  const finalPrice = totalPrice - discountedPrice;
  return (
    <StyledPriceTableDiv>
      <StyledPriceTable>
        <StyledPriceTableBody>
          <StyledPriceRow>
            <StyledPriceLabel>
              <span>기존가</span>
              <StyledHowLong>
                (<FontAwesomeIcon icon={faWonSign} />
                {price} x {bookingDays}박)
              </StyledHowLong>
            </StyledPriceLabel>
            <StyledPriceData>
              <FontAwesomeIcon icon={faWonSign} />
              <del>{totalPrice}</del>
            </StyledPriceData>
          </StyledPriceRow>
          <StyledPriceRow>
            <StyledPriceLabel>
              <StyledSale>장기 할인</StyledSale>
            </StyledPriceLabel>
            <StyledPriceData>
              <StyledSale>
                - <FontAwesomeIcon icon={faWonSign} />
                {discountedPrice}
              </StyledSale>
            </StyledPriceData>
          </StyledPriceRow>
          <StyledFinalPrice colSpan="2">
            <StyledPriceLabel>최종 금액(TAX 포함)</StyledPriceLabel>
            <StyledFinalPriceData>
              <FontAwesomeIcon icon={faWonSign} />
              {finalPrice}
            </StyledFinalPriceData>
          </StyledFinalPrice>
        </StyledPriceTableBody>
      </StyledPriceTable>
    </StyledPriceTableDiv>
  );
};

export default ReservationPrice;

const StyledPriceTableDiv = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const StyledPriceTable = styled.table`
  width: 100%;
`;

const StyledPriceTableBody = styled.tbody`
  width: 100%;
`;

const StyledPriceRow = styled.tr`
  width: 100%;
`;

const StyledPriceData = styled.td`
  padding: 15px 20px;
  font-size: 15px;
  color: #545c70;
  text-align: right;
`;

const StyledPriceLabel = styled.td`
  padding: 15px 20px;
  font-size: 15px;
  color: #545c70;
`;

const StyledHowLong = styled.span`
  color: #76838f;
  font-size: 13px;
  font-weight: 300;
`;

const StyledSale = styled.span`
  color: red;
  text-align: right;
`;

const StyledFinalPrice = styled.tr`
  border-top: 1px solid #e8edee;
  border-bottom: 1px solid #e8edee;
  background-color: #f4f5f6;
`;

const StyledFinalPriceData = styled.td`
  color: #51abf3;
  font-size: 20px;
  padding: 15px 20px;
  font-weight: 600;
  text-align: right;
`;
