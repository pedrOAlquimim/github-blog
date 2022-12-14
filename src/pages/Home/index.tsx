import { Post } from './components/Post'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import { PostConatainer, SearchContainer } from './styles'

export function Home() {
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
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostConatainer>
    </div>
  )
}
