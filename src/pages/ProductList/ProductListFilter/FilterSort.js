import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Select from 'react-select';

const options = [
  { value: 'price', label: '낮은가격순' },
  { value: '-price', label: '높은가격순' },
  { value: 'created_at', label: '최신순' },
];
const FilterSort = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedSortOption, setSelectedSortOption] = useState('정렬순서');

  const themeWithSort =
    location.search.includes('&sort') &&
    location.search.startsWith('?themaGroup');
  const startWithTheme = location.search.startsWith('?themaGroup');
  const peopleWithSort =
    location.search.includes('people') && location.search.includes('&sort');
  const startWithPeople = location.search.includes('people');

  const handleSortOption = selectedOption => {
    setSelectedSortOption(selectedOption);
    if (themeWithSort) {
      navigate(
        `/productList${location.search.slice(
          0,
          location.search.indexOf('&sort')
        )}&sort=${selectedOption.value}`
      );
    } else if (startWithTheme) {
      navigate(`/productList${location.search}&sort=${selectedOption.value}`);
    } else if (peopleWithSort) {
      navigate(
        `/productList${location.search.slice(
          0,
          location.search.indexOf('&sort')
        )}&sort=${selectedOption.value}`
      );
    } else if (startWithPeople) {
      navigate(`/productList${location.search}&sort=${selectedOption.value}`);
    } else {
      navigate(`/productList?sort=${selectedOption.value}`);
      return;
    }
  };
  return (
    <FilterSortWrap>
      <SelectWrap>
        <Select
          value={selectedSortOption}
          onChange={handleSortOption}
          options={options}
          placeholder="정렬기준"
        />
      </SelectWrap>
    </FilterSortWrap>
  );
};

export default FilterSort;

const FilterSortWrap = styled.div`
  display: flex;
  margin-right: 5px;
  justify-content: flex-end;
`;

const SelectWrap = styled.div`
  width: 150px;
`;
