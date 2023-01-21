import React from 'react';
import SignUpForm from './SignUpForm';
import { SIGNUP_DATA } from './constants';

export default function SignUp() {
  return (
    <div className="signUp">
      <SignUpForm type="signUp" title="회원가입" inputData={SIGNUP_DATA} />
    </div>
  );
}
