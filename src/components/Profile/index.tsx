import { useContext } from "react";
import { Description, Info, Name, UserAndPicContainer, ProfileContainer, ProfilePicture, UserInfos, NameAndBioContainer } from "./styles";
import { UserContext } from "../../contexts/User";

export function Profile() {
  const { userData } = useContext(UserContext)

  console.log(userData)

  return (
    userData.login && (
      <ProfileContainer>
        <UserAndPicContainer>
          <ProfilePicture src={userData.avatar_url} alt="" />
          <p>@{userData.login}</p>
        </UserAndPicContainer>
        <UserInfos>
          <NameAndBioContainer>
            <Name>{userData.name}</Name>
            <Description>
              {userData.bio}
            </Description>
          </NameAndBioContainer>
          <Info>Seguidores: <span>{userData.followers}</span></Info>
          <Info>Seguindo: <span>{userData.following}</span></Info>
          <Info>Repositórios: <span>{userData.public_repos}</span></Info>
        </UserInfos>
      </ProfileContainer>
    )
  )
}