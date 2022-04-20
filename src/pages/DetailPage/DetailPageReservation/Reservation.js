import React, { useState } from 'react';
import ReservationPersonnelModal from './ReservationPersonnelModal/ReservationPersonnelModal';
import DateRangeFilter from '../../ProductList/ProductListFilter/DateRangeFilter';
import ReservationHeader from './ReservationHeader';
import ReservationContent from './ReservationContent/ReservationContent';
import ReservationPrice from './ReservationPrice';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { api } from '../../../api/config';

const Reservation = ({ accommodationData }) => {
  const [isModalOpen, setIsModalOpen] = useState({
    isDateModalOpen: false,
    isPersonnelModalOpen: false,
  });
  const { isDateModalOpen, isPersonnelModalOpen } = isModalOpen;
  const [range, setRange] = useState('날짜를 선택해주세요');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [personnel, setPersonnel] = useState({
    adultPersonnel: 0,
    childPersonnel: 0,
  });
  const { adultPersonnel, childPersonnel } = personnel;

  const totalPersonnel = adultPersonnel + childPersonnel;

  const handlePersonnelPlusBtn = e => {
    const current = e.currentTarget.name;
    setPersonnel({ ...personnel, [current]: personnel[current] + 1 });
  };

  const handlePersonnelMinusBtn = e => {
    const current = e.currentTarget.name;
    setPersonnel({ ...personnel, [current]: personnel[current] - 1 });
  };

  const openPersonnelModal = e => {
    e.preventDefault();
    setIsModalOpen(prev => ({ [e.target.name]: true }));
  };

  const closePersonnelModal = e => {
    setIsModalOpen(prev => ({ [e.target.name]: false }));
  };

  const toggleDateModal = e => {
    setIsModalOpen({
      ...isModalOpen,
      [e.target.name]: !isDateModalOpen,
    });
  };

  const buttonSubmit = e => {
    e.preventDefault();
    fetch(`${api.fetchAccommList}/2`, {
      method: 'POST',
      headers: {
        authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.k1rvTjLnv_Y__aojHjigGidGi7GDB_8PFz-ouz9SCrs',
      },
      body: JSON.stringify({
        numberOfAdult: adultPersonnel,
        numberOfChildren: childPersonnel,
        checkInDate: startDate,
        checkOutDate: endDate,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'MINIMUM_STAY: {29}') {
          alert('신청한 숙박일수가 최소 숙박일수보다 적습니다!');
        } else if (res.message === 'ROOM_IS_FULL') {
          alert('이미 예약이 차있습니다! 다른 날짜로 예약해주세요.');
        } else {
          alert('예약이 완료되었습니다!');
        }
      });
  };

  return (
    <StyledBookingWrapper>
      <form>
        <div>
          <ReservationHeader
            price={accommodationData[0]?.price}
            minimumStay={accommodationData[0]?.minimum_stay}
          />
          <StyledDateAndPersonnelRow>
            <StyledDateWrapper>
              <label htmlFor="checkInOut">체크인 / 체크아웃</label>
              <StyledInputDate
                id="checkInOut"
                name="isDateModalOpen"
                type="text"
                placeholder={range}
                onClick={toggleDateModal}
                value={range || ' '}
                readOnly
              />
              {isDateModalOpen && (
                <StyledDateRangeFilter
                  startDate={startDate}
                  setStartDate={setStartDate}
                  endDate={endDate}
                  setEndDate={setEndDate}
                  setRange={setRange}
                />
              )}
            </StyledDateWrapper>
            <StyledPersonnelWrapper>
              <label htmlFor="personSelect">인원(아이포함)</label>
              <div>
                <StyledPersonnelButton
                  id="personSelect"
                  name="isPersonnelModalOpen"
                  onClick={openPersonnelModal}
                  click={isPersonnelModalOpen}
                >
                  <StyledPersonnelNumber>
                    {adultPersonnel + childPersonnel}
                  </StyledPersonnelNumber>
                </StyledPersonnelButton>
                {isPersonnelModalOpen && (
                  <ReservationPersonnelModal
                    closeModal={closePersonnelModal}
                    personnel={personnel}
                    totalPersonnel={totalPersonnel}
                    handlePersonnelPlusBtn={handlePersonnelPlusBtn}
                    handlePersonnelMinusBtn={handlePersonnelMinusBtn}
                    isPersonnelModalOpen={isPersonnelModalOpen}
                    maxPeople={accommodationData[0]?.available_people}
                  />
                )}
              </div>
            </StyledPersonnelWrapper>
          </StyledDateAndPersonnelRow>
          {range === '날짜를 선택해주세요' || totalPersonnel === 0 ? null : (
            <ReservationPrice
              startDate={startDate}
              endDate={endDate}
              price={accommodationData[0]?.price}
            />
          )}
        </div>
        <ReservationContent range={range} totalPersonnel={totalPersonnel} />
        <StyledReservationButton onClick={buttonSubmit}>
          예약 가능 여부 확인
        </StyledReservationButton>
      </form>
      <StyledAddInfoWrapper>
        <FontAwesomeIcon icon={faTriangleExclamation} />
        <StyledAdditionalInfo>
          숙소 사진에 보이는 소모품(수건, 이불, 세면도구 등)은 청소 및 렌탈
          업체에서 제공되는 물품일 수 있습니다.
        </StyledAdditionalInfo>
      </StyledAddInfoWrapper>
    </StyledBookingWrapper>
  );
};

export default Reservation;

const StyledBookingWrapper = styled.div`
  width: 400px;
  position: sticky;
  top: 100px;
  border: 1px solid transparent;
  padding: 24px 28px 0;
  border-radius: 8px;
  box-shadow: 4px 4px 40px rgb(0 0 0 / 3%);
`;

const StyledDateAndPersonnelRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 20px;
  font-size: 14px;
`;

const StyledDateWrapper = styled.div`
  width: 70%;
  margin-right: 10px;
  position: relative;
`;

const StyledDateRangeFilter = styled(DateRangeFilter)`
  position: absolute;
`;

const StyledPersonnelWrapper = styled.div`
  position: relative;
  width: 30%;
`;

const StyledInputDate = styled.input`
  display: block;
  width: 100%;
  height: 48px;
  margin-top: 5px;
  border: 2px solid #b4c0d4;
  border-radius: 4px;
`;

const StyledPersonnelButton = styled.button`
  position: relative;
  width: 100%;
  height: 48px;
  margin-top: 5px;
  border: 2px solid #b4c0d4;
  border-radius: 4px;
  background-color: transparent;
  ::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 12px;
    display: block;
    width: 9px;
    height: 9px;
    margin-top: -1px;
    border-right: 2px solid #b4c0d4;
    border-bottom: 2px solid #b4c0d4;
    transform: ${props =>
      props.click
        ? 'translateY(-50%) rotate(225deg)'
        : 'translateY(-50%) rotate(45deg)'};
    margin-top: ${props => (props.click ? '2px' : null)};
    transition: all 0.16s ease-in-out;
    box-sizing: border-box;
  }
`;

const StyledPersonnelNumber = styled.div`
  padding: 0 12px;
  width: 0px;
  text-align: left;
  font-size: 16px;
`;

const StyledReservationButton = styled.button`
  width: 100%;
  height: 52px;
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 17px;
  background-color: #51abf3;
  color: #fff;
  border: none;
  border-radius: 4px;
`;

const StyledAddInfoWrapper = styled.div`
  display: flex;
`;

const StyledAdditionalInfo = styled.p`
  font-size: 13px;
  color: #6a7792;
  line-height: 1.2;
  padding-left: 10px;
  margin-bottom: 20px;
`;
