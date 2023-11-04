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
      const response = await api.get(`/${username}`)
      setUserData(response.data)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }

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