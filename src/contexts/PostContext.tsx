import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface PostProps {
  number: number
  title: string
  body: string
  comments: number
  updated_at: string
  html_url: string
  user: {
    login: string
  }
}

interface PostContextProps {
  posts: PostProps[]
}

interface BlogProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextProps)

export function PostProvider({ children }: BlogProviderProps) {
  const [posts, setPosts] = useState<PostProps[]>([])

  async function fetchPosts() {
    const response = await api.get('/repos/pedrOAlquimim/github-blog/issues')

    setPosts(response.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  )
}
