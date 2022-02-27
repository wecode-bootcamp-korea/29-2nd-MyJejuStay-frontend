import React from 'react';
import styled from 'styled-components';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductItemInfo = ({ productInfo, goToDetail }) => {
  return (
    <ProductInfoWrap onClick={goToDetail}>
      <div>
        <ProductInfoName>{productInfo.name}</ProductInfoName>
        <ProductInfoAddress>{productInfo.address}</ProductInfoAddress>
        <ProductInfoDesc>{productInfo.description}</ProductInfoDesc>
        <UnderLine />
        <ProductInfoFacilities>
          최대 인원 2명 · 원룸 · 침대 1개 · 단독 사용 욕식 1개
        </ProductInfoFacilities>
        <ProductInfoFacilities>
          무료 주차 공간 · 주방 · 무선 인터넷 · 세탁기
        </ProductInfoFacilities>
      </div>
      <div>
        <ProductInfoRatingWrap>
          <FontAwesomeIcon icon={faStar} className="star" />
          <ProductInfoRatingTextWrap>
            <ProductInfoRatingNumber>
              {Number(productInfo.price).toLocaleString()}
            </ProductInfoRatingNumber>
            <ProductInfoReviewCount> (후기 29개)</ProductInfoReviewCount>
          </ProductInfoRatingTextWrap>
        </ProductInfoRatingWrap>
      </div>
    </ProductInfoWrap>
  );
};

export default ProductItemInfo;

const ProductInfoWrap = styled.div`
  display: flex;
  width: 100%;
  margin-left: 15px;
  padding: 4px 0;
  justify-content: space-between;
  flex-direction: column;
`;

const ProductInfoAddress = styled.p`
  font-size: 13px;
  color: #717171;
  font-weight: 500;
  line-height: 1.5;
`;

const ProductInfoName = styled.h1`
  font-size: 16px;
  color: #000000;
  font-weight: 700;
  line-height: 1.3;
`;

const ProductInfoDesc = styled.p`
  width: 380px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #707070;
  font-size: 16px;
  line-height: 1.7;
`;

const UnderLine = styled.div`
  width: 30px;
  margin: 20px 0 12px 0;
  border-bottom: 1px solid #d2d2d2;
`;

const ProductInfoFacilities = styled.p`
  font-size: 13px;
  color: #717171;
  line-height: 1.5;
`;
const ProductInfoRatingWrap = styled.div`
  display: flex;
  align-items: center;

  .star {
    color: #51abf3;
  }
`;

const ProductInfoRatingTextWrap = styled.div`
  display: flex;
  align-items: center;
`;

const ProductInfoRatingNumber = styled.p`
  margin: 0 5px;
`;

const ProductInfoReviewCount = styled.p`
  font-size: 13px;
  color: #717171;
`;
