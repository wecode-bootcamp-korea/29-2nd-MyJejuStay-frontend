import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import DetailPagePhoto from './DetailPagePhoto/DetailPagePhoto';
import DetailPageHeader from './DetailPageHeader/DetailPageHeader';
import DetailPageInfo from './DetailPageInfo/DetailPageInfo';
import DetailPageReservation from './DetailPageReservation/Reservation';
import Review from './Review/Review';
import { api } from '../../api/config';

const DetailPage = () => {
  const [accommodationData, setAccommodationData] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`${api.fetchAccommList}/1`)
      .then(res => res.json())
      .then(res => {
        setAccommodationData(res.message);
      });
  }, []);
  const detailDescription = accommodationData[0]?.detail_description;
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
