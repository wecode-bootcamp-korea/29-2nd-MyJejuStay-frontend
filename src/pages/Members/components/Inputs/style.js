import styled from 'styled-components';

export const NameWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 400px;

  padding-top: 20px;
`;

export const NameH1 = styled.h1`
  width: 320px;
  margin-bottom: 5px;
  font-size: 14px;
`;

export const NameInput = styled.input`
  border: ${props => props.theme.border};
  width: 320px;
  height: 40px;
  padding-left: 12px;
`;
