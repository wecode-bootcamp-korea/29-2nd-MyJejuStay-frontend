import React from 'react';
import SignUpForm from './SignUpForm';
import { TYPE_SIGNUP, TITLE_SIGNUP, SIGNUP_DATA } from './constants';

export default function SignUp() {
  return (
    <SignUpForm
      type={TYPE_SIGNUP}
      title={TITLE_SIGNUP}
      inputData={SIGNUP_DATA}
    />
  );
}
