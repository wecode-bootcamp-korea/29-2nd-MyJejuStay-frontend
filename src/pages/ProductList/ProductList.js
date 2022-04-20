import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import ProductListFilter from './ProductListFilter/ProductListFilter';
import FilterSort from './ProductListFilter/FilterSort';
import ProductItem from './ProductItem/ProductItem';
import MapContainer from './ProductMap/MapContainer';
import { api } from '../../api/config';

const ProductList = () => {
  const [productInfos, setProductInfos] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(`${api.fetchAccommList}${location.search}`)
      .then(res => res.json())
      .then(res => {
        setProductInfos(res.message);
      });
  }, [location]);
  return (
    <ProductListWrap>
      <ProductFilterWrap>
        <ProductListFilter />
        <FilterSort />
      </ProductFilterWrap>
      <ProductListContentsWrap>
        <ProductItemsWrap>
          {productInfos.length >= 1 &&
            productInfos?.map(productInfo => (
              <ProductItem key={productInfo.id} productInfo={productInfo} />
            ))}
        </ProductItemsWrap>
        <ProductListMapWrapper>
          <MapContainer productInfos={productInfos} />
        </ProductListMapWrapper>
      </ProductListContentsWrap>
    </ProductListWrap>
  );
};

export default ProductList;

const ProductListWrap = styled.div`
  margin-bottom: 100px;
`;

const ProductFilterWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  background-color: #ffffff;
  z-index: 100;
`;

const ProductListContentsWrap = styled.div`
  display: flex;
  padding-top: 226px;
`;

const ProductItemsWrap = styled.div`
  width: 50%;
  margin-right: 15px;
`;

const ProductListMapWrapper = styled.div`
  position: sticky;
  top: 226px;
  left: 51%;
  width: calc(100% - 51%);
  height: calc(100vh - 220px);
`;
