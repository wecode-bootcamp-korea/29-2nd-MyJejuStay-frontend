import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { FooterCompanyInfo, FooterOtherInfo } from './FooterData';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
      <div>
        <Logo>
          <FooterLink to="/">MYJEJUSTAY</FooterLink>
          <FontAwesomeIcon icon={faPlaneDeparture} />
        </Logo>

        <CompanyInfo>
          {FooterCompanyInfo.map(data => (
            <CompanyInfoList key={data.id}>{data.companyInfo}</CompanyInfoList>
          ))}
        </CompanyInfo>
      </div>
      <Others>
        {FooterOtherInfo.map(data => (
          <CompanyInfoList key={data.id}>{data.otherInfo}</CompanyInfoList>
        ))}
      </Others>
    </FooterSection>
  );
};
const FooterSection = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 30px;
  background-color: #f5f5f5;
  color: #4d4d4d;
  border-top: 1px, solid, black;
  font-family: SpoqaHanSans, Abel, Lato-Bold, Droid Sans, AppleSDGothicNeo,
    'sans-serif';
  font-weight: 300;
  line-height: 1;
  font-size: 14px;
`;
const Logo = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-weight: 400;
`;

const FooterLink = styled(Link)`
  margin-right: 10px;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

const CompanyInfo = styled.ul`
  text-decoration: none;
`;

const CompanyInfoList = styled.li`
  &:nth-child(9) {
    padding-top: 10px;
  }
`;

const Others = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 50px;
  border-left: 1px solid #cccccc;
  list-style: none;
`;

export default Footer;
