import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { api } from '../../../api/config';
import FormLayout from './FormLayout';
import Input from './Input';
import Button from './Button';
import styled from 'styled-components';

const LoginForm = props => {
  const { title, inputData } = props;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {}, [location]);

  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;
  const regPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

  const [isValidate, setIsValidate] = useState(false);

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const testValidation = () => {
    regEmail.test(inputValues.email) && regPassword.test(inputValues.password)
      ? setIsValidate(true)
      : setIsValidate(false);
  };

  const clickLoginButton = () => {
    fetch(`${api.login}`, {
      method: 'POST',
      body: JSON.stringify({
        email: inputValues.email,
        password: inputValues.password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          try {
            sessionStorage.setItem('token', result.token);
            alert('로그인 성공!');
            navigate('/');
            window.locaion.reload();
          } catch (err) {
            alert(err);
          }
        } else if (result.message === 'INVALID_EMAIL') {
          alert('Email Does not Exist! 이메일을 확인해주세요.');
        } else if (result.message === 'INVALID_PASSWORD') {
          alert('Wrong Password! 비밀번호를 다시 입력해주세요.');
        } else if (result.message === 'KEY_ERROR') {
          alert('이메일 또는 비밀번호 조건이 맞지 않습니다.');
        } else {
          alert('존재하지 않는 계정입니다.');
          navigate('/signup');
        }
      });
  };

  useEffect(() => {
    testValidation();
  });

  return (
    <LoginBody>
      <FormLayout>
        <Heading>{title}</Heading>
        {inputData.map((data, idx) => (
          <Input
            key={idx}
            name={data.name}
            text={data.text}
            type={data.type}
            placeholder={data.placeholder}
            handleInput={handleInput}
          />
        ))}
        <Button
          title={title}
          isValidate={isValidate}
          clickLoginButton={clickLoginButton}
        />
      </FormLayout>
    </LoginBody>
  );
};

export default LoginForm;

const LoginBody = styled.div`
  height: 100vh;
  position: relative;
`;

const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;
