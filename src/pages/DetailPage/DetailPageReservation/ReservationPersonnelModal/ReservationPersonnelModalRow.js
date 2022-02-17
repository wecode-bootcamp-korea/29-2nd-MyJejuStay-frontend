import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';

const ReservationPersonnelModalRow = ({
  label,
  name,
  value,
  handlePersonnelPlusBtn,
  handlePersonnelMinusBtn,
  totalPersonnel,
  maxPeople,
}) => {
  return (
    <StyledPersonnelModalDiv>
      <div>
        <StyledPersonnelModalLabel htmlFor="numberAdult">
          {label}
        </StyledPersonnelModalLabel>
      </div>
      <StyledPersonnelBtnWrapper>
        <StyledPersonnelModalButton
          name={name}
          onClick={handlePersonnelPlusBtn}
          disabled={totalPersonnel >= maxPeople ? true : false}
          type="button"
        >
          <StyledPersonnelModalBtnIcon name={name} icon={faCirclePlus} />
        </StyledPersonnelModalButton>
        <StyledPersonnelModalVal>{value}</StyledPersonnelModalVal>
        <StyledPersonnelModalButton
          name={name}
          onClick={handlePersonnelMinusBtn}
          disabled={value === 0 ? true : false}
          type="button"
        >
          <StyledPersonnelModalBtnIcon name={name} icon={faCircleMinus} />
        </StyledPersonnelModalButton>
      </StyledPersonnelBtnWrapper>
    </StyledPersonnelModalDiv>
  );
};

export default ReservationPersonnelModalRow;

const StyledPersonnelModalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 342px;
  height: 44px;
  margin-top: 5px;
`;

const StyledPersonnelModalLabel = styled.label`
  font-size: 17px;
  margin-left: 10px;
`;

const StyledPersonnelBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: none;
  margin-right: 5px;
`;
const StyledPersonnelModalButton = styled.button`
  display: block;
  width: 40px;
  height: 40px;
  border: none;
  color: #51abf3;
  background-color: transparent;
  :disabled {
    opacity: 0.4;
  }
`;

const StyledPersonnelModalVal = styled.div`
  width: 32px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: default;
`;

const StyledPersonnelModalBtnIcon = styled(FontAwesomeIcon)`
  width: 100%;
  height: 100%;
`;
