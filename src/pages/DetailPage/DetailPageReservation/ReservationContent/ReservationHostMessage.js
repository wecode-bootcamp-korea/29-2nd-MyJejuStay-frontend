import React from 'react';
import styled from 'styled-components';

const ReservationHostMessage = () => {
  return (
    <div>
      <StyledContentBox>
        <StyledContentLabel htmlFor="withMessage">
          호스트와의 메시지
        </StyledContentLabel>
        <StyledTextArea
          id="withMessage"
          rows="3"
          placeholder="숙소 시설, 예약 신청과 관련해 궁금한 사항을 적어주세요."
          cols="50"
        />
      </StyledContentBox>
    </div>
  );
};

export default ReservationHostMessage;

const StyledContentBox = styled.div`
  position: relative;
  width: 100%;
  padding-top: 28px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px dashed rgba(187, 222, 251, 0.75);
  background-color: rgba(227, 242, 253, 0.75);
`;

const StyledContentLabel = styled.label`
  position: absolute;
  top: -1px;
  left: -1px;
  display: inline-block;
  padding: 4px 12px 5px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #51abf3;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
`;

const StyledTextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 8px 16px;
  height: 80px;
  border: 0;
  outline: 0;
  background-color: transparent;
`;
