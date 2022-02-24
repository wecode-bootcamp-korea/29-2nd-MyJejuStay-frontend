import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import { api } from '../../api/config';

const Auth = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: process.env.REACT_APP_REST_API_KEY,
      redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      code: code,
    });

    try {
      const res = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        payload
      );

      const access_token = res.data.access_token;

      fetch(`${api.kakaologin}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: access_token,
        },
      })
        .then(res => res.json())
        .then(data => {
          if (data) {
            try {
              sessionStorage.setItem('token', data.token);
            } catch (err) {
              alert(err);
            }
          } else {
            // signup에서 login으로 변경하기
            alert('로그인 실패하였습니다.');
            navigate('/signup');
          }
        });
      navigate('/');
    } catch (err) {
      alert(err);
    }
  };

  getToken();

  return <div>로딩중입니다...</div>;
};

export default Auth;
