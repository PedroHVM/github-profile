import { ReactNode, createContext, useState } from "react";
import { api } from "../lib/axios";

interface Repo {
  id: number
  name: string
  stargazers_count: number
  description: string
  html_url: string
  language: string
}

interface UserDataType {
  avatar_url: string
  name: string
  login: string
  bio: string
  followers: number
  following: number
  public_repos: number
  repos: Repo[]
}

interface UserContextType {
  userData: UserDataType
  handleFetchUser: (username: string) => Promise<void>
  isLoading: boolean
}

interface UserContextProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [userData, setUserData] = useState({} as UserDataType)
  const [isLoading, setIsLoading] = useState(false)

  async function handleFetchUser(username: string) {

    try {
      setIsLoading(true)
      const userResponse = await api.get(`/${username}`)
      const reposResponse = await api.get(`/${username}/repos?sort=updated`)
      setUserData({ ...userResponse.data, repos: reposResponse.data })
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }

    console.log(userData)

  }

  return (
    <UserContext.Provider value={{
      userData,
      handleFetchUser,
      isLoading
    }}>
      {children}
    </UserContext.Provider>
  )
}