import React from 'react';
import styled from 'styled-components';

const DetailPagePhoto = () => {
  const imgUrl = [
    'https://images.unsplash.com/photo-1616285677522-8cf9274a0e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
    'https://images.unsplash.com/photo-1616285677522-8cf9274a0e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
    'https://images.unsplash.com/photo-1616285677522-8cf9274a0e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
  ];
  return (
    <StyledDetailImgSection>
      {imgUrl.map((data, index) => (
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
`;

const StyledDetailImgDiv = styled.div`
  width: calc(33vw);
  height: calc(30vh);
  margin-right: 4px;
  margin-top: 60px;
`;

const StyledDetailImg = styled.img`
  width: 100%;
  heigth: 100%;
  object-fit: cover;
`;
