import React from 'react';
import styled from 'styled-components';

function ReviewLists({ ReviewLists }) {
  return (
    <>
      {ReviewLists?.map(data => (
        <ReviewList key={data.id} />
      ))}
    </>
  );
}

const ReviewList = styled.div`
  width: 700px;
`;

export default ReviewLists;
