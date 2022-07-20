import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/Card';

const gitHubApiKey = process.env.REACT_APP_GITHUB_API_KEY;

function Detailpage({ toggleFavorite, favoriteIDs, detailsMode }) {
  const { id } = useParams();
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState();
  const url = 'https://api.github.com/users/' + id;

  function fetchUser() {
    fetch(url, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Token ${gitHubApiKey}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        data.message ? setError('The user could not be found') : setCurrentUser(data);
      })
      .catch(error => {
        setError('The user could not be found');
      });
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      {currentUser && (
        <Wrapper>
          <Card
            searchResult={currentUser}
            favoriteIDs={favoriteIDs}
            toggleFavorite={toggleFavorite}
            detailsMode={detailsMode}
          />
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.main`
  margin: 1.5rem auto;
  padding: 1rem;
  width: 75vw;
`;

export default Detailpage;
