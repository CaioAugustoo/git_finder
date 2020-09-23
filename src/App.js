import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchUser from './pages/SearchUser/SearchUser';
import UserProfile from './pages/UserProfile/UserProfile';
import GlobalStyle from './style/GlobalStyle';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchUser />} />
          <Route path="/user/:user" element={<UserProfile />} /> 
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </React.Fragment>
  );
};
export default App;