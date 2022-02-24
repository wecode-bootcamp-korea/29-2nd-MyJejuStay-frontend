import React from 'react';
import ReviewList from './ReviewList';

function ReviewLists({ productsList }) {
  return (
    <div>
      {productsList &&
        productsList.map(productsList => {
          return (
            <ReviewList key={productsList.id} reviews={productsList.reviews} />
          );
        })}
    </div>
  );
}

export default ReviewLists;
