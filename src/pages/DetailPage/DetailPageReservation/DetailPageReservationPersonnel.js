import React from 'react';

const DetailPageReservationPersonnel = () => {
  return (
    <div>
      <label for="personSelect">인원 (아이포함)</label>
      <button>arrow</button>
      <select name="personnel" id="personSelect">
        <option value="">1</option>
        <option value="">성인</option>
        <option value="">어린이/유아</option>
      </select>
    </div>
  );
};

export default DetailPageReservationPersonnel;
