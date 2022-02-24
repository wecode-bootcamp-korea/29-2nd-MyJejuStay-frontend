import React from 'react';
import styled from 'styled-components';

function MyPageDetail({ header, list }) {
  return (
    <InformationLists>
      <InformationHeader>{header}</InformationHeader>

      {list.map(li => (
        <InformationList key={li.id}>
          <InformationListTitle>{li.list_title}</InformationListTitle>
          <InformationListContent>{li.list_information}</InformationListContent>
        </InformationList>
      ))}
    </InformationLists>
  );
}

const InformationLists = styled.ul`
  margin-bottom: 100px;
`;
const InformationHeader = styled.div`
  font-size: 22px;
  border-bottom: 2px solid black;
  padding-bottom: 15px;
`;

const InformationList = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 30px 0px 30px 0px;
  border-bottom: 1px solid lightgray;
`;
const InformationListTitle = styled.div`
  width: 23%;
`;

const InformationListContent = styled.div`
  text-align: right;
`;
export default MyPageDetail;
