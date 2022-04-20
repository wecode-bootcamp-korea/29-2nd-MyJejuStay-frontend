import React from 'react';
import styled from 'styled-components';
import DetailPageInfoCheckInOut from './DetailPageInfoCheckInOut';

const DetailPageInfo = ({ accommodationData }) => {
  return (
    <StyledInfoDiv>
      <StyledAccommodationInfoTitle>숙소정보</StyledAccommodationInfoTitle>
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
          {/* {accommodationData[0]?.detail_description} */}
          여기, 이디오라게에서 소중한 사람들과 아름다운 추억 남기시길 바랍니다.
          <br />
          <br />
          서귀포시 하예동(난드르)에 위치한 저희 이디오라게 펜션은 <br />
          모던한 호텔 분위기의 깨끗함을 갖춘 제주도 펜션입니다. <br />
          <br />
          저희 펜션은 하예동(난드르) 해안 가까이 있어 석양과 일출을 즐기기에
          적합하여 <br />
          하예동(난드르)의 주상절리 박수기정이 모든 객실에서 보여 <br />
          제주도의 자연을 즐기기에 최고입니다. <br />
          <br />
          내부 인테리어도 모던하면서 호텔 느낌의 분위기를 연출해
          <br />
          사랑하는 가족, 연인, 친구들과의 여행에 특별함을 선물할 것입니다.{' '}
          <br />
          각종 부대시설 완비를 통해 이용하시는 고객님들이 사용하기 적합합니다.
          <br />
          <br />
          가족들도 머물 수 있는 넓고 쾌적한 숙소부터 <br />
          연인이 머물 수 있는 아기자기한 숙소까지 <br />
          다양한 고객님들이 머물 수 있는 저희 펜션은 <br />
          제주 여행에서 특별한 추억을 선물할 것입니다. <br />
          [📢 안내사항]
          <br /> -기준인원 초과 시, 추가요금 발생
          <br /> -집합금지 기간 중 5인이상 숙박 시 가족관계를 증명할 서류 지참
          필수
          <br /> -침구 제공
          <br /> -연휴 : 20.12.24~12.27 / 12.31~21.1.3 / 2.10~2.14 / 2.26~3.1
          <br />
          <br /> [📍 숙소 주변 관광지] -세화해변, 용머리해안, 중문관광단지
          <br /> *22시 이후 입실 시, 사전 연락 필수
          <br />
          <br /> [🏡 숙소시설] -이디오라게 카페
          <br />
          <br /> [🍖 바베큐 이용]
          <br /> -이용요금 : 2만원 (4인기준)
          <br /> -그릴, 숯, 가위, 집게, 장갑 제공
          <br /> *집합금지 기간 중 이용 불가 [🏊‍♀️ 어린이 수영장]
          <br /> -이용기간 : 하절기 (문의 필요)
          <br /> -성인은 입장 불가 (보호자는 동반가능)
        </StyledIntroContent>
      </div>
    </StyledInfoDiv>
  );
};

const StyledInfoDiv = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const StyledAccommodationInfoTitle = styled.div`
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

const StyledIntroContent = styled.p`
  line-height: 25px;
`;

const StyledRule = styled.div`
  margin: 40px 0px;
  font-size: 20px;
`;

const StyledRuleContent = styled.p`
  line-height: 20px;
`;

const ACCOMMODATION_DATA_TITLE = [
  {
    id: 1,
    title: '체크인',
    label: 'check_in_time',
  },
  { id: 2, title: '체크아웃', label: 'check_out_time' },
];

export default DetailPageInfo;
