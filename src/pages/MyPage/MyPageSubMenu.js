import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function MyPageSubMenu({ header, list }) {
  return (
    <MyPageMenuLists>
      <MyPageMenuHeader>{header}</MyPageMenuHeader>
      <ul>
        {list.map(li => (
          <MyPageMenuList key={li.id}>
            <MyPageMenuLink to={li.link}>{li.title}</MyPageMenuLink>
          </MyPageMenuList>
        ))}
      </ul>
    </MyPageMenuLists>
  );
}
const MyPageMenuLists = styled.ul`
  margin-bottom: 50px;
`;

const MyPageMenuHeader = styled.div`
  font-size: 19px;
  margin-bottom: 20px;
`;

const MyPageMenuList = styled.li`
  font-size: 15px;
  margin-bottom: 20px;
`;

const MyPageMenuLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export default MyPageSubMenu;
