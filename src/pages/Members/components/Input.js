import React from 'react';
import styled from 'styled-components';

export default function Input(props) {
  const { name, text, type, placeholder, handleInput } = props;

  return (
    <div className="input">
      <NameWrap>
        <NameH1>{text}</NameH1>
        <NameInput
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={handleInput}
        />
      </NameWrap>
    </div>
  );
}

const NameWrap = styled.div`
  padding: 12px;
  text-align: center;
  width: 400px;
`;

const NameH1 = styled.h1`
  font-size: 14px;
  margin: 5px 0;
`;

const NameInput = styled.input`
  border: ${props => props.theme.border};
  width: 320px;
  height: 40px;
  padding-left: 12px;
`;
