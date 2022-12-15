import { createContext, ReactNode } from 'react'

interface BlogContextProps {}

interface BlogProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextProps)

export function BlogProvider({ children }: BlogProviderProps) {
  return <BlogContext.Provider value={{}}>{children}</BlogContext.Provider>
}
