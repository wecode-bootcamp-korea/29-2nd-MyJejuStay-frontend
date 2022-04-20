import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UserInfo = () => {
  const handleLogOUt = () => {
    sessionStorage.removeItem('token');
    window.reload();
  };
  const handleLogIn = () => {
    window.reload();
  };

  return (
    <UserInfoLists>
      {sessionStorage.getItem('token') ? (
        <>
          <UserInfoList>
            <UserName>Hello, stay</UserName>
          </UserInfoList>
          <UserInfoList>
            <UserInfoLink to="/" className="navlogOut" onClick={handleLogOUt}>
              LOGOUT
            </UserInfoLink>
          </UserInfoList>
          <UserInfoList>
            <UserInfoLink to="/mypage" className="navMyPage">
              MYPAGE
            </UserInfoLink>
          </UserInfoList>
        </>
      ) : (
        <>
          <UserInfoList>
            <UserInfoLink to="/login" onClick={handleLogIn}>
              LOGIN
            </UserInfoLink>
          </UserInfoList>
          <UserInfoList>
            <UserInfoLink to="/signup">SIGNUP</UserInfoLink>
          </UserInfoList>
        </>
      )}
    </UserInfoLists>
  );
};

const UserInfoLists = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-right: 10px;
`;

const UserInfoList = styled.li`
  padding-left: 30px;
  font-size: 15px;
  text-decoration: none;
  &:nth-child(1) {
    border-left: 1px solid black;
  }
`;

const UserInfoLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const UserName = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #6d6d6d;
`;

export default UserInfo;
