import { ReactNode, createContext, useState } from "react";
import { api } from "../lib/axios";

interface UserDataType {
  avatar_url: string
  name: string
  login: string
  bio: string
  followers: number
  following: number
  public_repos: number
}

interface UserContextType {
  userData: UserDataType
  handleFetchUser: (username: string) => Promise<void>
}

interface UserContextProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [userData, setUserData] = useState({} as UserDataType)

  async function handleFetchUser(username: string) {
    const response = await api.get(`/${username}`)

    setUserData(response.data)
  }

  return (
    <UserContext.Provider value={{
      userData,
      handleFetchUser
    }}>
      {children}
    </UserContext.Provider>
  )
}