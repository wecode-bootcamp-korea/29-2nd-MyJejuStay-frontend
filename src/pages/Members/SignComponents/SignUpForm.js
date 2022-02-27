import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../api/config';
import FormLayout from './FormLayout';
import Input from './Input';
import Button from './Button';
import styled from 'styled-components';

const SignUpForm = props => {
  const { type, title, inputData } = props;

  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [isChecked, setIsChecked] = useState(false);
  const [isValidate, setIsValidate] = useState(false);

  const regName = /^[a-zA-Z0-9]{4,20}$/;
  const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;
  const regPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

  const navigate = useNavigate();

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const testValidation = () => {
    regName.test(inputValues.name) &&
    regEmail.test(inputValues.email) &&
    regPassword.test(inputValues.password) &&
    inputValues.repeatPassword === inputValues.password &&
    isChecked === true
      ? setIsValidate(true)
      : setIsValidate(false);
  };

  const clickButton = e => {
    e.preventDefault();
    fetch(`${api.signUp}`, {
      method: 'POST',
      body: JSON.stringify({
        name: inputValues.name,
        email: inputValues.email,
        password: inputValues.password,
        has_agreed: isChecked,
      }),
    })
      .then(response => response.json())
      .then(result => {
        alert('회원가입에 성공하였습니다.');
        navigate('/');
      });
  };

  useEffect(() => {
    testValidation();
  });

  return (
    <SignUpBody>
      <FormLayout>
        <Heading>{title}</Heading>
        {inputData.map((input, idx) => (
          <Input
            key={idx}
            name={input.name}
            text={input.text}
            type={input.type}
            placeholder={input.placeholder}
            handleInput={handleInput}
          />
        ))}

        <AgreementWrap>
          <AgreementCheckbox
            type="checkbox"
            name="checkbox"
            onClick={() => {
              setIsChecked(!isChecked);
            }}
          />
          <AgreementH1>회원 가입 및 운영약관 동의 (필수)</AgreementH1>
        </AgreementWrap>

        <Button isValidate={isValidate} clickButton={clickButton} />

        <SwitchWrap>
          {type === 'signUp' && (
            <SwitchToLogin>
              이미 아이디가 있으신가요?<span>로그인</span>
            </SwitchToLogin>
          )}
          {type === 'login' && (
            <SwitchToSignUp>
              아직 회원이 아니신가요? <span>회원가입</span>
            </SwitchToSignUp>
          )}
        </SwitchWrap>
      </FormLayout>
    </SignUpBody>
  );
};

export default SignUpForm;

const SignUpBody = styled.div`
  height: 100vh;
  position: relative;
`;

const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const AgreementWrap = styled.div`
  display: flex;
  padding: 12px;
  width: 320px;
  border: ${props => props.theme.border};
  margin: 12px auto;
  text-align: center;
`;

const AgreementCheckbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const AgreementH1 = styled.h1`
  font-size: 12px;
`;

const SwitchWrap = styled.div`
  display: flex;
  padding: 12px 0;
  text-align: center;
  width: 320px;
  justify-content: center;
  margin: auto;
`;

const SwitchToLogin = styled.p`
  font-size: 12px;
`;

const SwitchToSignUp = styled.p`
  font-size: 12px;
`;
