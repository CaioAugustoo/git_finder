import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ProfileData from './UserData';
import Loading from './Loading';

const UserProfileSection = styled.section`
  height: auto;
`;

const UserFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${params.user}`);
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    fetchPosts()
  }, [params.user]);


  return (
    <Fragment>
      <UserProfileSection>
        {loading && <Loading />}
        {!loading && data && <ProfileData dataProfile={data}/>}
      </UserProfileSection>
    </Fragment>
  );
};

export default UserFetch;
