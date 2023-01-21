import styled from 'styled-components';

export const SignUpBody = styled.div`
  height: 100vh;
  position: relative;
`;

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const AgreementWrap = styled.div`
  display: flex;
  padding: 12px;
  width: 320px;
  border: ${props => props.theme.border};
  margin: 12px auto;
  text-align: center;
`;

export const AgreementCheckbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const AgreementH1 = styled.h1`
  font-size: 12px;
`;

export const SwitchWrap = styled.div`
  display: flex;
  padding: 12px 0;
  text-align: center;
  width: 320px;
  justify-content: center;
  margin: auto;
`;

export const SwitchToLogin = styled.p`
  font-size: 12px;
`;

export const SwitchToSignUp = styled.p`
  font-size: 12px;
`;
