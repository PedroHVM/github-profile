import styled from "styled-components";

export const ProfileContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: ${(props) => props.theme['base-div-background']};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 28px 0px;
  width: 50rem;
  border-radius: 8px;
  display: flex;
  gap: 2rem;
`

export const UserAndPicContainer = styled.div`
  text-align: center;
  width: 25%;
  display: inline-block;
`

export const Name = styled.p`
  font-size: xx-large;
  height: fit-content;
  width: 100%;
`

export const Description = styled.p`
  font-size: smaller;
  height: fit-content;
  width: 100%;
`

export const ProfilePicture = styled.img`
  border-radius: 999px;
  width: 10rem;
`

export const UserInfos = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;

  flex-wrap: wrap;
`

export const Info = styled.p`
  font-size: large;
  flex: 1;
  height: fit-content;
  padding: 1em;
  border: 1px solid ${(props => props.theme["base-border"])};
  border-radius: 8px;
  text-align: center;
`