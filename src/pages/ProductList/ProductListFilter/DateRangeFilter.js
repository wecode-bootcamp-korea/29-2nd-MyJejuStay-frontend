import React from 'react';
import styled from 'styled-components';
import { DateRangePicker } from 'react-date-range';
import { ko } from 'date-fns/locale';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DateRangeFilter = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  setRange,
  setIsOpen,
}) => {
  const handleSelect = ranges => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);

    const range = {
      start: `${ranges.selection.startDate}`,
      end: `${ranges.selection.endDate}`,
    };

    let formatDate = changeTimeFormat(range);
    setRange(`${formatDate[0]} / ${formatDate[1]}`);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const months = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  };

  const changeTimeFormat = range => {
    const splitStartRange = range.start.split(' ');

    const splitEndRange = range.end.split(' ');
    const startFormat =
      splitStartRange[3] +
      '-' +
      months[splitStartRange[1]] +
      '-' +
      splitStartRange[2] +
      ' ' +
      splitStartRange[4];

    const endFormat =
      splitEndRange[3] +
      '-' +
      months[splitEndRange[1]] +
      '-' +
      splitEndRange[2] +
      ' ' +
      splitEndRange[4];

    return [startFormat.slice(0, 10), endFormat.slice(0, 10)];
  };

  return (
    <DateRangeFilterWrap>
      <DateRangePicker
        locale={ko}
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={['#fd5861']}
        months={2}
        staticRanges={[]}
        inputRanges={[]}
        direction="horizontal"
        onChange={handleSelect}
      />
    </DateRangeFilterWrap>
  );
};

const DateRangeFilterWrap = styled.div`
  position: absolute;
  width: min-content;
  top: 55px;
  left: 0px;
  z-index: 10000;

  .rdrDefinedRangesWrapper {
    width: 0;
  }
`;

export default DateRangeFilter;
