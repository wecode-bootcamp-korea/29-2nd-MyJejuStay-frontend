import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DetailPagePhoto from './DetailPagePhoto/DetailPagePhoto';
import DetailPageHeader from './DetailPageHeader/DetailPageHeader';
import DetailPageInfo from './DetailPageInfo/DetailPageInfo';
import DetailPageReservation from './DetailPageReservation/Reservation';
import Review from './Review/Review';

const DetailPage = () => {
  const [accommodationData, setAccommodationData] = useState([]);

  useEffect(() => {
    fetch('http://10.58.7.130:8000/accommodations/1')
      .then(res => res.json())
      .then(res => {
        setAccommodationData(res.message);
      });
  }, []);

  return (
    <div>
      <DetailPagePhoto accommodationData={accommodationData} />
      <StyledDetailPageSection>
        <StyledDetailPageContent>
          <DetailPageHeader accommodationData={accommodationData} />
          <DetailPageInfo accommodationData={accommodationData} />
          <Review />
        </StyledDetailPageContent>
        <aside>
          <DetailPageReservation accommodationData={accommodationData} />
        </aside>
      </StyledDetailPageSection>
    </div>
  );
};

const StyledDetailPageSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1180px;
  margin: 0px auto;
`;

const StyledDetailPageContent = styled.div`
  width: 600px;
`;

export default DetailPage;
