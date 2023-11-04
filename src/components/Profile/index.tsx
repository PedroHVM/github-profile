import { useContext } from "react";
import { Description, Info, Name, UserAndPicContainer, ProfileContainer, ProfilePicture, UserInfos, NameAndBioContainer } from "./styles";
import { UserContext } from "../../contexts/User";
import { Oval } from "react-loader-spinner";

export function Profile() {
  const { userData, isLoading } = useContext(UserContext)
  return (
    <>
      {isLoading ? <Oval height={80} width={80} color='#3294F8' secondaryColor="#1C2F41" /> :
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
        )}
    </>
  )
}