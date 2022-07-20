import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Detail from './Detail';
import FavoriteHeart from './FavoriteHeart';

function Card({ searchResult, detailsMode, toggleFavorite, favoriteIDs }) {
  const [cardIsInDetailsMode, setCardIsInDetailsMode] = useState(detailsMode);

  return (
    <>
      {cardIsInDetailsMode ? (
        <DetailCardWrapper>
          <ProfilePictureWrapper>
            <Image src={searchResult.avatar_url} alt={`${searchResult.login} profile picture`} />
            <FavoriteHeart
              favoriteIDs={favoriteIDs}
              searchResult={searchResult}
              toggleFavorite={toggleFavorite}
            />
          </ProfilePictureWrapper>
          <UserName>{searchResult.login}</UserName>
          <UnorderedListDetails>
            <Heading>Link:</Heading>
            <Hyperlink href={searchResult.html_url} target="_blank">
              {searchResult.html_url}
            </Hyperlink>
            <Detail text={'Location'} prop={searchResult.location} />
            <Detail text={'Mail'} prop={searchResult.email} />
            <Detail text={'Public Repos'} prop={searchResult.public_repos} />
            <Detail text={'Followers'} prop={searchResult.followers} />
            <Detail text={'Following'} prop={searchResult.following} />
            <Detail text={'Created at'} prop={searchResult.created_at.slice(0, 10)} />
          </UnorderedListDetails>
        </DetailCardWrapper>
      ) : (
        <CardWrapper>
          <ProfilePictureWrapper>
            <CustomLink to={`/user/${searchResult.login}`}>
              <Image src={searchResult.avatar_url} alt={`${searchResult.login} profile picture`} />
            </CustomLink>
            <FavoriteHeart
              favoriteIDs={favoriteIDs}
              searchResult={searchResult}
              toggleFavorite={toggleFavorite}
            />
          </ProfilePictureWrapper>
          <CustomLink to={`/user/${searchResult.login}`}>
            <UserName>{searchResult.login}</UserName>
          </CustomLink>
        </CardWrapper>
      )}
    </>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfilePictureWrapper = styled.div`
  display: inline;
  position: relative;
`;

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 260px;
  border-radius: 24px;
`;

const UserName = styled.h3`
  text-align: center;
  color: #fff;
`;

const UnorderedListDetails = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const Heading = styled.h4`
  /* text-align: center; */
  align-self: center;
  font-weight: 700;
  color: #fff;
`;

const Hyperlink = styled.a`
  display: block;
  margin-bottom: 0.75em;
  color: #fff;
`;

const DetailCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export default Card;
