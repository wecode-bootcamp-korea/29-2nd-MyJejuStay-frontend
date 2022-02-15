import React from 'react';
import styled from 'styled-components/macro';
import Slider from 'react-slick';

const ProductImgSlider = ({ productInfo }) => {
  const imgs = productInfo.imgs;
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ProductImgWrap>
      <StyledSlider {...settings}>
        {productInfo && imgs?.map((img, i) => <ProductImg src={img} key={i} />)}
      </StyledSlider>
    </ProductImgWrap>
  );
};

export default ProductImgSlider;

const ProductImgWrap = styled.div`
  max-width: 300px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  .slick-prev {
    left: 10px !important;
    z-index: 1000;
  }

  .slick-next {
    right: 10px !important;
    z-index: 1000;
  }

  .slick-dots {
    display: flex;
    width: 100px;
    margin: 0;
    padding: 0;
    left: 50%;
    bottom: 10px;
    transform: translate(-50%, -50%);
  }

  .slick-dots li {
    width: 6px;
    height: 6px;
    margin: 0 3.5px;
  }

  .slick-dots li button {
    width: 6px;
    height: 6px;
  }

  .slick-dots li button:before {
    width: 6px;
    height: 6px;
    color: white;
  }

  .slick-dots li.slick-active button:before {
    color: white !important;
  }

  li {
    margin: 0;
    padding: 0;
  }
`;

const ProductImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
