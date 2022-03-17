# MyJejuStay

## 프로젝트 기간

2022/02/14 ~ 2022/02/26

## 팀원

|           | 팀원                           |
| --------- | ------------------------------ |
| front-end | 석정도, 임채현, 김지윤, 정수진 |
| back-end  | 최창현, 모휘정                 |

### 프론트엔드

- HTML/CSS
- JavaScript(ES6+)
- React
- Styled-Components
- Kakao Login Api
- Kakao Map Api
- React Slick
- React-Date-Range
- React-Modal

### 백엔드

- Django
- Python
- PyJWT
- Bcrypt

[백엔드 레포지토리](https://github.com/wecode-bootcamp-korea/29-2nd-MyJejuStay-backend)

## 일정

<b>2022/02/14 ~ 2022/02/25</b>

## 🚩 구현 목록

1. 회원가입 / 로그인(소셜로그인)
2. 메인페이지
3. 숙소 리스트 페이지
4. 지도 api
5. 상품 상세페이지
6. 프로젝트 배포

## 📌 구현 파트

|               | 구현 파트                          |
| :-----------: | :--------------------------------- |
| <b>석정도</b> | 상품리스트, 검색, 필터링, 지도     |
| <b>김지윤</b> | 메인, 마이페이지, 헤더, 푸터, 댓글 |
| <b>정수진</b> | 회원가입, 로그인(소셜로그인)       |
| <b>임채현</b> | 상품상세, 숙소예약                 |

## 🔧 Built With

<div style="display: flex">

![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

</div>

<div style="display: flex">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

</div>

<div style="display: flex">

![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)

</div>

## 시연

로그인

- 로그인 input 유효성 검사
- 로그인 성공 시 토큰발급 및 헤더 부분의 조건부 렌더링
- 소셜 로그인(카카오)

![myjejustaylogin](https://user-images.githubusercontent.com/39605922/158718910-1c18a7d3-8619-437e-965e-6a584ddb448d.gif)

회원가입

- 회원가입 input 유효성 검사
- 회원가입 성공 시 메인페이지로 이동

![myjejustaysignup](https://user-images.githubusercontent.com/39605922/158718953-93590c20-7555-4475-966d-d409929d91a4.gif)

메인 페이지

- 비디오 렌더링
- 버튼에 따라 navigate 훅을 이용한 페이지 이동

![myjejustaymain](https://user-images.githubusercontent.com/39605922/158718850-7cf54072-feab-44d3-969a-40259832a38c.gif)

숙소 리스트 페이지

- 다중 필터링(기간, 인원, 숙소명)
- 가격순, 최신순 정렬
- modal을 이용한 추가 핕터링(테마별, 인증)
- kakao map api를 활용한 숙소 리스트 렌더링
- react-slick 라이브러리를 커스터마이징하여 숙소사진 캐러우셀 처리
  ![myjejustaylist](https://user-images.githubusercontent.com/39605922/158719013-d572edb5-7faa-4ba6-a6ed-93889031886e.gif)

숙소 상세페이지

- 숙소 상세 렌더링
- 인원 및 기간별로 예약

![myjejustaydetail](https://user-images.githubusercontent.com/39605922/158719099-36913a76-24b8-46ce-be14-d9af4ec876de.gif)

## ⚙ Build Installation

```bash
# install dependencies
$ npm install
# serve with hot reload at localhost:3000
$ npm start
```

<br>

---

## Reference

- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
