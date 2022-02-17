import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DetailPagePhoto from './DetailPagePhoto/DetailPagePhoto';
import DetailPageHeader from './DetailPageHeader/DetailPageHeader';
import DetailPageInfo from './DetailPageInfo/DetailPageInfo';
import DetailPageReservation from './DetailPageReservation/Reservation';

const DetailPage = () => {
  const [accommodationData, setAccommodationData] = useState([]);
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetch(
      'data/DetailPage/DetailPageHeader/DetailPage_Accommodations_Data.json'
    )
      .then(res => res.json())
      .then(res => {
        setAccommodationData(res);
      });
  }, []);

  useEffect(() => {
    fetch('data/DetailPage/DetailPageHeader/DetailPage_Reviews_Data.json')
      .then(res => res.json())
      .then(res => setReviewData(res));
  }, []);
  return (
    <div>
      <DetailPagePhoto accommodationData={accommodationData} />
      <StyledDetailPageSection>
        <StyledDetailPageContent>
          <DetailPageHeader
            accommodationData={accommodationData}
            reviewData={reviewData}
          />
          <DetailPageInfo accommodationData={accommodationData} />
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
