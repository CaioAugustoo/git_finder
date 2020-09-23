import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../style/GlobalStyle";
import styled from "styled-components";

const SearchInputSection = styled.section`
  color: var(--white);
  background-color: var(--primary);
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    font-weight: 400;
    font-size: 1.8rem;

    @media  (min-width:18.75rem) and (max-width: 49.1875rem) {
      font-size: 1.5rem;
    }
  }
`;

const StyledInput = styled.input`
  color: var(--white);
  background: var(--input-bg);
  border: 0.0625rem solid var(--input-bg);
  width: 23.75rem;
  height: 3.75rem;
  padding: 0.625rem 1.25rem;
  border-radius: 0.125rem;
  font-size: 1.5rem;
  margin: 30px auto;

  @media  (min-width:18.75rem) and (max-width: 49.1875rem) {
    width: 20rem;
  }
`;

const InputSearch = () => {
  const navigate = useNavigate();

  const handleSubmit = ({ target, key }) => {
    if (key === "Enter" && target.value !== "")
      navigate(`/user/${target.value}`);
  };

  return (
    <SearchInputSection>
      <Container>
        <h1>Procure por algum perfil</h1>
        <StyledInput type="text" onKeyDown={handleSubmit}></StyledInput>
      </Container>
    </SearchInputSection>
  );
};

export default InputSearch;
