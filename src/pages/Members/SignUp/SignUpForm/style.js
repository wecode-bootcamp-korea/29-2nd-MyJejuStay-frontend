import styled from 'styled-components';

export const SignUpBody = styled.div`
  position: relative;
  height: 900px;
`;

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const AgreementWrap = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  margin-top: 20px;

  width: 320px;
  height: 40px;

  border: ${props => props.theme.border};
`;

export const AgreementCheckbox = styled.input`
  width: 16px;
  height: 16px;
  margin: 0 10px;
`;

export const AgreementH1 = styled.h1`
  font-size: 12px;
`;
