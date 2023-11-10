import { Star, Link } from "phosphor-react";
import { Container, LanguageAndStarsContainer, Repo, RepoDescription, RepoList, RepoTitle, Stars, ViewMoreButton } from "./styles";
import { useContext, useState } from 'react'
import { UserContext } from "../../contexts/User";

export function Repositories() {
  const { userData } = useContext(UserContext)

  const [reposDisplayed, setReposDisplayed] = useState<number>(4)

  const { repos } = userData

  function handleViewMore() {
    if (reposDisplayed + 4 < repos.length) {
      setReposDisplayed((prev) => prev + 4)
    } else {
      setReposDisplayed(repos.length)
    }
  }

  return (
    <>{repos ? (
      <Container>
        <h2>Repositórios</h2>

        <RepoList>
          {repos.map((repo, i) => {
            if (i < reposDisplayed) {
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
            }
          })}
        </RepoList>
        {reposDisplayed < repos.length && <ViewMoreButton type="button" onClick={handleViewMore}>
          Ver mais
        </ViewMoreButton>}

      </Container>
    ) : ''}</>
  )
}