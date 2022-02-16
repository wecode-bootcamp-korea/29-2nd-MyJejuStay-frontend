import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReviewFilterListsData } from './ReviewFilterData';
import ReviewLists from './ReviewLists';
// import { api } from '../../config';
import styled from 'styled-components';

function Review() {
  // const [categoryId, setCategoryId] = useState(null);
  const [reviewContentsList, setReviewContentsList] = useState([]);

  // const location = useLocation();
  // const queryString = location.search;

  // useEffect(() => {
  //   setCategoryId(queryString ? queryString : 0);
  // }, [queryString]);

  // useEffect(() => {
  //   if (categoryId === null) return;

  //   if (categoryId) {
  //     fetch(`${api.accommodations}${categoryId}`)
  //       .then(res => res.json())
  //       .then(data => setReviewList(data.message.reviews));
  //   }
  // }, [categoryId]);

  useEffect(() => {
    fetch('/data/Review/Review_Data.json')
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        setReviewContentsList(res);
      });
  }, []);

  console.log(reviewContentsList);

  return (
    <ReviewSection>
      <ReviewHeader>Review</ReviewHeader>
      <ReviewFilterLists>
        {ReviewFilterListsData?.map(data => (
          <ReviewFilterList key={data.id}>
            <ReviewFilterListLink to={data.ReviewFilterLink}>
              {data.ReviewFilterList}
            </ReviewFilterListLink>
          </ReviewFilterList>
        ))}
      </ReviewFilterLists>
      <ReviewLists ReviewList={reviewContentsList.Review} />
    </ReviewSection>
  );
}

const ReviewSection = styled.section`
  width: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

const ReviewHeader = styled.h1`
  font-size: 20px;
`;

const ReviewFilterLists = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 30px;
  justify-content: flex-end;
`;

const ReviewFilterList = styled.li`
  margin-left: 10px;
`;

const ReviewFilterListLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
export default Review;
