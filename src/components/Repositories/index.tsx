import { Star, Link } from "phosphor-react";
import { Container, LanguageAndStarsContainer, Repo, RepoDescription, RepoList, RepoTitle, Stars } from "./styles";
import { useContext } from 'react'
import { UserContext } from "../../contexts/User";

export function Repositories() {
  const { userData } = useContext(UserContext)

  const { repos } = userData

  console.log(repos)

  return (
    <>{repos ? (
      <Container>
        <h2>Repositórios</h2>

        <RepoList>
          {repos.map(repo => {
            return (
              <Repo key={repo.id}>
                <RepoTitle href={repo.html_url} target="_blank">{repo.name} <Link /></RepoTitle>
                <RepoDescription>{repo.description}</RepoDescription>
                <LanguageAndStarsContainer>
                  <span>{repo.language}</span>
                  <Stars>{repo.stargazers_count} <Star /></Stars>
                </LanguageAndStarsContainer>
              </Repo>
            )
          })}
        </RepoList>
      </Container>
    ) : ''}</>
  )
}