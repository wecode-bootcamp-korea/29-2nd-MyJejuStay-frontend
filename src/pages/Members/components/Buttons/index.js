import React from 'react';
import { ButtonWrap, SignUpButton, KakaoButton } from './style';

export default function Buttons({ title, isValidate, onClick }) {
  const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const LOGIN = '로그인';

  return (
    <>
      <div className="Button">
        <ButtonWrap>
          <SignUpButton disabled={!isValidate} onClick={onClick}>
            {title === LOGIN ? '로그인하기' : '동의하고 가입하기'}
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
