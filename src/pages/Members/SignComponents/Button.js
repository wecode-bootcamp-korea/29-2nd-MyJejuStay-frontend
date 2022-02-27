import React from 'react';
import styled from 'styled-components';

export default function Button(props) {
  const { title, isValidate, clickLoginButton, clickButton } = props;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

  return (
    <>
      <div className="Button">
        <ButtonWrap>
          <SignUpButton
            disabled={!isValidate}
            onClick={clickLoginButton ? clickLoginButton : clickButton}
          >
            {title === '로그인' ? '로그인하기' : '동의하고 가입하기'}
          </SignUpButton>
        </ButtonWrap>
      </div>

      <div className="ButtonYellow">
        <ButtonWrap>
          <a href={KAKAO_AUTH_URL}>
            <KakaoButton>카카오로 로그인하기</KakaoButton>
          </a>
        </ButtonWrap>
      </div>
    </>
  );
}

const ButtonWrap = styled.div`
  padding: 10px;
  text-align: center;
  width: 400px;
`;

const SignUpButton = styled.button`
  background-color: dodgerblue;
  color: white;
  border-radius: 5px;
  width: 320px;
  height: 46px;
  margin: 5px 0;
  border: none;

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    cursor: pointer;
  }
`;

const KakaoButton = styled.button`
  background-color: ${props => props.theme.kakaoYellow};
  /* color: black; */
  border-radius: 5px;
  width: 320px;
  height: 46px;
  margin: 5px 0;
  border: none;
`;
