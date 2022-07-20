import React from 'react';
import styled from 'styled-components';

function Detail({ text, prop }) {
  function propCheck(prop) {
    if (prop === null) {
      return '🚫';
    } else if (prop === 0) {
      return '🚫';
    } else {
      return prop;
    }
  }

  return (
    <ListWrapper>
      <h4>{text}:</h4>
      <p>{propCheck(prop)}</p>
    </ListWrapper>
  );
}

const ListWrapper = styled.li`
  margin: 0.5em 0;
  list-style: none;
  color: #fff;
  text-align: center;
`;

export default Detail;
