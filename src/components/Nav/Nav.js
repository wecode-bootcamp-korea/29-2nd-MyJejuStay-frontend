import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeList } from './Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlaneDeparture,
  faMapLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import UserInfo from './UserInfo';
import styled from 'styled-components';

function Nav() {
  const location = useLocation();
  useEffect(() => {}, [location]);

  const [display, setDisplay] = useState(false);

  return (
    <NavSection>
      <LogoLink to="/">
        MYJEJUSTAY
        <LogoIcon>
          <FontAwesomeIcon icon={faPlaneDeparture} />
        </LogoIcon>
      </LogoLink>

      <Menu>
        <MenuList onClick={() => setDisplay(0)}>
          <MenuText>어디로 떠날까요?</MenuText>
          <FontAwesomeIcon icon={faMapLocationDot} />
          <DropdownContainer
            onMouseLeave={() => setDisplay(false)}
            show={display === 0 ? true : false}
          >
            {ThemeList.map(data => (
              <DropdownContent to={data.ThemeLink} key={data.id}>
                {data.ThemeList}
              </DropdownContent>
            ))}
          </DropdownContainer>
        </MenuList>

        <UserInfo />
      </Menu>
    </NavSection>
  );
}
const NavSection = styled.section`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 60px;
  background-color: white;
  color: black;
  z-index: 9999;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 600px;
  color: black;
  text-decoration: none;
  font-family: 'Quicksand', sans-serif;
  height: 38px;
  cursor: pointer;
  text-decoration: none;
`;

const LogoIcon = styled.div`
  margin-left: 10px;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  font-family: 'Quicksand', sans-serif;
  align-items: flex-end;
`;

const MenuList = styled.li`
  display: flex;
  text-align: center;
  font-size: 15px;
  padding-right: 30px;
  cursor: pointer;
  &:hover {
    font-weight: 500;
  }
`;

const MenuText = styled.div`
  padding-right: 10px;
`;
const DropdownContainer = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-evenly;
  background-color: white;
  border: 1px solid black;
  width: 140px;
  height: 100px;
  position: absolute;
  font-size: 15px;
  top: 70%;
  margin-top: 10px;
`;

const DropdownContent = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: #51abf3;
  }
`;

export default Nav;
