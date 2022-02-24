export const MyPageMenuData = [
  {
    id: 1,
    header: 'MY STAY',
    list: [
      { id: 1, title: '예약정보', link: '/mypage' },
      { id: 2, title: '취소 내역', link: '/mypage/cancel' },
      { id: 3, title: '다녀온 스테이', link: '/mypage/past' },
      { id: 4, title: '관심 스테이', link: '/mypage/like' },
      { id: 5, title: '이용권', link: '/mypage/coupon' },
    ],
  },
  {
    id: 2,
    header: '내 계정',
    list: [{ id: 1, title: '회원 정보 수정', link: '/mypage/user' }],
  },
  {
    id: 3,
    header: 'About MYJEJUSTAY',
    list: [
      { id: 1, title: '마이제주스테이 소개', link: '/mypage/introduction' },
    ],
  },
];

export const MyPageDetailInformationData = [
  {
    id: 1,
    header: 'Stay Information',
    list: [
      {
        id: 1,
        list_title: '주소',
        list_information: '제주특별자치도 서귀포시 중문관광로72번길 75',
      },
      {
        id: 2,
        list_title: '연락처',
        list_information: '+82647355114',
      },
      {
        id: 3,
        list_title: '이메일',
        list_information: 'myjejustay@myjejustay.com',
      },
    ],
  },
  {
    id: 2,
    header: '결제 정보',
    list: [
      { id: 1, list_title: '결제 방법', list_information: '무통장 입금' },
      {
        id: 2,
        list_title: '계좌 정보',
        list_information: '스테이은행 834-4639-1421-41(예금주:스테이)',
      },
    ],
  },
  {
    id: 3,
    header: '동의사항',
    list: [
      {
        id: 1,
        list_title: '금연 안내',
        list_information:
          '숙소 내 모든 구역에서는 절대 금연(전자담배 포함)입니다. 위반 시 즉각 퇴실 조치와 추가 청소비를 청구합니다.',
      },
      {
        id: 2,
        list_title: '변상 규정',
        list_information:
          '숙소 내 기물 파손 및 침구 오염 등이 발생할 경우 배상비용이 청구됩니다.',
      },
    ],
  },
];
