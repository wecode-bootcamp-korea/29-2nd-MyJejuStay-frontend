import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWonSign } from '@fortawesome/free-solid-svg-icons';

const DetailPageSideBar = () => {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faWonSign} />
        price
      </div>
      <div>
        <label for="checkInOut">체크인 / 체크아웃</label>
        <input id="checkInOut" />
      </div>
    </div>
  );
};

export default DetailPageSideBar;
