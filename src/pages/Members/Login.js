import React from 'react';
import LoginForm from './SignComponents/LoginForm';

export default function Login() {
  return (
    <div className="login">
      <LoginForm type="login" title="로그인" inputData={LOGIN_DATA} />
    </div>
  );
}

const LOGIN_DATA = [
  {
    name: 'email',
    text: '이메일 *',
    type: 'text',
    placeholder: 'ID@example.com',
  },
  {
    name: 'password',
    text: '비밀번호 *',
    type: 'password',
    placeholder: '비밀번호를 입력해주세요.',
  },
];
