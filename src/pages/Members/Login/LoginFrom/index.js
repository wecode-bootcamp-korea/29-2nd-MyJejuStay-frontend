import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../../api/config';
import { regEmail, regPassword } from './validationTool';
import FormLayout from '../../components/FormLayout';
import Inputs from '../../components/Inputs';
import Buttons from '../../components/Buttons';
import { LoginBody } from './style';

const LoginForm = ({ type, title, inputData }) => {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });
  const [isValidate, setIsValidate] = useState(false);

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues(prev => ({ ...prev, [name]: value }));
  };
  const validateUser = result => {
    if (result.message === 'SUCCESS') {
      try {
        sessionStorage.setItem('token', result.token);
        alert('로그인 성공!');
        navigate('/');
      } catch (error) {
        alert(error);
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
  };

  const onClickLoginButton = () => {
    const bodyData = JSON.stringify({
      email: inputValues.email,
      password: inputValues.password,
    });
    fetch(api.login, {
      method: 'POST',
      body: bodyData,
    })
      .then(response => response.json())
      .then(result => {
        validateUser(result);
      })
      .catch(() => {
        alert('로그인 실패!');
      });
  };

  useEffect(() => {
    const testValidation = values => {
      regEmail.test(values.email) && regPassword.test(values.password)
        ? setIsValidate(true)
        : setIsValidate(false);
    };

    testValidation(inputValues);
  }, [inputValues]);

  return (
    <LoginBody>
      <FormLayout title={title} type={type}>
        {inputData.map(item => (
          <Inputs
            key={item.name}
            name={item.name}
            text={item.text}
            type={item.type}
            placeholder={item.placeholder}
            onChange={handleInput}
          />
        ))}

        <Buttons
          title={title}
          isValidate={isValidate}
          onClick={onClickLoginButton}
        />
      </FormLayout>
    </LoginBody>
  );
};

export default LoginForm;
