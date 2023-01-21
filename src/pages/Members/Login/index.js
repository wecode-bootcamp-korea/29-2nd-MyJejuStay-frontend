import React from 'react';
import LoginForm from './LoginFrom';
import { LOGIN_DATA } from './constants';

export default function Login() {
  return <LoginForm type="login" title="로그인" inputData={LOGIN_DATA} />;
}
