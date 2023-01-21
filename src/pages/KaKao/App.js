import React from 'react';

function App() {
  const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div>
      <h1>
        <a href={KAKAO_AUTH_URL}>카카오로 로그인하기</a>
      </h1>
    </div>
  );
}

export default App;
