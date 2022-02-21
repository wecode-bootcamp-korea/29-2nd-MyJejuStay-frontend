import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import DateRangeFilter from './DateRangeFilter';
import FilterModal from './FilterModal';

const ProductListFilter = () => {
  const navigate = useNavigate();
  const [range, setRange] = useState('체크인/체크아웃');
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [selected, setSelected] = useState('1');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchAccomm, setSearchAccomm] = useState('');

  const toggleDateModal = () => {
    setIsOpen(prev => !prev);
  };

  const handleChangeSelect = e => {
    setSelected(e.target.value);
  };

  const handleSearchInfo = e => {
    setSearchAccomm(e.target.value);
  };

  const getFormatParameter = () => {
    let allQueryParams = '';

    const allChecked = startDate && endDate && selected && searchAccomm;
    const notCheckedSearch = startDate && endDate && selected;

    if (allChecked) {
      allQueryParams += `?checkInDate=${startDate}&checkOutDate=${endDate}&people=${selected}&search=${searchAccomm}`;
    } else if (notCheckedSearch) {
      allQueryParams += `?checkInDate=${startDate}&checkOutDate=${endDate}&people=${selected}`;
    } else if (searchAccomm) {
      allQueryParams += `?people=${selected}&search=${searchAccomm}`;
    } else {
      allQueryParams += `?people=${selected}`;
    }

    setSearchAccomm('');

    return allQueryParams;
  };

  const submitFilterInfo = e => {
    e.preventDefault();

    const queryParameter = getFormatParameter();

    navigate(`/productlist${queryParameter}`);
  };

  const openFilterModal = () => {
    setIsOpenModal(true);
  };

  const closeFilterModal = () => {
    setIsOpenModal(false);
  };

  const submitEnter = e => {
    if (e.key === 'Enter') {
      submitFilterInfo(e);
    }
  };

  const optionDatas = [
    { value: '', data: '인원' },
    { value: '1', data: '1' },
    { value: '2', data: '2' },
    { value: '3', data: '3' },
    { value: '4', data: '4' },
    { value: '5', data: '5' },
    { value: '6', data: '6' },
    { value: '7', data: '7' },
  ];
  return (
    <FilterWrap>
      <LocationWrap>
        <LocationName>제주도</LocationName>
      </LocationWrap>
      <InputWrap>
        <CalendarWrap>
          <CalendarInput
            placeholder={range}
            onClick={toggleDateModal}
            value={range || ''}
            readOnly
          />
          {isOpen && (
            <DateRangeFilter
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              setRange={setRange}
              setIsOpen={setIsOpen}
            />
          )}
        </CalendarWrap>
        <CountNumber onChange={handleChangeSelect}>
          {optionDatas.map((option, i) => (
            <option value={option.value} key={i}>
              {option.data}
            </option>
          ))}
        </CountNumber>

        <SearchInput
          placeholder="숙소명"
          value={searchAccomm}
          onChange={handleSearchInfo}
          onKeyPress={submitEnter}
        />
        <SearchBtn onClick={submitFilterInfo}>검색</SearchBtn>
        <SearchBtn onClick={openFilterModal}>조건 검색</SearchBtn>
        <FilterModal
          openFilterModal={openFilterModal}
          closeFilterModal={closeFilterModal}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />
      </InputWrap>
    </FilterWrap>
  );
};

export default ProductListFilter;

const alignCenter = css`
  display: flex;
  align-items: center;
`;

const fontInput = css`
  line-height: 46px;
  font-size: 15px;
  font-weight: 400;
`;

const border = css`
  border: 2px solid ${({ theme }) => theme.color};
  border-radius: 4px;
`;

const focus = css`
  &:focus {
    outline: none;
  }
`;

const FilterWrap = styled.div`
  ${alignCenter}
  height: 48px;
  margin-bottom: 20px;
  padding: 0 0 0 8px;
  color: #202a3e;
  margin-top: 100px;

  .location {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`;

const LocationWrap = styled.div`
  ${alignCenter}
  width: 100px;
`;

const LocationName = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;

const InputWrap = styled.div`
  ${alignCenter}
  width: calc(100% - 82px);
`;

const CalendarWrap = styled.div`
  position: relative;
  width: 35%;
`;

const CalendarInput = styled.input`
  width: 100%;
  height: 48px;
  padding-left: 36px;
  ${border}
  ${fontInput}
  
  ${focus}
  &::placeholder {
    text-align: left;
  }
`;

const CountNumber = styled.select`
  display: flex;
  white-space: pre;
  width: 19%;
  height: 48px;
  margin: 0 3px;
  padding: 0 6px 0 36px;
  ${border}
  ${fontInput}

  ${focus}
`;

const SearchInput = styled.input`
  width: 37%;
  height: 48px;
  margin: 0 3px 0 0;
  padding: 0 6px 0 36px;
  white-space: pre;
  ${border}
  ${fontInput}

  ${focus}
`;

const SearchBtn = styled.button`
  height: 48px;
  margin: 0 3px 0 0;
  padding: 0 15px;
  white-space: pre;
  border: none;
  border-radius: 4px;
  color: #eee;
  background-color: ${({ theme }) => theme.starBlue};
  text-align: center;
  line-height: 46px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  ${focus}
`;
