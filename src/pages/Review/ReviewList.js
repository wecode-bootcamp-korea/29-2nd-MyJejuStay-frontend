import React from 'react';
import OneReview from './OneReview';
function ReviewList({ reviews }) {
  return (
    <div>
      {reviews &&
        reviews.map(review => {
          return (
            <OneReview
              key={review.review_id}
              id={review.review_id}
              name={review.user_name}
              comment={review.comment}
              rate={review.rate}
              image={review.image_url}
              date={review.created_at}
            />
          );
        })}
    </div>
  );
}

export default ReviewList;
