import { ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { ExtenalLinkContainer } from './styles'

interface ExternalLinkProps {
  text: ReactNode
  link: string
}

export function ExternalLink({ text, link }: ExternalLinkProps) {
  return (
    <ExtenalLinkContainer>
      <a href={link} target="_blank" rel="noreferrer">
        {text}
        <span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </span>
      </a>
    </ExtenalLinkContainer>
  )
}
