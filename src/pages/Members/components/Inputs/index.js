import React from 'react';
import { NameWrap, NameH1, NameInput } from './style';

export default function Inputs({ name, text, type, placeholder, onChange }) {
  return (
    <div className="input">
      <NameWrap>
        <NameH1>{text}</NameH1>
        <NameInput
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      </NameWrap>
    </div>
  );
}
