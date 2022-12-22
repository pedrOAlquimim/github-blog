import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { Post } from './components/Post'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import { PostConatainer, SearchContainer } from './styles'

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

export function Home() {
  const [posts, setPosts] = useState<PostProps[]>([])

  const postsQuantity = posts.length

  async function fetchPosts(query: string = '') {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:pedrOAlquimim/github-blog`,
    )

    setPosts(response.data.items)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>
      <ProfileCard />

      <SearchContainer>
        <div>
          <p>Publicações</p>
          <span>{postsQuantity} publicações</span>
        </div>

        <SearchForm fetchPosts={fetchPosts} />
      </SearchContainer>

      <PostConatainer>
        {posts.map((post) => {
          return <Post key={post.number} post={post} />
        })}
      </PostConatainer>
    </div>
  )
}
