import { Header } from '../../components/Header'
import { Post } from './components/Post'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, PostConatainer, SearchContainer } from './styles'

export function Home() {
  return (
    <div>
      <Header />

      <HomeContainer>
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
      </HomeContainer>
    </div>
  )
}
