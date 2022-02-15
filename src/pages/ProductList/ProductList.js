import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import ProductItem from './ProductItem/ProductItem';

const ProductList = () => {
  const [productInfos, setProductInfos] = useState([]);

  useEffect(() => {
    fetch('./data/accommodations.json')
      .then(res => res.json())
      .then(res => setProductInfos(res.accommodationsInfo));
  }, []);

  return (
    <ProductListWrap>
      {productInfos.length >= 1 &&
        productInfos.map(productInfo => (
          <ProductItem key={productInfo.id} productInfo={productInfo} />
        ))}
    </ProductListWrap>
  );
};

export default ProductList;

const ProductListWrap = styled.div`
  width: 840px;
  padding: 0 24px;
`;
