import React from 'react';
import DetailPageRating from './DetailPageRating';
import DetailPageMapButton from './DetailPageMapButton';
import styled from 'styled-components';

const DetailPageHeader = ({ accommodationData }) => {
  const score = 4.2;
  return (
    <StyledHeaderDiv>
      <StyledAccommodationSection>
        <StyledAccommodationHeader>
          <StyledAccommodationName>
            {accommodationData[0]?.name}
          </StyledAccommodationName>
          <DetailPageMapButton />
        </StyledAccommodationHeader>
        <StyledAccommodationDesc>
          {accommodationData[0]?.description}
        </StyledAccommodationDesc>
        <DetailPageRating score={score} />
      </StyledAccommodationSection>
    </StyledHeaderDiv>
  );
};

export default DetailPageHeader;

const StyledHeaderDiv = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

const StyledAccommodationSection = styled.section``;

const StyledAccommodationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin-bottom: 10px;
`;

const StyledAccommodationName = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

const StyledAccommodationDesc = styled.h3`
  color: #848c94;
  margin-bottom: 10px;
  font-size: 14px;
`;
