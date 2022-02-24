import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'react-modal';
import Toggle from './Toggle';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  content: {
    width: '400px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    borderRadius: '10px',
    transform: 'translate(-50%, -50%)',
    paddingTop: '20px',
  },
};

const themes = ['해변', '숲', '도심'];

const FilterModal = ({
  openFilterModal,
  closeFilterModal,
  isOpenModal,
  setIsOpenModal,
}) => {
  const navigate = useNavigate();
  const [checkedTheme, setCheckedThemes] = useState([]);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (isOpenModal === false) {
      setCheckedThemes([]);
    }
  }, [isOpenModal]);

  const handleCheckedThemes = e => {
    const curr = checkedTheme;
    if (curr.includes(e.target.defaultValue)) {
      const removeDoubleChecked = curr.filter(
        cur => cur !== e.target.defaultValue
      );

      setCheckedThemes(removeDoubleChecked);
      return;
    }
    setCheckedThemes([...checkedTheme, e.target.defaultValue]);
  };

  const toggleHandler = e => {
    setIsVerified(e.target.checked);
  };

  const getFormatParams = () => {
    let queryThemes = '';
    let theme = checkedTheme.map(theme => {
      if (checkedTheme[0] === theme) {
        queryThemes += `?themaGroup=${theme}`;
      } else {
        queryThemes += `&themaGroup=${theme}`;
      }
      return queryThemes;
    });
    const finalCheck = theme.length > 0 ? theme[theme.length - 1] : '?' + null;

    const allQueryParams = isVerified
      ? `${finalCheck}&isVerified=1`
      : `${finalCheck}`;

    setIsVerified(false);

    return allQueryParams;
  };

  const handleSubmit = () => {
    const queryParameter = getFormatParams();
    setIsOpenModal(prev => !prev);

    navigate(`/productlist${queryParameter}`);
  };

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={closeFilterModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalContentWarp>
        <ModalTitle>조건 선택</ModalTitle>
        <FilterLocation>테마</FilterLocation>
        {themes.map((loc, i) => (
          <CheckBoxWrap key={i}>
            <FilterCheck
              type="checkbox"
              id={i}
              onClick={handleCheckedThemes}
              value={loc}
            />
            <FilterCheckLabel htmlFor={i}>{loc}</FilterCheckLabel>
          </CheckBoxWrap>
        ))}
        <ToggleVerified>인증된 숙소만 보기</ToggleVerified>
        <Toggle onChange={toggleHandler} />
      </ModalContentWarp>
      <ModalFooter>
        <FilterSubmitBtn onClick={handleSubmit} type="submit">
          검색
        </FilterSubmitBtn>
      </ModalFooter>
    </Modal>
  );
};

export default FilterModal;

const ModalContentWarp = styled.div`
  padding: 0 10px;
`;

const ModalTitle = styled.div`
  padding: 0 0 20px 0;
  border-bottom: ${({ theme }) => theme.border};
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;

const FilterLocation = styled.p`
  margin: 50px 0 18px 0;
  font-size: 20px;
`;

const CheckBoxWrap = styled.div`
  display: flex;
  width: 50%;
`;

const FilterCheck = styled.input``;

const FilterCheckLabel = styled.label`
  padding: 0 6px;
`;

const ModalFooter = styled.div`
  padding: 1rem 0;
`;

const FilterSubmitBtn = styled.button`
  width: 150px;
  padding: 1rem 0;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

const ToggleVerified = styled.p`
  font-size: 20px;
  margin: 20px 0 10px 0;
`;
