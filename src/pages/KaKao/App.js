import React from 'react';

function App() {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

  return (
    <div className="App">
      <h1>
        <a href={KAKAO_AUTH_URL}>카카오로 로그인하기</a>
      </h1>
    </div>
  );
}

export default App;
