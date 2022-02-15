import React from 'react';
import styled from 'styled-components';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductItemInfo = ({ productInfo }) => {
  return (
    <ProductInfoWrap>
      <div>
        <ProductInfoTitle>{productInfo.region}</ProductInfoTitle>
        <ProductInfoDesc>{productInfo.desc}</ProductInfoDesc>
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
              {productInfo.price}
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
  justify-content: space-between;
  flex-direction: column;
`;

const ProductInfoTitle = styled.h1`
  font-size: 13px;
  color: #717171;
  font-weight: 500;
`;

const ProductInfoDesc = styled.p`
  width: 380px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
`;

const UnderLine = styled.div`
  width: 30px;
  margin: 20px 0 12px 0;
  border-bottom: 1px solid #d2d2d2;
`;

const ProductInfoFacilities = styled.p`
  font-size: 13px;
  color: #717171;
`;
const ProductInfoRatingWrap = styled.div`
  display: flex;
  align-items: center;

  .star {
    color: #ff385c;
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
