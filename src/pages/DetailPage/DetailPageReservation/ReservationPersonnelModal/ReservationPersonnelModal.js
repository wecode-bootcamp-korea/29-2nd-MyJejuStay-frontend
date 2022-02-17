import React from 'react';
import styled from 'styled-components';
import ReservationPersonnelModalRow from './ReservationPersonnelModalRow';

const ReservationPersonnelModal = ({
  closeModal,
  personnel,
  handlePersonnelMinusBtn,
  handlePersonnelPlusBtn,
  totalPersonnel,
  maxPeople,
}) => {
  return (
    <StyledReservationModalWrapper>
      <div>
        {RESERVATION_PERSON_DATA.map(data => {
          const { id, label, name } = data;
          return (
            <ReservationPersonnelModalRow
              key={id}
              label={label}
              name={name}
              value={personnel[name]}
              handlePersonnelPlusBtn={handlePersonnelPlusBtn}
              handlePersonnelMinusBtn={handlePersonnelMinusBtn}
              totalPersonnel={totalPersonnel}
              maxPeople={maxPeople}
            />
          );
        })}
      </div>
      <StyledReservationLimit>
        <p>※ 최대 예약 가능 인원 수는 {maxPeople} 입니다.</p>
        <StyledApplyButton onClick={closeModal}>적용</StyledApplyButton>
      </StyledReservationLimit>
    </StyledReservationModalWrapper>
  );
};

export default ReservationPersonnelModal;

const RESERVATION_PERSON_DATA = [
  {
    id: 1,
    label: '성인',
    name: 'adultPersonnel',
  },

  { id: 2, label: '어린이/유아', name: 'childPersonnel' },
];

const StyledReservationModalWrapper = styled.div`
  position: absolute;
  top: 75px;
  right: 0px;
  box-shadow: 0 4px 24px rgb(109 115 129 / 20%);
  border-radius: 8px;
  background-color: #ffffff;
  z-index: 1000;
  font-family: 'SF Pro Display', sans-serif;
`;

const StyledReservationLimit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 342px;
  height: 36px;
  padding: 10px;
  margin-bottom: 5px;
`;

const StyledApplyButton = styled.button`
  height: 36px;
  padding: 0 16px;
  border: 0;
  background-color: #f1f3f7;
  color: #6a7792;
`;
