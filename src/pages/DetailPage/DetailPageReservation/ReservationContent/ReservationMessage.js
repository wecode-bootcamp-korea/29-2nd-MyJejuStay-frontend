import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

const ReservationMessage = () => {
  return (
    <div>
      <StyledMessageBox>
        <StyledMessageIcon icon={faCommentDots} />
        <StyledMessage>
          체크인/체크아웃 날짜를 선택하시면, <br />
          <br />
          숙소 상세시설, 예약과 관련해 궁금한 점을 <br />
          <br />
          물어볼 수 있는 [메시지] 기능이 활성화됩니다.
        </StyledMessage>
      </StyledMessageBox>
    </div>
  );
};

export default ReservationMessage;

const StyledMessageBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 110px;
  padding: 0 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px dashed rgba(187, 222, 251, 0.75);
  background-color: rgba(227, 242, 253, 0.75);
`;

const StyledMessageIcon = styled(FontAwesomeIcon)`
  margin-right: 20px;
  width: 42px;
  height: 36px;
`;

const StyledMessage = styled.p`
  font-size: 12px;
  color: #5594db;
`;
