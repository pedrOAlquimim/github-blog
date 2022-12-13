import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { InfoIconContainer } from './styles'

export function IconInfo() {
  return (
    <InfoIconContainer>
      <span>
        <FontAwesomeIcon icon={faGithub} />
      </span>
      <p>Rocketseat</p>
    </InfoIconContainer>
  )
}
