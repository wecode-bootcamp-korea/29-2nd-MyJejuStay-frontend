import React from 'react';
import { FormWrapper, Heading, SwitchWrap, Span, Link } from './style';

export default function FormLayout(props) {
  const { children, title, type } = props;
  const TYPE_SIGNUP = 'signUp';
  const TYPE_LOGIN = 'login';

  return (
    <FormWrapper>
      <Heading>{title}</Heading>
      {children}

      <SwitchWrap>
        {type === TYPE_SIGNUP && (
          <>
            <Span>이미 아이디가 있으신가요? </Span>
            <Link to="/login"> 로그인</Link>
          </>
        )}
        {type === TYPE_LOGIN && (
          <>
            <Span>아직 회원이 아니신가요? </Span>
            <Link to="/signup"> 회원가입</Link>
          </>
        )}
      </SwitchWrap>
    </FormWrapper>
  );
}
