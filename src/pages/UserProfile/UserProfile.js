import React, { Fragment } from 'react'
import UserFetch from '../../components/UserFetch';
import UserReposSection from '../../components/ReposFetch';

const UserProfile = () => {
  return (
    <Fragment>
      <UserFetch />
      <UserReposSection />
    </Fragment>
  );
};

export default UserProfile;
