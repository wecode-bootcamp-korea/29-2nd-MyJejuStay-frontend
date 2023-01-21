import styled from 'styled-components';

export const ButtonWrap = styled.div`
  padding-top: 20px;
  text-align: center;
  width: 400px;
`;

export const SignUpButton = styled.button`
  background-color: dodgerblue;
  color: white;
  border-radius: 5px;
  width: 320px;
  height: 46px;
  /* margin: 5px 0; */
  border: none;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

export const KakaoButton = styled.button`
  background-color: ${props => props.theme.kakaoYellow};
  border-radius: 5px;
  width: 320px;
  height: 46px;
  /* margin: 5px 0; */
  border: none;
`;
