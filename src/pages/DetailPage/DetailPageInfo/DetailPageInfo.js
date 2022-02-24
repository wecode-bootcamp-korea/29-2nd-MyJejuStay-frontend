import React from 'react';
import styled from 'styled-components';
import DetailPageInfoCheckInOut from './DetailPageInfoCheckInOut';

const DetailPageInfo = ({ accommodationData }) => {
  return (
    <StyledInfoDiv>
      <StyledAccomodationInfoTitle>숙소정보</StyledAccomodationInfoTitle>
      <StyledCheckWrapper>
        {ACCOMMODATION_DATA_TITLE.map(({ id, title, label }) => {
          return (
            <DetailPageInfoCheckInOut
              key={id}
              title={title}
              check={accommodationData[0] && accommodationData[0][label]}
            />
          );
        })}
      </StyledCheckWrapper>
      <div>
        <StyledRule>이용 규칙</StyledRule>
        <StyledRuleContent>
          • &nbsp;&nbsp;[➕ 인원추가] 기준인원 초과 시, 추가요금 발생 <br />
          <br />
          • &nbsp;&nbsp;[🚨 아래 사항을 지켜주세요!] <br />
          <br />• &nbsp;&nbsp;펜션 이용중 비치된 집기나 시설물 파손 시 반드시
          알려주시기 바랍니다. <br />
          <br />• &nbsp;&nbsp;예약하신 분 이외의 다른 손님의 방문 및 초대를
          금합니다. <br />
          <br />• &nbsp;&nbsp;객실 내에는 1회 용품 (면도기, 칫솔 등)은 비치되어
          있지 않습니다. <br />
          <br />• &nbsp;&nbsp;애완동물의 객실 내 출입을 금지하고 있으니
          양해바랍니다. <br />
          <br />
          • &nbsp;&nbsp;마지막 퇴실 시에는 실내에 있는 모든 쓰레기를 분리수거해
          주시고, 사용하신 식기류는 세척해 주시기 바랍니다.
          <br />
          <br />
          • &nbsp;&nbsp;양초 등 인화물질의 사용을 엄격히 금합니다.
          <br />
          <br /> • &nbsp;&nbsp;객실 내 금연입니다.
          <br />
          <br /> • &nbsp;&nbsp;객실 내에서 냄새나 연기가 심한 음식 조리는
          불가합니다.
          <br />
          <br /> • &nbsp;&nbsp;예약 인원 외 추가 인원은 투숙 및 출입이
          불가합니다. • 이용객의 부주의로 인한 사고에 대해서는 책임을 지지
          않습니다.
          <br />
          <br />
          • &nbsp;&nbsp;무분별한 음주, 고성방가는 절대 금하며 주의를 드린 후에도
          시정되지 않을 경우 퇴실을 요구할 수 있으며 이 경우 이용 요금은 환불해
          드리지 않습니다. <br />
          <br />
          • &nbsp;&nbsp;원활한 체크인을 위해, 예약확정 후 여행확인증의 연락처로
          꼭 연락주세요! <br />
          <br />• &nbsp;&nbsp;※ 청소년 보호법에 따라 미성년자의 혼숙은
          불가합니다
        </StyledRuleContent>
      </div>
      <div>
        <StyledIntro>숙소 소개</StyledIntro>
        <StyledIntroContent>
          {accommodationData[0]?.detail_description}
        </StyledIntroContent>
      </div>
    </StyledInfoDiv>
  );
};

const StyledInfoDiv = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const StyledAccomodationInfoTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 40px;
`;

const StyledCheckWrapper = styled.div`
  display: flex;
`;

const StyledIntro = styled.h3`
  margin: 40px 0;
  font-size: 20px;
`;

const StyledIntroContent = styled.p``;

const StyledRule = styled.div`
  margin: 40px 0px;
  font-size: 20px;
`;

const StyledRuleContent = styled.p``;

const ACCOMMODATION_DATA_TITLE = [
  {
    id: 1,
    title: '체크인',
    label: 'check_in_time',
  },
  { id: 2, title: '체크아웃', label: 'check_out_time' },
];

export default DetailPageInfo;
