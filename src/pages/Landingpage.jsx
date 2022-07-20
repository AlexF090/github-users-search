import React from 'react';
import styled from 'styled-components';
import Search from '../components/Search';
import Card from '../components/Card';

function Landingpage({
  placeholder,
  userName,
  setUserName,
  searchResults,
  fetchSearch,
  detailsMode,
  favoriteIDs,
  toggleFavorite,
}) {
  return (
    <Wrapper>
      <Search
        placeholder={placeholder}
        userName={userName}
        setUserName={setUserName}
        searchResults={searchResults}
        fetchSearch={fetchSearch}
        favoriteIDs={favoriteIDs}
        toggleFavorite={toggleFavorite}
      />
      <section>
        {searchResults && (
          <ul>
            {searchResults.map(searchResult => {
              if (searchResult.login.toLowerCase().includes(userName.toLowerCase())) {
                return (
                  <ItemWrapper key={searchResult.id}>
                    <Card
                      searchResult={searchResult}
                      detailsMode={detailsMode}
                      favoriteIDs={favoriteIDs}
                      toggleFavorite={toggleFavorite}
                    />
                  </ItemWrapper>
                );
              }
            })}
          </ul>
        )}
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  margin-bottom: 6.25rem;
`;

const ItemWrapper = styled.li`
  position: relative;
  margin: 1.5rem auto;
  padding: 1rem;
  width: 75vw;
  border-radius: 24px;
  list-style: none;
`;

export default Landingpage;
