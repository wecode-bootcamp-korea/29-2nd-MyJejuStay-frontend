import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import FormLayout from './FormLayout';
import Input from './Input';
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

  // const navigate = useNavigate();
  // const goToMain = () => {
  //   navigate('/main-soojin');
  // };

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

  const clickButton = () => {
    // console.log(inputValues, isChecked);
    fetch('http://192.168.200.116:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: inputValues.name,
        email: inputValues.email,
        password: inputValues.password,
        has_agreed: isChecked,
      }),
    }).then(response => response.json());
    // .then(result => console.log(result));
  };

  useEffect(() => {
    testValidation();
  });
  // [inputValues, isChecked]
  // console.log(isValidate);

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

        <ButtonWrap>
          <SignUpButton disabled={!isValidate} onClick={clickButton}>
            동의하고 가입하기
          </SignUpButton>
        </ButtonWrap>

        <SwitchWrap>
          <SwitchLink>이미 아이디가 있으신가요?</SwitchLink>
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

const ButtonWrap = styled.div`
  padding: 10px;
  text-align: center;
  width: 400px;
`;

const SignUpButton = styled.button`
  background-color: dodgerblue;
  color: white;
  border-radius: 5px;
  width: 320px;
  height: 46px;
  margin: 5px 0;

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    cursor: pointer;
  }
`;

const SwitchWrap = styled.div`
  display: flex;
  padding: 12px 0;
  text-align: center;
  width: 320px;
  justify-content: space-between;
  margin: auto;
`;

const SwitchLink = styled.a`
  font-size: 12px;
`;
