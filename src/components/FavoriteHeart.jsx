import React from 'react';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';

function FavoriteHeart({ favoriteIDs, searchResult, toggleFavorite }) {
  return (
    <Wrapper>
      {favoriteIDs?.includes(searchResult.login) ? (
        <ActiveHeart onClick={() => toggleFavorite(searchResult.login)} />
      ) : (
        <InactiveHeart onClick={() => toggleFavorite(searchResult.login)} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ActiveHeart = styled(AiFillHeart)`
  font-size: 3rem;
  color: #002c76;
`;

const InactiveHeart = styled(AiFillHeart)`
  font-size: 3rem;
  color: #ffbd31;
`;

export default FavoriteHeart;
