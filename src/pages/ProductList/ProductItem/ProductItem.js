import React from 'react';
import styled from 'styled-components/macro';
import ProductImgSlider from './ProductItemContent/ProductImgSlider';
import ProductItemInfo from './ProductItemContent/ProductItemInfo';

const ProductItem = ({ productInfo }) => {
  return (
    <ProductItemWrap>
      <ProductImgSlider productInfo={productInfo} />
      <ProductItemInfo productInfo={productInfo} />
    </ProductItemWrap>
  );
};

export default ProductItem;

const ProductItemWrap = styled.div`
  display: flex;
  padding: 24px 8px;

  &:nth-child(1) {
    border-top: 1px solid lightGray;
    border-bottom: 1px solid lightGray;
  }
  &:nth-child(n + 2) {
    border-bottom: 1px solid lightGray;
  }
`;
