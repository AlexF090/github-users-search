import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
      <h1>GHus</h1>
      <h2>GitHub-users-search</h2>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  margin-top: 1rem;
  text-align: center;
  color: #ffffff;
`;

export default Header;
