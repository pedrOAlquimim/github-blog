import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { DefaultLayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <DefaultLayoutContainer>
        <Outlet />
      </DefaultLayoutContainer>
    </div>
  )
}
