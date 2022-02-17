import React from 'react';
import ReservationMessage from './ReservationMessage';
import ReservationHostMessage from './ReservationHostMessage';

const ReservationContent = ({ range, totalPersonnel }) => {
  return (
    <div>
      {range === '날짜를 선택해주세요' || totalPersonnel === 0 ? (
        <ReservationMessage />
      ) : (
        <ReservationHostMessage />
      )}
    </div>
  );
};

export default ReservationContent;
