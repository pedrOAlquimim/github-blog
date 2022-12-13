import { ReactNode } from 'react'
import { ExtenalLinkContainer } from './styles'

interface ExternalLinkProps {
  text: ReactNode
  icon: ReactNode
}

export function ExternalLink({ text, icon }: ExternalLinkProps) {
  return (
    <ExtenalLinkContainer>
      <p>{text}</p>
      <span>{icon}</span>
    </ExtenalLinkContainer>
  )
}
