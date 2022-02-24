import React from 'react';
import styled from 'styled-components';
function OneReview({ name, comment, rate, image, date }) {
  const starView = rate * 12;

  return (
    <ReviewSection>
      <ReviewContents>
        <ReviewHeader>
          <StarBox style={{ width: starView }}>
            <PointOfStar
              className="pointOfStar"
              alt="별"
              src="/images/bluesky.png"
            />
          </StarBox>

          <UserName>{name}</UserName>
        </ReviewHeader>
        <Date>{date.slice(0, date.indexOf('T'))}</Date>
        <Comment>{comment}</Comment>
      </ReviewContents>
      <Img src={image} alt="숙소이미지" />
    </ReviewSection>
  );
}

const ReviewSection = styled.section`
  display: flex;
  align-items: flex-end;
  margin-top: 50px;
  border-top: 1px solid lightgray;
  padding-top: 30px;
`;

const ReviewContents = styled.div`
  margin-right: 30px;
`;

const ReviewHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const StarBox = styled.div`
  height: 15px;
  overflow: hidden;
  margin-right: 10px;
`;

const UserName = styled.div`
  font-size: 13px;
`;

const PointOfStar = styled.img`
  height: 13px;
  width: 60px;
`;

const Date = styled.div`
  font-size: 12px;
  margin-bottom: 15px;
`;

const Comment = styled.div`
  font-size: 13px;
  line-height: 1.5em;
`;
const Img = styled.img`
  width: 150px;
  height: 120px;
`;
export default OneReview;
