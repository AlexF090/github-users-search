import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const gitHubApiKey = process.env.REACT_APP_GITHUB_API_KEY;

function Favortitepage({ favoriteIDs, toggleFavorite }) {
  const [favoriteUsers, setFavoriteUsers] = useState([]);
  const url = 'https://api.github.com/users/';

  const getFavoriteUsers = () => {
    const favoriteFetches = favoriteIDs.map(favoriteID =>
      fetch(url + favoriteID, {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Token ${gitHubApiKey}`,
        },
      })
        .then(data => data.json())
        .then(data => data)
    );
    Promise.all(favoriteFetches).then(data => {
      setFavoriteUsers(data);
    });
  };

  useEffect(() => {
    getFavoriteUsers();
  }, []);

  return (
    <main>
      {favoriteUsers && favoriteUsers.length > 0 ? (
        favoriteUsers.map(favoriteUser => {
          return (
            <ItemWrapper key={favoriteUser.id}>
              <Card
                favoriteIDs={favoriteIDs}
                toggleFavorite={toggleFavorite}
                searchResult={favoriteUser}
                detailsMode={false}
              />
            </ItemWrapper>
          );
        })
      ) : (
        <Empty>There are no favorites saved</Empty>
      )}
    </main>
  );
}

const ItemWrapper = styled.section`
  position: relative;
  margin: 1.5rem auto;
  padding: 1rem;
  width: 75vw;
  border-radius: 24px;
  list-style: none;
`;

const Empty = styled.h3`
  margin-top: 10rem;
  text-align: center;
  color: #fff;
`;

export default Favortitepage;
