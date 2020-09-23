import React from "react";
import styled from "styled-components";
import { Container } from "../style/GlobalStyle";

const UserData = styled.div`
  padding: 1.25rem 0rem;
  text-align: center;
`;

const UserDetailsSection = styled.section`
  height: 40rem;
  background: var(--primary);

  @media  (min-width:18.75rem) and (max-width: 49.1875rem) {
    height: 47rem;    
  }
`;

const UserPhoto = styled.div`
  margin: 0.625rem auto;

  img {
    border-radius: 6.25rem;
    border: 0.5rem solid var(--purple);
    transition: opacity 0.3s ease;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const UserName = styled.div`
  margin: 0.3125rem auto;
  color: var(--white);

  h1 {
    font-weight: 500;
    font-size: 2.5rem;
  }

  p {
    color: var(--purple);
    font-size: 1.5rem;
    font-family: 'Space Mono', monospace;
  }

  a,
  p {
    text-decoration: none;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-0.1875rem);
    }
  }
`;

const UserBio = styled.div`
  color: var(--white);

  p {
    margin: 0.9375rem auto;
    max-width: 31.25rem;
    text-align: center;
    font-size: 1.1rem;
  }
`;

const UserStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3.125rem 0px 0px 0px;
`;

const StatBox = styled.div`
  background: var(--secondary);
  color: var(--white);
  border-radius: 0.3125rem;
  margin: 0.35rem;
  width: 150px;
  padding: 15px 20px;

  @media  (min-width:18.75rem) and (max-width: 49.1875rem) {
    margin: 0.15rem;    
  }

  p {
    font-size: 1.5rem;
  }

  h1 {
    font-weight: 400;
    font-size: 1rem;
    opacity: 0.8;
  }
`;

const ProfileData = ({ dataProfile }) => {
  return (
    <UserDetailsSection>
      <Container>
        <UserData>
          <UserPhoto>
            <img
              src={dataProfile.avatar_url}
              alt={dataProfile.name}
              width="180"
            />
          </UserPhoto>

          <UserName>
            <h1>{dataProfile.name}</h1>

            <a
              href={dataProfile.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>@{dataProfile.login}</p>
            </a>
          </UserName>

          <UserBio>
            <p>{dataProfile.bio}</p>
          </UserBio>

          <UserStats>
            <StatBox>
              <p>{dataProfile.public_repos}</p>
              <h1>REPOSITÓRIOS</h1>
            </StatBox>
            <StatBox>
              <p>{dataProfile.followers}</p>
              <h1>SEGUIDORES</h1>
            </StatBox>
            <StatBox>
              <p>{dataProfile.following}</p>
              <h1>SEGUINDO</h1>
            </StatBox>
          </UserStats>

        </UserData>
      </Container>
    </UserDetailsSection>
  );
};

export default ProfileData;
