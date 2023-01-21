import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../../api/config';
import { regName, regEmail, regPassword } from './validationTool';
import FormLayout from '../../components/FormLayout';
import Inputs from '../../components/Inputs';
import Buttons from '../../components/Buttons';
import {
  SignUpBody,
  AgreementWrap,
  AgreementCheckbox,
  AgreementH1,
} from './style';

const SignUpForm = ({ type, title, inputData }) => {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [isChecked, setIsChecked] = useState(false);
  const [isValidate, setIsValidate] = useState(false);

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckbox = e => {
    setIsChecked(e.target.checked);
  };

  const onClickButton = e => {
    e.preventDefault();
    const bodyData = JSON.stringify({
      name: inputValues.name,
      email: inputValues.email,
      password: inputValues.password,
      has_agreed: isChecked,
    });
    fetch(`${api.signUp}`, {
      method: 'POST',
      body: bodyData,
    })
      .then(response => response.json())
      .then(() => {
        alert('회원가입에 성공하였습니다.');
        navigate('/');
      })
      .catch(() => {
        alert('회원가입 실패!');
      });
  };

  useEffect(() => {
    const testValidation = values => {
      regName.test(values.name) &&
      regEmail.test(values.email) &&
      regPassword.test(values.password) &&
      values.repeatPassword === values.password &&
      isChecked === true
        ? setIsValidate(true)
        : setIsValidate(false);
    };

    testValidation(inputValues);
  }, [inputValues, isChecked]);

  return (
    <SignUpBody>
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
        <AgreementWrap>
          <AgreementCheckbox
            type="checkbox"
            name="checkbox"
            onClick={handleCheckbox}
          />
          <AgreementH1>회원 가입 및 운영약관 동의 (필수)</AgreementH1>
        </AgreementWrap>

        <Buttons
          title={title}
          isValidate={isValidate}
          onClick={onClickButton}
        />
      </FormLayout>
    </SignUpBody>
  );
};

export default SignUpForm;
