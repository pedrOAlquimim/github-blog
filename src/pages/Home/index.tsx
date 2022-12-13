import { Header } from '../../components/Header'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, SearchContainer } from './styles'

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
      </HomeContainer>
    </div>
  )
}
