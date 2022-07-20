import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Header from './components/Header';
import Detailpage from './pages/Detailpage';
import Favortitepage from './pages/Favortitepage';
import Navigation from './components/Navigation';

const gitHubApiKey = process.env.REACT_APP_GITHUB_API_KEY;

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [userName, setUserName] = useState('');
  const [favoriteIDs, setFavoriteIDs] = useState(
    () => JSON.parse(localStorage.getItem('favoriteIDs')) ?? []
  );
  const url = `https://api.github.com/search/users?q=${userName}`;

  function fetchSearch() {
    if (url !== 'https://api.github.com/search/users?q=') {
      fetch(url, {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Token ${gitHubApiKey}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          return setSearchResults(data.items);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  function toggleFavorite(id) {
    if (favoriteIDs.includes(id)) {
      const updatedFavoriteIDs = favoriteIDs.filter(favID => favID !== id);
      setFavoriteIDs(updatedFavoriteIDs);
    } else {
      setFavoriteIDs([...favoriteIDs, id]);
    }
  }

  useEffect(() => {
    localStorage.setItem('favoriteIDs', JSON.stringify(favoriteIDs));
  }, [favoriteIDs]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Landingpage
              placeholder="Enter an user Name..."
              userName={userName}
              setUserName={setUserName}
              searchResults={searchResults}
              fetchSearch={fetchSearch}
              detailsMode={false}
              favoriteIDs={favoriteIDs}
              toggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="user/:id"
          element={
            <Detailpage
              toggleFavorite={toggleFavorite}
              favoriteIDs={favoriteIDs}
              detailsMode={true}
            />
          }
        />
        <Route
          path="favorites"
          element={<Favortitepage toggleFavorite={toggleFavorite} favoriteIDs={favoriteIDs} />}
        />
        <Route
          path="*"
          element={
            <Landingpage
              placeholder="Enter an user Name..."
              userName={userName}
              setUserName={setUserName}
              searchResults={searchResults}
              fetchSearch={fetchSearch}
              detailsMode={false}
            />
          }
        />
      </Routes>
      <Navigation />
    </>
  );
}

export default App;
