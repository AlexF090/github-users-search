import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

function Search({ placeholder, userName, setUserName, fetchSearch }) {
  function handleOnChange(event) {
    setUserName(event.target.value);
  }

  useEffect(() => {
    if (userName.length > 2) {
      fetchSearch();
    }
  }, [userName]);

  return (
    <Wrapper>
      <SearchIcon />
      <InputField
        type="text"
        placeholder={placeholder}
        value={userName}
        onChange={event => {
          handleOnChange(event);
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: -ms-flexbox; /* IE10 */
  display: flex;
  flex-direction: row-reverse;
  position: sticky;
  top: 0px;
  width: 80%;
  max-width: 75vw;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  z-index: 100;
`;

const InputField = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 10px;
  outline: none;
  border: 1px solid #000;
  border-right: none;
  color: #000;
  border-radius: 12px 0 0 12px;
`;

const SearchIcon = styled(BsSearch)`
  padding: 10px;
  background: #fff;
  color: #000;
  border: 1px solid #000;
  border-left: none;
  border-radius: 0 12px 12px 0;
  height: auto;
  min-width: 50px;
`;

export default Search;
