import { useContext } from 'react'
import { PostContext } from '../../contexts/PostContext'
import { Post } from './components/Post'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import { PostConatainer, SearchContainer } from './styles'

export function Home() {
  const { posts } = useContext(PostContext)

  return (
    <div>
      <ProfileCard />

      <SearchContainer>
        <div>
          <p>Publicações</p>
          <span>6 publicações</span>
        </div>

        <SearchForm />
      </SearchContainer>

      <PostConatainer>
        {posts.map((post) => {
          return <Post key={post.number} post={post} />
        })}
      </PostConatainer>
    </div>
  )
}
