import { ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { ExtenalLinkContainer } from './styles'

interface ExternalLinkProps {
  text: ReactNode
}

export function ExternalLink({ text }: ExternalLinkProps) {
  return (
    <ExtenalLinkContainer>
      <p>{text}</p>
      <span>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </span>
    </ExtenalLinkContainer>
  )
}
