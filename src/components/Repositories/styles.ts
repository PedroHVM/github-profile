import styled from "styled-components";

export const Container = styled.div`
  width: 900px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;

  h2 {
    text-align: center;
    margin-block: 2rem;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`

export const RepoList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`

export const Repo = styled.li`
  display: flex;
  flex-direction: column;
  gap: 6px;
  border: 1px solid ${(props) => props.theme["base-border"]};
  border-radius: 8px;
  padding: 1rem;
  width: 40%;

  @media (max-width: 800px) {
    width: 100%;
  }
`

export const RepoTitle = styled.a`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 20px;
  color: unset;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const RepoDescription = styled.p`
  font-size: 14px;
`

export const LanguageAndStarsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Stars = styled.div`
  display: flex;
  gap: 4px;
  align-items: baseline;
`

export const ViewMoreButton = styled.button`
  padding: 0.5rem 2.5rem;
  background-color: ${(props) => props.theme["blue"]};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: fit-content;
  margin: 1.5rem auto;
  transition: 100ms;

  &:hover {
    scale: 1.1;
  }
`