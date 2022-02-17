import React from 'react';
import styled from 'styled-components';

export default function FormLayout(props) {
  const { children } = props;
  return (
    <SignUpWrap>
      <header>
        <div className="logo" />
      </header>
      {children}
    </SignUpWrap>
  );
}

const SignUpWrap = styled.div`
  border: ${props => props.theme.border};
  /* border: 1px solid #dce4f0; */
  padding: 32px 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;
