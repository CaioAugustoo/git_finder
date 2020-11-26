import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Container } from "../style/GlobalStyle";
import Star from "../img/svg/stars.svg";
import Forks from "../img/svg/forks.svg";

const ReposSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const item = keyframes`
  from {
    opacity: 0
    transform: translateY(20px);
  } to {
    opacity: 1;
    transform: translateY(0rem)
  }
`;

const ReposBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: var(--shadow-primary);
  background: var(--white);
  width: 390px;
  min-height: 200px;
  margin: 20px;
  padding: 25px;
  border-radius: 3px;
  position: relative;
  top: -50px;
  transition: all 0.3s ease;
  animation: ${item} 0.4s ease;
  animation-fill-mode: both;
  opacity: 0;

  @media (min-width: 18.75rem) and (max-width: 49.1875rem) {
    width: 330px;
    min-height: 180px;
  }

  &:hover {
    transform: translateY(-0.3125rem);
  }
`;

const ReposTitle = styled.div`
  color: var(--primary);
  font-family: "Space Mono", monospace;

  h3 {
    font-weight: 500;
    padding-bottom: 20px;
  }
`;

const ReposDescription = styled.div`
  p {
    opacity: 1;
    font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ReposLanguages = styled.div`
  margin-top: 30px;
  p {
    font-weight: 400;
    opacity: 0.8;
  }
`;

const RepoInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RepoSize = styled.div`
  margin-top: 30px;
  opacity: 0.8;
`;

const RepoStars = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  img {
    margin: 0px 5px;
    opacity: 0.7;
  }
`;

const RepoForks = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;

  img {
    margin: 0px 5px;
    opacity: 0.7;
  }
`;

const ReposData = ({ dataRepos }) => {
  const [topRepositories, setTopRepositories] = useState(null);

  useEffect(() => {
    const getTopRepositories = dataRepos.sort((first, second) =>
      first.stargazers_count < second.stargazers_count ? 1 : -1
    );
    setTopRepositories(getTopRepositories);
  }, [dataRepos]);

  if (topRepositories === null) return null;
  return (
    <Container>
      <ReposSection>
        {topRepositories.map((repo, index) => (
          <a
            href={repo.html_url}
            key={repo.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ReposBox style={{ animationDelay: `${index * 5}ms` }}>
              <ReposTitle>
                <h3>{repo.name}</h3>
              </ReposTitle>

              <ReposDescription>
                <p>{repo.description}</p>
              </ReposDescription>

              <RepoInfos>
                <ReposLanguages>
                  <p>{repo.language}</p>
                </ReposLanguages>

                <RepoStars>
                  <img src={Star} width="15" alt="Stars of repository" />
                  <p>{repo.stargazers_count}</p>
                </RepoStars>

                <RepoForks>
                  <img src={Forks} width="15" alt="Forks of repository" />
                  <p>{repo.forks_count}</p>
                </RepoForks>

                <RepoSize>
                  <p>{repo.size + " KB"}</p>
                </RepoSize>
              </RepoInfos>
            </ReposBox>
          </a>
        ))}
      </ReposSection>
    </Container>
  );
};

export default ReposData;
