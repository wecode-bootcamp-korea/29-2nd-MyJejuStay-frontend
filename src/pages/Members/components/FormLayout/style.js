import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';
export const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const FormWrapper = styled.div`
  position: absolute;

  border: ${props => props.theme.border};
  padding: 60px 0;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;

  width: 500px;
`;

export const SwitchWrap = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: flex-end;

  padding: 0;
  margin: auto;

  width: 320px;
  height: 46px;
`;

export const Span = styled.span`
  font-size: 12px;
`;

export const Link = styled(_Link)`
  font-size: 12px;
  text-decoration: none;
`;
