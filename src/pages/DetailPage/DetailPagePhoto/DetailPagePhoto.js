import React from 'react';
import styled from 'styled-components';

const DetailPagePhoto = ({ accommodationData }) => {
  return (
    <StyledDetailImgSection>
      {accommodationData[0] &&
        accommodationData[0].image_url.map((data, index) => (
          <StyledDetailImgDiv key={index}>
            <StyledDetailImg alt="숙소사진" key={index} src={data} />
          </StyledDetailImgDiv>
        ))}
    </StyledDetailImgSection>
  );
};

export default DetailPagePhoto;

const StyledDetailImgSection = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 130px;
`;

const StyledDetailImgDiv = styled.div`
  width: calc(33vw);
  height: calc(30vh);
  margin-right: 4px;
  margin-top: 60px;
`;

const StyledDetailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
