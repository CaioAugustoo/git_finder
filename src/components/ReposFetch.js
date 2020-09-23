import React, {useState, useEffect, Fragment} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Loading from './Loading';
import ReposData from './Repositories';

const UserReposSection = styled.section`
  height: auto;
`;


const UserRepos = () => {  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${params.user}/repos`);
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    fetchPosts()
  }, [params.user]);


  return (
    <Fragment>
      <UserReposSection>
        {loading && <Loading />}
        {!loading && data && <ReposData dataRepos={data}/>}
      </UserReposSection>
    </Fragment>
  );
};

export default UserRepos;

