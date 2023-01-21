import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import { api } from '../../api/config';

const Auth = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');

  const getToken = async () => {
    const kakaoAuthUrl = 'https://kauth.kakao.com/oauth/token';
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: process.env.REACT_APP_REST_API_KEY,
      redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      code: code,
    });

    try {
      const res = await axios.post(kakaoAuthUrl, payload);
      const { access_token } = res.data;

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
              alert('로그인 성공하였습니다!');
              navigate('/');
            } catch (err) {
              alert(err);
            }
          } else {
            alert('로그인 실패하였습니다.');
            navigate('/login');
          }
        });
    } catch (err) {
      alert(err);
    }
  };

  getToken();

  return null;
};

export default Auth;
