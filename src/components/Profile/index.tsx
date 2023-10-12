import { Description, Info, Name, UserAndPicContainer, ProfileContainer, ProfilePicture, UserInfos } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <UserAndPicContainer>
        <ProfilePicture src="https://github.com/lucasadsr.png " alt="" />
        <p>@lucasadsr</p>
      </UserAndPicContainer>
      <UserInfos>
        <div>
          <Name>Nome Sobrenome</Name>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit fugiat enim iusto ducimus itaque ea, nobis laudantium. Nihil porro quae tempore ratione, laboriosam sapiente impedit est quis eaque et dicta.
          </Description>
        </div>
        <Info>Seguidores: <span>xx</span></Info>
        <Info>Seguindo: <span>xx</span></Info>
        <Info>Repositórios: <span>xx</span></Info>
      </UserInfos>
    </ProfileContainer>
  )
}