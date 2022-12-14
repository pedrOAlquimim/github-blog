import { ExternalLink } from '../../../../components/ExternalLink'
import { IconInfo } from '../../../../components/IconInfo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { PostInfoContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <header>
        <NavLink to={'/'}>
          <span>
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
          <p>Voltar</p>
        </NavLink>

        <ExternalLink text={<p>Ver no Github</p>} />
      </header>

      <h2>JavaScript data types and data structures</h2>

      <div>
        <IconInfo />
        <IconInfo />
        <IconInfo />
      </div>
    </PostInfoContainer>
  )
}
